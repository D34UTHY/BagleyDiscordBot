const Discord = require('discord.js');
const { hangman } = require('reconlx');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
  /*if (!channel) {
    message.reply(' Ocorreu um erro, o canal não foi especificado!');
  }*/
  const word = args.slice(1).join(" ");
  if (!word) {
    message.reply(' especifique um canal para o jogo e uma palavra para adivinharem!');
    message.channel.send(`Vou te mostrar como: "${config.prefix}hangman #nomedocanal palavra secreta".`);
  }


  const hang = new hangman({
    message: message,
    word: word,
    client: client,
    channelID: channel.id
  });

  hang.start();
  message.delete().catch(O_o => {});
}