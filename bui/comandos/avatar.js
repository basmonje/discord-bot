"use strict";

var Discord = require("discord.js");

module.exports = (client, message, args) => {
  var persona = message.mentions.users.first();
  if (!persona) persona = message.author;
  var embed = new Discord.MessageEmbed().setImage("".concat(persona.displayAvatarURL())).setColor(0x66b3ff).setFooter("Avatar de ".concat(persona.username));
  message.channel.send(embed);
};