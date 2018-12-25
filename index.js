const { token } = require('./botconfig.json');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "!";

client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // !say xyz => xyz
    if(cmd === `${prefix}info`){
        return message.channel.send(`I'm running inside a Docker container!`);
    }
})

// Login bot with secret token
client.login(token);