module.exports={
    data: {
        name: `youtube`,
    },
    async execute(interaction,client){
        await interaction.reply({
            content:'https://youtube.com/channel/UCnpXVMsnigCdj8bA9V2R95Q',
        })
    }
}
