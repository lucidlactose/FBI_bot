// To add the bot to your server 
// https://discord.com/api/oauth2/authorize?client_id=715670439526924358&scope=bot&permissions=3213344
// https://github.com/discord/discord-api-docs
const Discord = require('discord.js');
const express = require('express');
const ytdl = require('ytdl-core');
const config = require('./config');
const fbi = require('./FBIcommands.js');
const client = new Discord.Client();

const port = process.env.PORT;

const app = express();
app.listen(port, () => {});

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
    fbi.commands(message, ytdl)
})
