const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const loginData = JSON.parse(fs.readFileSync("accesData.json","utf8"));

const token = loginData.token;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg,match)=>{
    const chatId = msg.chat.id;
    const resp = match[1];
    msg.chat.
    bot.sendMessage(chatId,resp);
});

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, );
});

