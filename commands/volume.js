const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ No musics are being played.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`🎵 Volume is momenteel: **${queue.volume}/100**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, aub kies een volume van 1 tot 100!`, `${config.prefix}volume <volume>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, aun kies een volume van 1 tot 100!`, `${config.prefix}volume <volume>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 De volume is gezet naar **${queue.volume}/100**`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['vol']
};