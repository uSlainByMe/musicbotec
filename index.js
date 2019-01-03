const discord = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const ready = require('./handlers/ready');
const message = require('./handlers/message');
const config = require('./settiings/config.json');
const {YouTubeAPIKey} = require('./settiings/credentials.json');
const utils = require('./global/utils');
const bot = new discord.Client();
const ffmpeg = require("ffmpeg")

require('./global/functions')(bot, utils, ytdl, config);

bot.on("ready", async () => {

    console.log(`${bot.user.username} kan nu gebruikt worden!`)
    console.log("prefix: !")
    bot.user.setActivity(" | -help", { type: "PLAYING"})
    // bot.channels.get("498844775458275338").send("Het opstarten/restarten van Build-A-Bot is gelukt.. :smile:");

})

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map() // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);