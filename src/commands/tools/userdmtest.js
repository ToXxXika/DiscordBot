const {SlashCommandBuilder} = require('discord.js');
module.exports = {

    data: new SlashCommandBuilder()
        .setName('r')
        .setDescription('Ready for some Pro Clubs ?'),
    async execute(interaction, client, guild, args) {
           await interaction.deferReply();
        const user = interaction['user']
        try {
            await user.send("Join FIFA 23 Pro Clubs with me! https://discord.gg/rcwpM9GhHD");
        } catch (error) {
            console.error(error);
            return interaction.editReply({content: 'There was an error while sending the message', ephemeral: true});
        }
        const msg = await interaction.editReply({
            content: `${interaction['user']} is ready for some FIFA <@&${1018867358405771300}>`,
            fetchReply: true
        });
        await msg.react('⚽');
        let i = 0;
        let j=0;
        let PlayersArray = [];
        const filer = (reaction) => reaction.emoji.name === '👍';
        const collector = msg.createReactionCollector({time: 60000});
        await collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            i++;
            if(user.id!=="262937104873553922"){
                PlayersArray.push(user.id)
            }

        });
        await collector.on('end', collected => {
            console.log(`Collected ${i - 1} items`);
            for (let i = 0; i < PlayersArray.length; i++) {
                console.log(PlayersArray[i]);
            }

            for(Players in PlayersArray){
                msg.channel.send(`<@${PlayersArray[Players]}> is ready for some FIFA`);
            }
        });


    }
}

