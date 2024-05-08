const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let dono = message.author;
  let user = message.mentions.users.first();
  const member = message.guild.member(user);

  if (user && !user == client.user && !user == dono) {
    member.kick('Razão: ');
    message.channel.send(`${dono} expulsou ${member} com sucesso!`);
  } else if (!user) {
    message.channel.send(`${dono}, você precisa apresentar um usuário válido para expulsar!`);
  } else if (!member) {
    message.reply(' esse jogador não foi encontrado na lista desse servidor!');
  } else if (user == client.user) {
    message.reply(' entendo que você esteja tentando me expulsar, mas infelizmente eu não posso fazer isso por conta própria...');
  } else if (user == dono) {
    message.reply(' qual foi? Você não pode se expulsar cara!');
  } else if (member) {
    member.kick('Razão: ');
    message.reply(` A expulsão do membro ${user.tag} foi um sucesso!`);
  }
}