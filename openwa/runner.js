/**
 * Sanjeevani OS — OpenWA WhatsApp Gateway Runner
 * 
 * Standalone Node.js script that boots @open-wa/wa-automate, pairs with WhatsApp,
 * and relays inbound chat/media messages to the Sanjeevani OS FastAPI webhook at:
 * http://localhost:8000/api/whatsapp/webhook
 */

const { create, NotificationLanguage } = require('@open-wa/wa-automate');
const axios = require('axios');
require('dotenv').config();

const FASTAPI_WEBHOOK_URL = process.env.SANJEEVANI_WEBHOOK_URL || 'http://127.0.0.1:8000/api/whatsapp/webhook';
const PORT = process.env.OPENWA_PORT || 3000;

console.log('🌿 Initializing Sanjeevani OS OpenWA Gateway Bridge...');
console.log(`📡 Forwarding inbound WhatsApp messages to: ${FASTAPI_WEBHOOK_URL}`);

create({
  sessionId: "SANJEEVANI_OS_BOT",
  multiDevice: true,
  authTimeout: 60,
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: NotificationLanguage.ENGLISH,
  logConsole: false,
  popup: true,
  qrTimeout: 0,
}).then(client => start(client)).catch(err => {
  console.error('❌ OpenWA bridge startup error:', err);
});

function start(client) {
  console.log('✅ Sanjeevani OS WhatsApp Bot Connected & Listening!');

  // Listen for incoming messages
  client.onMessage(async message => {
    try {
      // If message is an image/media, extract base64
      let mediaData = null;
      if (message.mimetype && message.mimetype.includes('image')) {
        const filename = `${message.t}.${message.mimetype.split('/')[1]}`;
        const mediaBase64 = await client.decryptMedia(message);
        mediaData = {
          data: `data:${message.mimetype};base64,${mediaBase64.toString('base64')}`,
          filename: filename
        };
      }

      const payload = {
        event: 'onMessage',
        data: {
          from: message.from,
          chatId: message.chatId,
          body: mediaData ? mediaData.data : message.body,
          text: message.body,
          caption: message.caption || '',
          type: message.type,
          mimetype: message.mimetype,
          mediaData: mediaData
        }
      };

      // Forward to FastAPI webhook
      const response = await axios.post(FASTAPI_WEBHOOK_URL, payload, {
        timeout: 25000,
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(`[WhatsApp Dispatch] Processed message from ${message.from}: ${response.data.status}`);
    } catch (error) {
      console.error(`[WhatsApp Dispatch Error] ${error.message}`);
    }
  });
}
