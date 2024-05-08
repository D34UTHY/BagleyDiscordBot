const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  var alphabet = {  
  "0":"-----",
  "1":".----",
  "2":"..---",
  "3":"...--",
  "4":"....-",
  "5":".....",
  "6":"-....",
  "7":"--...",
  "8":"---..",
  "9":"----.",
  "a":".-",
  "ã":".-",
  "b":"-...",
  "c":"-.-.",
  "d":"-..",
  "e":".",
  "f":"..-.",
  "g":"--.",
  "h":"....",
  "i":"..",
  "j":".---",
  "k":"-.-",
  "l":".-..",
  "m":"--",
  "n":"-.",
  "o":"---",
  "p":".--.",
  "q":"--.-",
  "r":".-.",
  "s":"...",
  "t":"-",
  "u":"..-",
  "v":"...-",
  "w":".--",
  "x":"-..-",
  "y":"-.--",
  "z":"--..",
  " ":"/",
  "!":"-.-.--",
  ".":".-.-.-",
  ",":"--..--"
 };

 let message_to_replace = message.content;

 let normalMessage = message_to_replace.replace('>cmorse', ''); //Pega o conteúdo da mensagem e remove a chamada do comando para que ela não seja exibida na codificação/decodificação.

 var messageConverted = [];

 normalMessage.split("").map(function (word) {
    word.split(" ").map(function (letter) {
      messageConverted.push(alphabet[letter]);
    });
    messageConverted.push(" ");
  });

  let mensagemFinal = messageConverted.join("");

  message.delete().catch(O_o => {});

  message.channel.send(`${message.author}, a mensagem morse codificada ficou: ${mensagemFinal}`);
}