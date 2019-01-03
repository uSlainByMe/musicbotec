const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('ee0000')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=-Help menu muziekbot-=-`)
        .addField(`${prefix}play <music/url>`, 'Speel een liedje!')
        .addField(`${prefix}search <music>`, 'Zoek een top 10 van liedjes')
        .addField(`${prefix}skip`, 'Slaag een liedje over (Er moeten 3 mensen willen skippen als je geen permissies hebt)')
        .addField(`${prefix}volume [volume]`, 'Kies een volume hoe hard het moet worden gespeelt')
        .addField(`${prefix}pause`, 'Zet de muziek op pauze')
        .addField(`${prefix}resume`,'Begint weer met spelen')
        .addField(`${prefix}stop`, 'Stopt met muziek spelen')
        .addField(`${prefix}reload <command>`, 'Herlaad een specifieke command');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};