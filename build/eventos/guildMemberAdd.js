"use strict";

module.exports = (client, member) => {
  member.guild.channels.cache.get("789985773700644896").send("Bienvenido ".concat(member.user.username, "!!"));
};