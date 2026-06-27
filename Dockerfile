FROM node:22-bookworm-slim AS nodebase

FROM ubuntu:24.04

ARG AUDIVERIS_VERSION=5.10.2
ARG AUDIVERIS_PACKAGE=Audiveris-5.10.2-ubuntu24.04-x86_64.deb

COPY --from=nodebase /usr/local/ /usr/local/

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    ca-certificates curl poppler-utils libasound2t64 libxi6 libxtst6 \
  && curl -fsSL -o /tmp/audiveris.deb \
    "https://github.com/Audiveris/audiveris/releases/download/${AUDIVERIS_VERSION}/${AUDIVERIS_PACKAGE}" \
  && dpkg-deb --extract /tmp/audiveris.deb / \
  && test -x /opt/audiveris/bin/Audiveris \
  && rm -f /tmp/audiveris.deb \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY . .

ENV NODE_ENV=production
ENV PORT=3000
ENV AUDIVERIS_BIN=/opt/audiveris/bin/Audiveris
EXPOSE 3000

RUN useradd --system --create-home --uid 10001 appuser \
  && chown -R appuser:appuser /app
USER appuser
CMD ["node", "server/index.js"]
