const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  var list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]

  var rand = list[Math.floor(Math.random() * list.length)];

  var avatar = message.author.displayAvatarURL({format: 'png'});

  const embed = new Discord.MessageEmbed();
  embed.setTitle('Você acaba de rolar um dado de 20 lados!');
  embed.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUuax_Ps4bq7tBMOcxW8MQxWUcZjjjuRImQ&usqp=CAU");
  embed.setAuthor(message.author.tag, avatar);
  embed.setDescription(`:game_die: Caiu o valor **${rand}** no D20!`);
  embed.setColor("#FF0000");
  embed.setFooter('Azar ou Sorte? easter');

  message.channel.send(embed);
}