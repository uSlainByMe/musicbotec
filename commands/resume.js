const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Muziek speelt weer`);
    }

    return [message.delete(), utils.timed_msg('⚠ Er is geen liedje aan het spelen.', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: []
};