const {SlashCommandBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle} = require('discord.js');

module.exports ={
    data: new SlashCommandBuilder().setName('button').setDescription('Test button command'),
    async execute(interaction,client){
        const button = new ButtonBuilder().setStyle(ButtonStyle.Primary).setLabel('Twitch').setCustomId('twitch');
        const row = new ActionRowBuilder().addComponents(button);
        await interaction.reply({
            components: [row]
        });
    },
};
