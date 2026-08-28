# ==============================================================================
# SynapseOS / Sanjeevni-OS OpenWA WhatsApp Gateway Dockerfile
# Node.js 20 with Headless Chromium Support for WhatsApp Web Session Management
# ==============================================================================

FROM node:20-bullseye-slim

# Install Chromium and required sandbox dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    libxss1 \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
    NODE_ENV=production

COPY package.json ./
RUN npm install --omit=dev

COPY . .

# Persistent WhatsApp session storage directory
RUN mkdir -p /app/_sessions && chmod -R 777 /app/_sessions

EXPOSE 8080

CMD ["node", "runner.js"]
