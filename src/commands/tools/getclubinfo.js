const {SlashCommandBuilder, EmbedBuilder,Embed} = require('discord.js');
const Server = require('../../api/server');
const proclub = new Server();
module.exports={
    data : new SlashCommandBuilder().setName('getclubinfo').setDescription("Display the Club Info")
        //add multiple string options
        .addStringOption(option => option.setName('clubname').setDescription('Club Name').setRequired(true))
        .addStringOption(option => option.setName('platform').setDescription('The Platform').setRequired(true)),
    async execute(interaction,client){
        //TODO: how to get the club id from the interaction
        const clubName = interaction.options.getString('clubname');
        const plateform = interaction.options.getString('platform');
        const clubId = await proclub.getClubIdByName(plateform,clubName);
        console.log("1-----"+clubId);
        console.log("2------"+plateform);
         const pc  =  await proclub.getClubInfo(plateform,clubId);

         console.log("club")
         console.log("******")
        const embed = new EmbedBuilder()
            .setTitle(pc["name"])
            .setDescription('Blinky Boys jam3eya fihech rjel')
            .setColor('#a434eb')
            .setAuthor({
                url:`https://www.facebook.com/DarkToXika/`,
                iconURL:interaction.user.displayAvatarURL(), //this will take the user's avatar
                name:interaction.user.tag //this will take the user's tag
            })
            .setImage(`https://proclubshead.com/assets/img/crests/club-default.png`) // this will take the bot's avatar
            .setThumbnail(client.user.displayAvatarURL())   // small image for the Embed
            .setURL(`https://www.facebook.com/DarkToXika/`)
            .setFooter({
                iconURL:client.user.displayAvatarURL(),
                text:client.user.tag
            })
            .addFields([
                {
                    name: 'Field 1',
                    value: 'Hello, this is a field',
                    inline: true
                },
                {
                    name: 'Field 2',
                    value: 'Hello, this is a field',
                    inline: true
                }
            ]);
        // Switch it with Twitch Account when you have one to make the title a link
        await interaction.reply({embeds:[embed]});
    },
};
