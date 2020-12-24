"use strict";

module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [{
        name: "Hola soy Sonic",
        value: "y estoy haciendo un test"
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Eloisaow"
      }
    }
  });
};