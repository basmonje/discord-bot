import { getGael, getMeteored } from "../api/getMeteorology";

module.exports = async (client, message, args) => {
  if (!args[0])
    return message.channel.send({
      embed: {
        color: "#FFFF00",
        title: "Debes ingresar un valor",
        description: "Lista de argumentos disponible",
        fields: [
          {
            name: "#conce day",
            value: "Este valor mostrara la temperatura actual",
            inline: false,
          },
          {
            name: "#conce more",
            value: "Este valor mostrara la temperatura actual",
            inline: false,
          },
        ],
      },
    });

  if (args[0] === "day") {
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
  } else if (args[0] === "more") {
    const {
      wind,
      units,
      pressure,
      sun,
      moon,
      uv_index_max,
      messUV,
    } = await getMeteored();

    return message.channel.send({
      embed: {
        color: "#7B68EE",
        title: `Más datos de Concepción 🛰️`,
        fields: [
          {
            name: "Velocidad del viento",
            value: `min ${wind.speed}${units.wind} max ${wind.gusts}${units.wind}`,
          },
        ],
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
        title: `Datos no coinciden 🛰️`,
        fields: [
          {
            name: "Puedes ingresar ",
            value: "estado",
          },
        ],
        timestamp: new Date(),
      },
    });
  }
};
