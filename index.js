const { token } = require('./botconfig.json');
const { id, key } = require('./apiconfig.json');
const fetch = require('node-fetch');
const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const prefix = "!";

const recapi = "https://api.edamam.com/search?app_id="+id;
const recapikey = "&app_key="+key+"&to=5";

// Client
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
})
// On message:
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let ingredients = args.join('+');
    let url = recapi+recapikey+"&q="+ingredients;
        
    // !info help command
    if(cmd === `${prefix}info`){
        return message.channel.send(`Use "!recipe ingredient1 ingredient2 ingredientN" to query a recipe by ingredients.\nA recipe will be provided, if it is found.`);
    }
    // !recipe command
    if (cmd === `${prefix}recipe`) {

        const response = await fetch(url);
        const json = await response.json();
        const status = await response.status;
        // On error, return error message
        if (status != 200) return message.channel.send(`Oops! Service is unavailable. Please try again later.`);

        if ( json.count > 0 ) {
            let count = 5;
            if(json.count < count) count=json.count;
            
            count = Math.floor(Math.random()*count);

            const embed = new RichEmbed()
                .setTitle(json.hits[count].recipe.label)
                .setURL(json.hits[count].recipe.url)
                .setDescription(json.hits[count].recipe.ingredientLines.join("\n"))
                .setImage(json.hits[count].recipe.image)
                .setColor(0x00BBFF);

            return message.channel.send(embed);
        }
        else
            return message.channel.send(`Recipe not found. Please try another set of ingredients.`);
    }
})

// Login bot with secret token
client.login(token);