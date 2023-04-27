

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './cobramain.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'Cyberx 1.1',
    CHANNEL: 'https://t.me/',
    SESSION: process.env.EDM_SESSION === undefined ? 'AQUA=1l 'AQUA=JlIFFYzL#qWI8N-s1cT6S-7HXxx5f2NTVBFLDJNd5tOaxG9bfoA0' : process.env.EDM_SESSION,
    AUTO_REACT: process.env.AUTO_REACT === undefined ? 'false' : process.env.AUTO_REACT,
    URL_1NAME: process.env.URL_1NAME === undefined ? 'Youtube' : process.env.URL_1NAME,
    URL_1LINK: process.env.URL_1LINK === undefined ? 'https://www.youtube.com' : process.env.URL_1LINK,
    URL_2NAME: process.env.URL_2NAME === undefined ? 'Github' : process.env.URL_2NAME,
    URL_2LINK: process.env.URL_2LINK === undefined ? 'https://github.com/edm-official' : process.env.URL_2LINK,
    FOOTER: process.env.FOOTER === undefined ? 'Powered By CyberX' : process.env.FOOTER,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    ANTIGROUP: process.env.ANTIGRP_LINK === undefined ? 'false' : process.env.ANTIGRP_LINK,
    VOICEEVA: process.env.VOICE_EVA === undefined ? 'false' : process.env.VOICE_EVA,
    CHATBOT: process.env.CHATBOT === undefined ? 'false' : process.env.CHATBOT,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    CAP_BIO: process.env.CAP_BIO === undefined ? '© EDM OFFICIAL' : process.env.CAP_BIO,
    CAPTION: process.env.CAPTION === undefined ? '© EDM OFFICIAL' : process.env.CAPTION,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/0JwXrz0/20220629-215612.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ? 'false' : process.env.INBOX_BLOCK,
    INBOX_BLOCK_MSG: process.env.INBOX_BLOCK_MSG === undefined ? 'default' : process.env.INBOX_BLOCK_MSG,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/0JwXrz0/20220629-215612.jpg' : process.env.ALIVE_LOGO,
    ALIVE_CMD: process.env.ALIVE_CMD === undefined ? 'alive' : process.env.ALIVE_CMD,
    CUS_PANEL: process.env.CUS_PANEL === undefined ? 'menu' : process.env.CUS_PANEL,
    DEPLOYER: process.env.DEPLOYER === undefined ? 'Buddhika' : process.env.DEPLOYER,
    DETAILS: process.env.DETAILS === undefined ? 'true' : process.env.DETAILS, 
    C_EMOJI: process.env.C_EMOJI === undefined ? '🥽' : process.env.C_EMOJI,
    D_EMOJI: process.env.D_EMOJI === undefined ? '🌀' : process.env.D_EMOJI,
    STIC_REACT_EMOJI: process.env.STIC_REACT_EMOJI === undefined ? '🥽' : process.STIC_REACT_EMOJI,
    IMG_REACT_EMOJI: process.env.IMG_REACT_EMOJI === undefined ? '🥽' : process.IMG_REACT_EMOJI,
    VID_REACT_EMOJI: process.env.VID_REACT_EMOJI === undefined ? '🥽' : process.VID_REACT_EMOJI,
    MSG_REACT_EMOJI: process.env.MSG_REACT_EMOJI === undefined ? '🥽' : process.MSG_REACT_EMOJI,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'CyberX' : process.env.BOT_NAME,
    XTEAM_API: process.env.XTEAM_API === undefined ? 'c449b3bbc66d2281c167b77b99f07ef7' : process.env.XTEAM_API,    
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*Downloading Your Song...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*Uploading Your Song...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*Downloading Your Video...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*Uploading Your Video...*' : process.env.VIDEO_UP,
    FILE_DOWN: process.env.FILE_DOWN === undefined ? '*Downloading Your file...*' : process.env.FILE_DOWN,
    FILE_UP: process.env.FILE_UP === undefined ? '*Uploading Your file...*' : process.env.FILE_UP,
    CAPTION_MSG: process.env.CAPTION_MSG === undefined ? 'Copyright (c) 2022 CyberX' : process.env.CAPTION_MSG,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    IMGBB: process.env.IMGBB === undefined ? false : process.env.IMGBB,
    STIC_WM:process.env.STIC_WM === undefined ? 'Created By Buddhika' : process.env.STIC_WM,
    OWN_NAME:process.env.OWN_NAME === undefined ? 'Buddhika' : process.env.OWN_NAME,
    OWN_NUMBER:process.env.OWN_NUMBER === undefined ? '94766866297' : process.env.OWN_NUMBER,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './cobramain.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? '2VUgerA2nVcpC1wq5vkAn6Zw' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    OWN: "94766866297,0"
};
