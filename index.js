const express = require('express');
const fs = require('fs');
const app = express();
const jimp = require('jimp');
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a biblioteca Discord.js
const client = new Discord.Client(); //Criação de um novo Client (bot)
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const ytdl = require('ytdl-core');
const stremOptions = {seek: 0, volume: 1};
const token = 
'token_do_bot'

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("idle");
      //.catch(console.error)
console.log("Estou Online!")
}); // Comando de status online

client.on('message', message => {
  if (message.mentions.has(client.user) && !message.content.startsWith(config.prefix) && message.author != client.user && !message.content.startsWith('@everyone') && !message.content.startsWith('@here')) {
    message.channel.send(`${message.author}, oba você me mencionou? Bem,  caso precise de ajuda sabe como me encontrar: "${config.prefix}help"`)
  } 
}) // Faz o bot responder caso alguém o mencione fora de um comando

client.on('message', message => {

  let prefix = config.prefix;

  msg = message.content;

  if (msg.startsWith(config.prefix) && message.author != client.user) {
    if (!msg.startsWith(prefix + '8ball') && !msg.startsWith(prefix + 'ami?') && !msg.startsWith(prefix + 'botdetails') && !msg.startsWith(prefix + 'cancel') && !msg.startsWith(prefix + 'cmorse') && !msg.startsWith(prefix + 'coinflip') && !msg.startsWith(prefix + 'd10') && !msg.startsWith(prefix + 'd100') && !msg.startsWith(prefix + 'd1000') && !msg.startsWith(prefix + 'd12') && !msg.startsWith(prefix + 'd16') && !msg.startsWith(prefix + 'd2') && !msg.startsWith(prefix + 'd20') && !msg.startsWith(prefix + 'd4') && !msg.startsWith(prefix + 'd5') && !msg.startsWith(prefix + 'd50') && !msg.startsWith(prefix + 'd6') && !msg.startsWith(prefix + 'd8') && !msg.startsWith(prefix + 'danceDANCE') && !msg.startsWith(prefix + 'delete') && !msg.startsWith(prefix + 'devdetails') && !msg.startsWith(prefix + 'dmorse') && !msg.startsWith(prefix + 'help') && !msg.startsWith(prefix + 'hit') && !msg.startsWith(prefix + 'horse') && !msg.startsWith(prefix + 'hug') && !msg.startsWith(prefix + 'introduce') && !msg.startsWith(prefix + 'jankenpon') && !msg.startsWith(prefix + 'jooj') && !msg.startsWith(prefix + 'kiss') && !msg.startsWith(prefix + 'ping') && !msg.startsWith(prefix + 'prefix') && !msg.startsWith(prefix + 'probability') && !msg.startsWith(prefix + 'rank') && !msg.startsWith(prefix + 'reset') && !msg.startsWith(prefix + 'russianroulette') && !msg.startsWith(prefix + 'shipa') && !msg.startsWith(prefix + 'shipn') && !msg.startsWith(prefix + 'teste') && !msg.startsWith(prefix + 'update') && !msg.startsWith(prefix + 'uptime') && !msg.startsWith(prefix + 'userdetails') && !msg.startsWith(prefix + 'hour') && !msg.startsWith(prefix + 'kick') && !msg.startsWith(prefix + 'say') && !msg.startsWith(prefix + 'serverdetails') && !msg.startsWith(prefix + 'd') && !msg.startsWith(prefix + 'waifu') && !msg.startsWith(prefix + 'husbando') && !msg.startsWith(prefix + 'cute') && !msg.startsWith(prefix + 'ip') && !msg.startsWith(prefix + 'significadohora') && !msg.startsWith(prefix + 'hangman') && !msg.startsWith(prefix + 'tictactoe') && !msg.startsWith(prefix + 'snake') && !msg.startsWith(prefix + 'fact') && !msg.startsWith(prefix + 'report') && !msg.startsWith(prefix + 'scp') && !msg.startsWith(prefix + 'goodnight') && !msg.startsWith(prefix + 'calculate') && !msg.startsWith(prefix + 'code') && !msg.startsWith(prefix + 'cry') && !msg.startsWith(prefix + 'alo?') && !msg.startsWith(prefix + 'serverbirthday') && !msg.startsWith(prefix + 'easteregg')) {

      let user = message.author;

      message.channel.send(`${user}, Você tentou um comando? Bem caso esteja com dúvida, basta digitar o comando "${prefix}help"`);
    }
  }
});   // Faz o bot retornar mensagem caso o prefixo seja usado fora de um comando existente.
 
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err); // Faz o bot responder aos comandos.
  }
});


client.login(process.env.TOKEN); // Ligando o Bot caso ele consiga acessar o token