const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const insults = require("./insults.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // !say xyz => xyz
    if(cmd === `${prefix}say`){
        return message.channel.send(`${args}!`);
    }
    // !bing => bong!
    if(cmd === `${prefix}bing`){
        return message.channel.send("bong!");
    }
    // !embed => {embed}
    if(cmd === `${prefix}embed`){
        message.channel.send({embed: {
            color: 3447003,
            description: "A very simple Embed!"
          }});    }
    // !insult => {random insult from insults.json}
    if(cmd === `${prefix}insult`){
        num = getRandomIntInclusive(0,9);
        return message.channel.send(insults[num], {tts: true});
    }
    
})
// get random int between min, max (inclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Login bot with secret token
bot.login(botconfig.token);