const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.on("messageCreate" ,message => {
    
    if(message.author.bot) return;

    if(message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content : "Generating short URL for" + url,
        });

    }
    message.reply({
        content: "Hi from bot",
    })
})

client.on("interactionCreate", interaction => {
    // console.log(interaction);
    interaction.reply("Pong!!");
})

client.login(process.env.TOKEN);


