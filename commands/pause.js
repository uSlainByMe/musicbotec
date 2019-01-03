const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(`🎵 Muziek staat nu op pauze`);
    }

    return [message.delete(), utils.timed_msg('⚠ Er is geen muziek aan het spelen.', 5000)];
    
};

module.exports.help = {
    name: 'pause',
    aliases: []
};