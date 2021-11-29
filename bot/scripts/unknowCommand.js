const Discord = require('discord.js');

module.exports = async(client, msg) => {
    var message = msg.content.split(" ");
    message = message[0];

    let embed = new Discord.MessageEmbed()
        .setDescription(`Comando '${message}' não existe nos meus arquivos.\n Digite "!ajuda" para obter a lista de comandos.`)
        .setColor('#c07f7f');
    msg.channel.send(embed).then;
}