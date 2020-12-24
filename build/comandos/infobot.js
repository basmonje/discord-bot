"use strict";

var {
  readdirSync
} = require("fs");

var command = [];

for (var file of readdirSync("./src/comandos")) {
  if (file.endsWith(".js")) {
    var fileName = file.substring(0, file.length - 3);

    var fileContent = require("../comandos/".concat(file));

    command.push(fileName, "data");
  }
}

module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [{
        name: "Datos de Bots",
        value: "".concat(command)
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Abril"
      }
    }
  });
};