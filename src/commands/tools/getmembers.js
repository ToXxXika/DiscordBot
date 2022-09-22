const {SlashCommandBuilder,EmbedBuilder,Embed} = require('discord.js');
const pc = require("../../api/pcapi");
const proclub = new pc();
module.exports= {
    data: new SlashCommandBuilder().setName('squad').setDescription("Display the Club Members")

}