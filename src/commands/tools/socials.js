const {SlashCommandBuilder,EmbedBuilder,Embed} = require('discord.js');
module.exports={
    data: new SlashCommandBuilder().setName('socials').setDescription("Display All club Socials"),
    async execute(interaction,client){
        const embed = new EmbedBuilder()
            .setTitle('Socials')
            .setDescription('All the Socials of the club')
            .setColor('#a434eb')
            .addFields([
                {
                    name: 'Twitter',
                    //add a button inside the embed
                    value: '[Twitter]()',
                    inline: true,
                    iconURL: 'https://proclubshead.com/assets/img/crests/club-default.png'

                },{
                    name: 'Twitch',
                    value: '[Twitch]()',
                    inline: true,
                    iconURL: 'https://proclubshead.com/assets/img/crests/club-default.png'
                }
            ])
        await interaction.reply({embeds: [embed]});
    }
}
