const Discord = require('discord.js');
const config = require('../config.json');
const cores = require('../cores.json');
module.exports = async(client, msg) => {
    let embed = new Discord.MessageEmbed()
        .setDescription(`**Produtos disponiveis**`)
        .addField(`League Of Legends`, '`Conta nivel 30 (Unranked).`', true)
        .addField(`GTA 5`, '`Dinheiro GTA V, 830k (ou +)`', true)
        .addField(`Discord`, '`Discord Nitro.`', true)
        .addField(`Cursos e metodos`, '`Crie um ticket que mandamos os cursos e metodos disponiveis.`', true)
        .addField(`Outros`, '`Spotity, Netflix.`', true)
        .setFooter(`BOT em desenvolvimento, reporte os bugs para a gente!`)
        .setColor(cores.VERMELHO.VER);
    await msg.reply(embed);
};