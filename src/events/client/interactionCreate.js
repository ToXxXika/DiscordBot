module.exports={
    name: 'interactionCreate',
    async execute(interaction,client){
        if(interaction.isChatInputCommand()){
            const {commands } = client;
            const {commandName} = interaction;
            const command = commands.get(commandName);
            if(!command) return;
            try{
                await  command.execute(interaction,client);
                console.log("******************************************************")
                console.log(interaction)
            }catch (error){
                console.error(error);
                await interaction.reply({content: 'test test test', ephemeral: true});
            }
        }else if(interaction.isButton()){
            //if the interaction is a button  we'll check if the customId is registered in the client.buttons collection
            const{buttons}= client ;
            const {customId} = interaction;
            const button = buttons.get(customId);
            if(!button)return new Error('there is no button with this customId');
            try{
                await button.execute(interaction,client);
            }catch (error){
                console.error(error);
                await interaction.reply({content: 'There was an error while executing this button', ephemeral: true});
            }
        }

    }
};
