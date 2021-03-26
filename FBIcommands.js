// https://discord.com/developers/docs/resources/channel#get-channel-message

const PREFIX = '?';

// mentions
const open_up_text = {
    "embed": {
        "title": "FBI OPEN UP",
        "description": "THATS HIM BOYS! GET HIM!!!!!",
        "image": {
            "url": "https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735"
        },
        "color": 0x00FF00,
    }
};

// commands
const ping_text = "pong";
const frank_text = "sup frank";
const matthew_text = "roll for deception";
const jesus_text = "how are thou GOD?";
const kevin_text = "that was BASED";
const omar_text = "DAAAAANNNGG";
const water_text = "@here Hourly reminder to drink water";
const help_text = {
    "embed": {
        "color": 0x00FF00,
        "title": "Help List",
        "description": "COMMAND LIST:\nhelp\nping\nleave\nwater\nfrank\nmatthew\njesus\nkevin\nomar\n",
    }
};
const help_confirm_text = "I DM'd you a lick of help, bro. Stay safe. Stretch your legs. Drink water.";


const commands = (message, ytdl) => {
    const args = message.content.substring(PREFIX.length).split(" ");
    // const botWasMentioned = message.mentions.find(
    //     mentionedUser => mentionedUser.id === bot.user.id,
    // );
    const voice = message.member.voice;
    const voiceChannel = (voice ? voice.channel: null);

    // this is specifically for the '@FBI' case
    // add on to this if I ever expand the user case
    if (message.mentions.users.first() == 715670439526924358){
        message.channel.send(open_up_text);
        if (voiceChannel) {
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=vTUP8eimDuY"));
                dispatcher.setVolume(.4)
                dispatcher.on("finish", () => {
                    voiceChannel.leave();
                    console.log("leave channel ready check")
                })
            }).catch(err => console.log(err));
        }
    }

    // message seems to be called 5 times every few seconds but only takes unique input with a nonce,
    // so only the first input will be sent into the switch and makes it impossible for it to happen
    // outside the switch    
    if (message.content.startsWith(PREFIX)) {
        switch (args[0]) {
            case "ping": 
                message.channel.send(ping_text);
                break;
            case "frank": 
                message.channel.send(frank_text);
                break;
            case "matthew":
                message.channel.send(matthew_text);
                break;
            case "jesus":
                message.channel.send(jesus_text);
                break;
            case "kevin":
                message.channel.send(kevin_text);
                break;
            case "omar":
                message.channel.send(omar_text);
            case "water":
                message.channel.send(water_text);
                break;
            case "leave":
                if (voiceChannel) {
                    voiceChannel.leave();
                }
                break;
            case "ready_check":
                if (voiceChannel) {
                    voiceChannel.join().then(connection =>{
                        const dispatcher = connection.play(ytdl("https://youtu.be/90y7eQje6NE"));
                        dispatcher.on("finish", () => {
                            voiceChannel.leave();
                            console.log("leave channel ready check")
                        })
                    }).catch(err => console.log(err));
                }
                break;
            // gulag
            case "help":
                message.author.send(help_text);
                message.channel.send(help_confirm_text);
                break;
        }
    }
}

module.exports = {
    commands
}
