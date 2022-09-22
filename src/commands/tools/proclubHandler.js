const {SlashCommandBuilder} = require('discord.js');
module.exports={
    data : new SlashCommandBuilder().setName('proclub').setDescription("Test proclub command"),
    async execute(interaction,client){
             await interaction.deferReply();
        const newMessage = `Hello Proclub command is working`;
        await interaction.editReply({
           "content": newMessage,
            "embeds": [
                {
                    "title": "Proclub",
                    "description": "Proclub command is working",
                     "color": 16711680
                },
            ],
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            "style": 5,
                            "label": `test`,
                            "url": `https://proclubshead.com/22/club-squad/pc-649/`,
                            "disabled": false,
                            "type": 2
                        }
                    ]
                }
            ],
        });
    }

}
