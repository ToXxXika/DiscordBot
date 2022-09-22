const fs = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const Server = require('../../api/server');
module.exports= (client) => {
    client.handleCommands = async ()=>{
        const commandsFolders = fs.readdirSync('./src/commands');
        for (const folder of commandsFolders){
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
             const {commands,commandArray}= client;
            for (const file of commandFiles){
                const command =  require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name,command);
                commandArray.push(command.data.toJSON());
                console.log("Command Loaded: "+command.data.name+" has been loaded");
            }
            const clientId="262937104873553922";
            const guildId="1018867358405771295";
            const rest = new REST({version: '9'}).setToken(process.env.token);
             try {
                 console.log("Connecting to Express Server");
                    const server = new Server();
                    server.start();
                 console.log('Started refreshing application (/) commands.');
                await rest.put(
                    Routes.applicationGuildCommands(clientId,guildId),
                    {body: client.commandArray},
                );
                console.log('Successfully reloaded application (/) commands.');

             }catch (error){
                 console.error(error);
             }
        }
    }
}
