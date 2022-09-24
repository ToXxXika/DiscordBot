require('dotenv').config();
const {token} = process.env;
const {Client,Collection,GatewayIntentBits,Intents}= require('discord.js');
const fs = require('fs');
const {Guilds,GuildMessages} = GatewayIntentBits
const client = new Client({intents:32767}); //32767 = all intents
client.commands=new Collection();
client.buttons=new Collection();
client.commandArray=[];
client.color = "";
const functionfolders = fs.readdirSync('./src/functions');
for (const folder of functionfolders){
  const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of functionFiles){
      require(`./functions/${folder}/${file}`)(client);
  }
}
client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token)


