require('dotenv').config();
const {token} = process.env;
const {Client,Collection,GatewayIntentBits}= require('discord.js');
const fs = require('fs');
const client = new Client({intents:GatewayIntentBits.Guilds});
client.commands=new Collection();
client.buttons=new Collection();
client.commandArray=[];
client.colour = "";
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


