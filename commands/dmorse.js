const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  var alphabet = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
 };

  let messageMorse = message.content;

  var messageConverted = [];

  messageMorse.split("  ").map(function (word) {
    word.split(" ").map(function (letter) {
      messageConverted.push(alphabet[letter]);
    });
    messageConverted.push(" ");
  });

  let mensagemFinal = messageConverted.join("");

  message.channel.send(`A mensagem morse decodificada ficou: _${mensagemFinal}_`);
}