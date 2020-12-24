"use strict";

module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [{
        name: "Nombre de usuario",
        value: "".concat(message.author.username, " \n Su ID es ").concat(message.author.id)
      }, {
        name: "Otros ejemplos",
        value: "".concat(message.member)
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Abril"
      }
    }
  });
};