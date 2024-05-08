const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let userName = message.author;
  let botChoice = Math.random();
  let authorChoice = null;
  let pedra = '{jankenpon pedra';
  let papel = '{jankenpon papel';
  let tesoura = '{jankenpon tesoura';
  let tudoOk = false;

  if (message.content == pedra) {
    authorChoice = 'pedra';
    message.channel.send('**Você** escolheu pedra :rock:');
    tudoOk = true
  } else if (message.content == papel) {
    authorChoice = 'papel';
    message.channel.send('**Você** escolheu papel :roll_of_paper:')
    tudoOk = true
  } else if (message.content == tesoura) {
    authorChoice = 'tesoura'
    message.channel.send('**Você** escolheu tesoura :scissors:')
    tudoOk = true
  } 
  
  if (tudoOk) {
    
    if (botChoice < 0.34) {
      botChoice = 'pedra';
      message.channel.send('O bot escolheu pedra :rock:')
    } else if (botChoice <= 0.67) {
      botChoice = 'papel';
      message.channel.send('O bot escolheu papel :roll_of_paper:')
    } else {
      botChoice = 'tesoura';
      message.channel.send('O bot escolheu tesoura :scissors:')
    }

    let user = authorChoice;
    let bot = botChoice

    if (user == 'pedra' && bot == 'pedra') {
      statusFinal = 'Pedra com pedra é empate!';
      message.channel.send(statusFinal);
    } else if (user == 'pedra' && bot == 'papel') {
      statusFinal = `Pedra com papel, papel vence. Eu venci!`;
      message.channel.send(statusFinal);
    } else if (user == 'pedra' && bot == 'tesoura') {
      statusFinal = `Pedra com tesoura, pedra vence. Parabéns ${userName}, você levou essa!`;
      message.channel.send(statusFinal);
    } else if (user == 'papel' && bot == 'papel') {
      statusFinal = 'Papel com papel é empate!';
      message.channel.send(statusFinal);
    } else if (user == 'papel' && bot == 'pedra') {
      statusFinal = `Papel com pedra, papel vence. Parabéns ${userName}, você levou essa!`;
      message.channel.send(statusFinal);
    } else if (user == 'papel' && bot == 'tesoura') {
      statusFinal = `Papel com tesoura, tesoura vence. Eu venci!`;
      message.channel.send(statusFinal);
    } else if (user == 'tesoura' && bot == 'tesoura') {
      statusFinal = 'Tesoura com tesoura é empate!';
      message.channel.send(statusFinal);
    } else if (user == 'tesoura' && bot == 'papel') {
      statusFinal = `Tesoura com papel, tesoura vence. Parabéns ${userName}, você levou essa!`;
      message.channel.send(statusFinal);
    } else if (user == 'tesoura' && bot == 'pedra') {
      statusFinal = 'Tesoura com pedra, pedra vence. Eu venci!';
      message.channel.send(statusFinal);
    }
  } else {
    message.channel.send (`${message.author}, você tem certeza que digitou certo?Valores: "pedra"; "papel"; "tesoura"; Exemplo: jankenpon pedra`);
  }
}