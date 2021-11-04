const { help_text, help_confirm_text, open_up_text, lykos_text} = require('./messageList');

const help = (args) => {
    const {message} = args;
    message.author.send(help_text);
    message.channel.send(help_confirm_text);
};
const leave = (args) => {
    const {message} = args;
    const voice = message.member.voice;
    const voiceChannel = (voice ? voice.channel: null);
    if (voiceChannel) {
        voiceChannel.leave();
    }
};
const ready_check = (args) => {
    const {message, ytdl} = args;
    const voice = message.member.voice;
    const voiceChannel = (voice ? voice.channel: null);
    if (voiceChannel) {
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.play(ytdl("https://youtu.be/90y7eQje6NE"));
            dispatcher.on("finish", () => {
                voiceChannel.leave();
                console.log("leave channel ready check")
            })
        }).catch(err => console.log(err));
    }
};
const FBI = (message, ytdl) => {
    const voice = message.member.voice;
    const voiceChannel = (voice ? voice.channel: null);
    
    message.channel.send(open_up_text);
    if (voiceChannel) {
        voiceChannel.join().then(connection =>{
            connection.voice.setSelfDeaf(true);
            const stream = ytdl("https://www.youtube.com/watch?v=vTUP8eimDuY", { filter : 'audioonly' });
            const streamOptions = { seek: 0, volume: 1 };            
            const dispatcher = connection.play(stream, streamOptions);
            
            dispatcher.on("end", () => {
                voiceChannel.leave();
                console.log("leave channel ready check")
            });
        }).catch(err => console.log(err));
    }
};

module.exports = {
    help,
    leave,
    ready_check,
    FBI
};
