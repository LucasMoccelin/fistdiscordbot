const config = require("../config.json");
const Discord = require('discord.js');

module.exports = async(client, msg) => {
    var message = msg.content.split(" ");
    message.splice(0, 1);
    message = message.join(" ");
    if (!message) return msg.reply(`Insira uma mensagem para me força a falar`).then(msg => msg.delete({ timeout: 1000 * 3 }));
    if (msg.member.hasPermission(config.ADM))
        return msg.channel.send(`${message}`);
    else return msg.channel.send(`${message}\n-${msg.author}`);
};