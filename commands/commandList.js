const methods = require("./methods");
const messages = require("./messages");

module.exports = {
    // messages
    "frank": messages.frank_text,
    "matthew": messages.matthew_text,
    "jesus": messages.jesus_text,
    "kevin": messages.kevin_text,
    "omar": messages.omar_text,
    "water": messages.water_text,

    // methods
    "help": methods.help,
    "leave": methods.leave,
    // "ready check": methods.ready_check,
    "FBI": methods.FBI,
    "unknown": messages.unknown_text,
};
