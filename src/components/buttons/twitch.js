module.exports={
    data: {
        name: `twitch`,
    },
    async execute(interaction,client){
        await interaction.reply({
            content:'https://www.twitch.tv/yostrek',
        })
    }
}
