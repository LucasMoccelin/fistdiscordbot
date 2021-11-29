const config = require('../config.json');
const Discord = require('discord.js');
const cores = require('../cores.json');

module.exports = async(client, msg) => {
    let User = msg.guild.member(msg.mentions.users.first()); // mencao
    if (!User) return msg.reply(`Mencione um membro para ver o avatar dele.`).then(msg => msg.delete({ timeout: 1000 * 3 }));
    let embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${User.user.tag}`)
        .setDescription(`Clique [aqui](${User.user.displayAvatarURL()}) para baixar`)
        .setImage(User.user.displayAvatarURL())
        .setColor(cores.VERMELHO.VER);
    await msg.channel.send(embed)
        .catch(err => {
            console.error(err).then(() => msg.reply(`[ERRO] : ${err}`));
        });
};