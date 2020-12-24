import { getGael, getMeteored } from "../api/getMeteorology";

getMeteored();

module.exports = async (client, message, args) => {
  if (!args[0])
    return message.channel.send({
      embed: {
        color: "#FFFF00",
        title: "No has ingresado un argumento",
        description: "Lista de comandos disponibles",
        fields: [
          {
            name: "#conce now",
            value: "Este valor mostrará la temperatura actual",
            inline: false,
          },
          {
            name: "#conce day",
            value:
              "Este valor mostrará una lista con una diferencia de 3 horas.",
            inline: false,
          },
        ],
      },
    });

  if (args[0] === "now") {
    const { location, update, temp, humedad, state } = await getGael();

    return message.channel.send({
      embed: {
        color: "#7B68EE",
        title: `${location} 🛰️`,
        fields: [
          {
            name: "Temperatura",
            value: `${temp}`,
            inline: true,
          },
          {
            name: "Estado",
            value: `${state}`,
            inline: true,
          },
          {
            name: "Humedad",
            value: `${humedad}%`,
            inline: true,
          },
          {
            name: "Última actualización",
            value: `${update}`,
            inline: true,
          },
        ],
        url: null,
        timestamp: new Date(),
        footer: {
          text: "nuevo",
          icon_url: client.user.avatarURL(),
          text: "github.com/basmonje/discord-bot",
        },
      },
    });
  } else if (args[0] === "day") {
    const { fields } = await getMeteored();

    return message.channel.send({
      embed: {
        color: "#7B68EE",
        title: `Más datos de Concepción 🛰️`,
        fields: fields,
        url: null,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "github.com/basmonje/discord-bot",
        },
      },
    });
  } else {
    return message.channel.send({
      embed: {
        color: "#FFFF00",
        title: `Datos no coinciden ⚠️`,
        fields: [
          {
            name: "Debes ingresar ➡️ #conce ",
            value: "Para ver lista de comandos",
          },
        ],
        timestamp: new Date(),
      },
    });
  }
};
