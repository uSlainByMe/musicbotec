const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('EC', {type: 'PLAYING'});
            console.log('Ik ben klaar om muziek te spelen!');
        });
    }
    
};
