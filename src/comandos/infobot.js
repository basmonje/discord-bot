const { readdirSync } = require("fs");

let command = [];

for (const file of readdirSync("./src/comandos")) {
  if (file.endsWith(".js")) {
    const fileName = file.substring(0, file.length - 3);
    const fileContent = require(`../comandos/${file}`);
    command.push(fileName, "data");
  }
}

module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [
        {
          name: "Datos de Bots",
          value: `${command}`,
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Abril",
      },
    },
  });
};
