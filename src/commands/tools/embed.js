const {SlashCommandBuilder, EmbedBuilder,Embed} = require('discord.js');
module.exports={
    data : new SlashCommandBuilder().setName('embed').setDescription("This is an Embed for Test Purposes"),
    async execute(interaction,client){
      const embed = new EmbedBuilder()
          .setTitle('This is an Embed')
            .setDescription('This is a description')
            .setColor('#0099ff')
            .setAuthor({
                url:`https://www.facebook.com/DarkToXika/`,
                iconURL:interaction.user.displayAvatarURL(),
                name:interaction.user.tag
            })
          .setImage(client.user.displayAvatarURL()) // this will take the bot's avatar
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
