const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  //let avatar = client.displayAvatarURL({format: "png"})
  let urlJS = 'https://www.javascript.com';
  let urlPY = 'https://www.python.org';
  let user = 'Ｋ工尺工爪丹匕匕#1375';
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let urlMe = 'https://discordapp.com/oauth2/authorize?client_id=820708914370707476&scope=bot&permissions=2146958591'
  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;
  let servs = client.guilds.cache.size;
  let channels = client.channels.cache.size;
  let usert = client.users.cache.size;

  const embed = new Discord.MessageEmbed();
  embed.setTitle('Informações sobre mim: ');
  embed.setThumbnail('https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png');
  embed.setColor("#FF0000");
  embed.addField("Presente em: ", `${servs} Servidores!`, true);
  embed.addField("Stalkeando: ", `${channels} Canais!`, true);
  embed.addField("Aterrorizando: ", `${usert} Usuários!`, true);
  embed.addField("Deselvolvido em: ", `[JavaScript](${urlJS}) \n [Python](${urlPY})`, true);
  embed.addField("Estou online por: ", uptime, true);
  embed.addField("Pelo desenvolvedor: ", user, true);
  embed.addField("Me adicione em seu servidor ", `[aqui](${urlMe})`, true);
  embed.addField("Versão atual: ", '1.0', true);
  embed.addField("Website: ", "Em Produção!", true);
  
/*embed.setDescription(`${client.guilds.cache.size} Servidores! 
  ${client.channels.cache.size} Canais! 
  ${client.users.cache.size} Usuários!`);*/

  message.channel.send(embed);
}