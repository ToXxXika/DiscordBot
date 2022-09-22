const RichPresence= require('discord-rich-presence')('262937104873553922');
RichPresence.updatePresence({

    state: 'Working',
    details: 'Playing Pro Clubs',
    startTimestamp: Date.now(),
    largeImageKey: 'ealogo',
    instance: true,
    //add buttons
    buttons: [
        { label: 'TWITCH', url: 'https://www.twitch.tv/Yostrek' },
        { label: 'DISCORD', url: 'https://www.twitch.tv/Yostrek' },
    ]
});
module.exports={
    name: 'ready',
    once: true,
    async execute(client){

        console.log(`Ready!!! ${client.user.tag} is logged and online`);

    }
}
