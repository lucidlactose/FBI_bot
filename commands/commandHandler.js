// https://discord.com/developers/docs/resources/channel#get-channel-message
const commands = require("./commandList");

const PREFIX = '?';

const commandHandler = (message, ytdl) => {
    const args = message.content.substring(PREFIX.length).split(" ");

    if (message.mentions.users.first() == 715670439526924358){
       commands.FBI(message, ytdl);
    }

    if (message.content.startsWith(PREFIX)) {
        if (typeof commands[args[0]] === 'string') {
            message.channel.send(commands[args[0]]);
        } else if (typeof commands[args[0]] == 'function') {
            commands[args[0]]({message, ytdl});
        } else {
            console.log(typeof commands[args[0]])
            message.channel.send(commands["unknown"]);
        }
    }
};

module.exports = {
    commandHandler
};
