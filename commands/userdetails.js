const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {
 let user;
 if (message.mentions.users.first()) {
   user = message.mentions.users.first();
 } else {
   user = message.author;
   }

   let userBot = user.bot;
   let avatarUrl = user.displayAvatarURL();

   const member = message.guild.member(user);

   if (message.author == user) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle(`PUTS! ${message.author.username} acaba de se expor`)
    embed.setColor("#FF0000");
    embed.setThumbnail(user.displayAvatarURL({format: 'png'}));
    embed.addField(`\n${user.tag}`, `${user}`, true)
    embed.addField("\nID:", `${user.id}`, true)
    embed.addField("\nApelido:", `${member.nickname !== null ? `${member.nickname}` : 'Nenhum'}`, true)
    embed.addField("\nStatus:", `${user.presence.status}`, true)
    embed.addField("\nNo servidor:", message.guild.name, true)
    embed.addField("\nJogando:", `${user.presence.game ? user.presence.game.name : 'Nada'}`, true)
    embed.addField("\nÉ bot:", `${userBot == true? 'Sim' : 'Não'}`, true) 
    embed.addField("\nEntrou no servidor em:", `${moment.utc(member.joinedAt).format("DD/MM/YYYY")}`, true) 
    embed.addField("\nConta criada em:", `${moment.utc(user.createdAt).format("DD/MM/YYYY")}`, true) // Anterior: dddd, MMMM, Do YYYY
    embed.addField("\n Avatar para Download: ", `[Aqui](${avatarUrl})`);
    //embed.addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true) Tentar Recriar essa desgraça.

    message.channel.send({embed});
   } else {
    const embed = new Discord.MessageEmbed()

    embed.setTitle(`PUTS! ${message.author.username} acaba de expor ${user.username}`)
    embed.setColor("#FF0000");
    embed.setThumbnail(user.displayAvatarURL({format: 'png'}));
    embed.addField(`\n${user.tag}`, `${user}`, true)
    embed.addField("\nID:", `${user.id}`, true)
    embed.addField("\nApelido:", `${member.nickname !== null ? `${member.nickname}` : 'Nenhum'}`, true)
    embed.addField("\nStatus:", `${user.presence.status}`, true)
    embed.addField("\nNo servidor:", message.guild.name, true)
    embed.addField("\nJogando:", `${user.presence.game ? user.presence.game.name : 'Nada'}`, true)
    embed.addField("\nÉ bot:", `${userBot == true? 'Sim' : 'Não'}`, true) 
    embed.addField("\nEntrou no servidor em:", `${moment.utc(member.joinedAt).format("DD/MM/YYYY")}`, true) 
    embed.addField("\nConta criada em:", `${moment.utc(user.createdAt).format("DD/MM/YYYY")}`, true) // Anterior: dddd, MMMM, Do YYYY
    embed.addField("\n Avatar para Download: ", `[Aqui](${avatarUrl})`);
    //embed.addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true) Tentar Recriar essa desgraça.

    message.channel.send(embed);
   }
}