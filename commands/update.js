const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let upMsg = 'Últimas atualizações e mudanças no bot'
  let desMsg = 'O bot está na sua versão 1.1, mudanças:\nCorreção de bugs, acrescentado novas frases para os comandos.'


  const embed = new Discord.MessageEmbed()
    embed.setTitle(upMsg)
    embed.setThumbnail('https://www.google.com/search?q=simbolo+ubuntu&client=opera-gx&hs=Qh4&sxsrf=ALeKk03ysoNwlFYRWHVaTwF0H-M5kJkbQg:1616185803350&tbm=isch&source=iu&ictx=1&fir=q-Vt0EWUFHuW2M%252CezQh92VBCPc2dM%252C_&vet=1&usg=AI4_-kS6vR1PMNfGLNLH3KRi2v6ADnGPJQ&sa=X&ved=2ahUKEwj-_8ulmb3vAhWwLLkGHct7A6IQ9QF6BAgMEAE#imgrc=q-Vt0EWUFHuW2M')
    embed.setColor("#FF0000")
    embed.setDescription(desMsg)
    embed.setAuthor(message.author.tag)
    message.channel.send(embed)
}