const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return utils.timed_msg(utils.no_perm(`${message.author}, you do have the permissions to run this command!`), 5000)

    let command = args[0];
    if (!command) return utils.timed_msg(utils.cmd_fail('Aub zet een command voor te herladen!', `${config.prefix}reload <command>`), 5000)

    let response = await bot.unloadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    response = bot.loadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    return [message.delete(), utils.timed_msg(`Command ${command} is succesvol herladen`, 5000)];
};

module.exports.help = {
    name: 'reload',
    aliases: []
};