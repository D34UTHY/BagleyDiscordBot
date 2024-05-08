const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day " : " days ") + " ago";
  };

  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
    "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za:  South Africa"
  };

  let iconServer = message.guild.iconURL();

  const embed = new Discord.MessageEmbed();
  embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
  embed.setColor("#FF0000");
  embed.addField("Nome: ", message.guild.name, true);
  embed.addField("ID do servidor: ", message.guild.id, true);
  //embed.addField("Dono: ", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true);
  embed.addField("Icone para Download: ", `[Aqui](${iconServer})`, true);
  embed.addField("Região: ", `${message.guild.region}`, true); // [message.guild.region]
  embed.addField("Total | Humanos | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true);
  embed.addField("Canais: ", message.guild.channels.cache.size, true);
  embed.addField("Cargos: ", message.guild.roles.cache.size, true);
  embed.addField("Data de criação: ", `${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")}`, true);
  embed.addField("ID desse canal: ", message.channel.id, true);
  embed.setThumbnail(iconServer);
  embed.setFooter("Belo server hein irmão!");

  message.channel.send(embed);
}