const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  var list = [
    1, 2, 3, 4, 5, 6
  ]

  var avatar = message.author.displayAvatarURL({format: 'png'});

  var rand = list[Math.floor(Math.random() * list.length)];

  const embed = new Discord.MessageEmbed();
  embed.setTitle('Você acaba de rolar um dado de 6 lados!');
  embed.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbpB6ZvUwhByOqIn42bvAX_HlhL6WlpoWEQ&usqp=CAU");
  embed.setAuthor(message.author.tag, avatar);
  embed.setDescription(`:game_die: Caiu o valor **${rand}** no D6!`);
  embed.setColor("#FF0000");
  embed.setFooter('Azar ou Sorte?');

  message.channel.send(embed);
}