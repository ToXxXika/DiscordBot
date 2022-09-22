const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');
const pc = require("../../api/pcapi");
const proclub = new pc();
module.exports = {
    data: new SlashCommandBuilder().setName('teamstats').setDescription("Display the Club Info")
        //add multiple string options
        .addStringOption(option => option.setName('clubname').setDescription('Club Name').setRequired(true))
        .addStringOption(option => option.setName('platform').setDescription('The Platform').setRequired(true)),
    async execute(interaction, client) {

        await interaction.deferReply();
        //TODO: how to get the club id from the interaction
        const clubName = interaction.options.getString('clubname');
        const plateform = interaction.options.getString('platform').toLowerCase();
        const clubId = await proclub.getClubIdByName(plateform, clubName);
        const pc = await proclub.getClubInfo(plateform, clubId);
        const playerCount = await proclub.getClubMembers(plateform, clubId);
        const clubStats = await proclub.getClubStats(plateform, clubId);
        const embed = new EmbedBuilder()
            .setTitle(pc["name"])
            .setDescription('SET_DESCRIPTION HERE')
            .setColor('#a434eb')
            .setAuthor({
                url: `https://www.facebook.com/DarkToXika/`,
                iconURL: interaction.user.displayAvatarURL(), //this will take the user's avatar
                name: interaction.user.tag //this will take the user's tag
            })
            .setImage(`https://wallpapercave.com/wp/wp4533229.jpg`) // this will take the bot's avatar
            .setThumbnail(`https://media.contentapi.ea.com/content/dam/eacom/fr-fr/common/october-ea-ring.png`)   // small image for the Embed
            .setURL(`https://www.facebook.com/DarkToXika/`)
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .addFields([
                {
                    name: 'Current Division Rank',
                    value: clubStats["currentDivision"].toString(),
                    inline: true
                },
                {
                    name: 'Overall Ranking Points',
                    value: clubStats["overallRankingPoints"].toString(),
                    inline: true
                }
                , {
                    name: 'Player Count',
                    value: playerCount.toString(),
                    inline: false
                },
                {
                    name: 'All Time Goals',
                    value: clubStats["alltimeGoals"].toString(),
                    inline: true
                },
                {
                    name: 'Season Played',
                    value: clubStats["seasons"].toString(),
                    inline: true
                },
                {
                    name: 'Wins',
                    value: clubStats['wins'].toString(),
                    inline: true
                },
                {
                    name: 'Ties',
                    value: clubStats['ties'].toString(),
                    inline: true

                },
                {
                    name: 'Loses',
                    value: clubStats['losses'].toString(),
                    inline: true
                }

            ])
            .setTimestamp();


        await interaction.editReply({
            "content": `${interaction['user']} here is the club info`,
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            "style": 5,
                            "label": `Full Stats`,
                            "url": `https://proclubshead.com/22/club/${plateform}-${clubId}/`,
                            "disabled": false,
                            "type": 2
                        }
                    ]
                }
            ],

            embeds: [embed]
        });
    },
};
