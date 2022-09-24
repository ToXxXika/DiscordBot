const {SlashCommandBuilder,EmbedBuilder,Embed, Message} = require('discord.js');
const pc = require("../../api/pcapi");
const proclub = new pc();
module.exports= {
    /**
     * @param {Message} message
     *
     */
    data: new SlashCommandBuilder().setName('playerstat').setDescription("Display the Club Members")
        //add multiple string options
        .addStringOption(option => option.setName('clubname').setDescription('Club Name').setRequired(true))
        .addStringOption(option => option.setName('platform').setDescription('The Platform').setRequired(true))
        .addStringOption(option => option.setName('playername').setDescription('The Player Name').setRequired(true)),
    async execute(interaction, client) {
        await interaction.deferReply();
        const clubName = interaction.options.getString('clubname');
        const plateform = interaction.options.getString('platform');
        const playerName = interaction.options.getString('playername');
        const clubId = await proclub.getClubIdByName(plateform, clubName);
        const playerStat = await proclub.getPlayerStats(plateform, clubId, playerName);
         //test if the clubName is valid ,playerName is valid and the club is not empty
        if(  playerName !== undefined || playerStat !== undefined || clubId !== undefined ) {
            const embed = new EmbedBuilder()
                .setTitle(playerStat["name"])
                .setDescription('Favorite Position: ' + playerStat["favoritePosition"])
                .setColor('#a434eb')
                .addFields([
                    {
                        name: 'Games Played',
                        value: playerStat["gamesPlayed"].toString(),
                        inline: true
                    },
                    {
                        name: 'Goals',
                        value: playerStat["goals"].toString(),
                        inline: true
                    },
                    {
                        name: 'Assists',
                        value: playerStat["assists"].toString(),
                        inline: true
                    },
                    {
                        name: 'Man of The Match',
                        value: playerStat["manOfTheMatch"].toString(),
                        inline: true
                    }
                ]);
            await interaction.editReply({embeds: [embed]});

        }else{
            const embed = new EmbedBuilder().setDescription('Player Not Found').setColor('#a434eb');
            await interaction.editReply({embeds: [embed]});

        }
    },

};

