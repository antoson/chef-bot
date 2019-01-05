const { token } = require('./botconfig.json');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "!";

// https://api.edamam.com/search?app_id=453689ec&app_key=8aedd818b6528b232778a200cd2e6334&q=neco+necojinyho
const recapi = "https://api.edamam.com/search?app_id=453689ec";
const recapikey = "&app_key=8aedd818b6528b232778a200cd2e6334&to=1";

//Request Api

async function getRecipe(url) {
    let edamanResponse = await fetch(url);
    let response = await edamanResponse.json();

    return res = response.hits[0].recipe.url;
};

//Client
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let ingredients = args.join('+');
    let url = recapi+recapikey+"&q="+ingredients;
    let result = getRecipe(url);

    // !say xyz => xyz
    if(cmd === `${prefix}info`){
        return message.channel.send(`I'm running inside a Docker container!`);
    }

    if(cmd === `${prefix}recipe`){
        return message.channel.send(`Your recipe: `);
    }
})

// Login bot with secret token
client.login(token);