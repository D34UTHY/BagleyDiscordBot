const Discord = require('discord.js');
const { tictactoe } = require('reconlx');

module.exports.run = async (client, message, args) => {
  if (!message.mentions.members.first()) {
    message.reply(' para jogar você precisa mencionar seu adversário!');
  }

  const game = new tictactoe({
    message: message,
    player_two: message.mentions.members.first()
  });

  game.start();
}