const {SlashCommandBuilder} = require('discord.js');
module.exports={
    data : new SlashCommandBuilder().setName('proclub').setDescription("Test proclub command"),
    async execute(interaction,client){
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const newMessage = `Hello Proclub command is working`;
        await interaction.editReply({
            content: newMessage
        });
    }
}
