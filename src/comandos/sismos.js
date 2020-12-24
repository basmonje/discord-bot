const getEarthquakes = require("../api/getEarthquakes");

module.exports = async (client, message, args) => {
  const response = await getEarthquakes();
  const res = response.data;

  message.channel.send({
    embed: {
      color: "0x0099ff",
      title: "Últimos Sismos registrados en Chile ⛰️",
      description: "➡️ Muestra de los últimos 5 sismos registrados en Chile 🗿",
      author: {
        name: "Sismoslogía de Chile",
        url: "http://www.sismologia.cl/",
      },
      fields: [
        {
          name: `1. Magnitud ${res[0].magnitud} 🧿 Hora ${res[0].hora}`,
          value: `${res[0].ref} 🗺️ Profundidad ${res[0].profundidad} m`,
          inline: false,
        },
        {
          name: `2. Magnitud ${res[1].magnitud} 🧿 Hora ${res[1].hora}`,
          value: `${res[1].ref} 🗺️ Profundidad ${res[1].profundidad} m`,
          inline: false,
        },
        {
          name: `Magnitud ${res[2].magnitud} 🧿 Hora ${res[2].hora}`,
          value: `${res[2].ref} 🗺️ Profundidad ${res[2].profundidad} m`,
          inline: false,
        },
        {
          name: `Magnitud ${res[3].magnitud} 🧿 Hora ${res[3].hora}`,
          value: `${res[3].ref} 🗺️ Profundidad ${res[3].profundidad} m`,
          inline: false,
        },
        {
          name: `Magnitud ${res[4].magnitud} 🧿 Hora ${res[4].hora}`,
          value: `${res[4].ref} 🗺️ Profundidad ${res[4].profundidad} m`,
          inline: false,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "basmonje",
        icon_url:
          "https://avatars2.githubusercontent.com/u/47266631?s=400&u=ef04c7c60515db1079cc3b0e65b624c46a13240c&v=4",
      },
    },
  });
};
