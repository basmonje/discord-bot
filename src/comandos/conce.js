const fetch = require("node-fetch");

async function getFetch() {
  const res = await fetch(
    "http://api.meteored.cl/index.php?api_lang=cl&localidad=18576&affiliate_id=1h85req6xdyf&v=3.0"
  );
  const response = await res.json();
  const dias = Object.values(response.day);
  const hoy = dias[0];

  const { wind, units, uv_index_max, pressure, sun, moon } = hoy;

  var message;

  if (uv_index_max <= 3) {
    message = "baja";
  } else if (uv_index_max > 3 && uv_index_max <= 6) {
    message = "moderada";
  } else if (uv_index_max > 6 && uv_index_max <= 8) {
    message = "alta";
  } else if (uv_index_max > 8 && uv_index_max <= 11) {
    message = "muy alta";
  } else {
    message = "extremadamente alta";
  }

  return {
    wind,
    units,
    uv_index_max,
    pressure,
    sun,
    moon,
    messUV: message,
  };
}

async function fetClima() {
  const getFet = await fetch("https://api.gael.cl/general/public/clima/SCIE");
  const response = await getFet.json();
  return {
    location: response.Estacion,
    update: response.HoraUpdate,
    temp: response.Temp,
    humedad: response.Humedad,
    state: response.Estado,
  };
}

module.exports = async (client, message, args) => {
  const { location, update, temp, humedad, state } = await fetClima();

  const {
    wind,
    units,
    uv_index_max,
    pressure,
    sun,
    moon,
    messUV,
  } = await getFetch();

  message.channel.send({
    embed: {
      color: 3447003,
      title: `${location} 🛰️`,
      author: {
        icon_url: client.user.avatarURL(),
      },
      fields: [
        {
          name: "Estado",
          value: `${state}`,
        },
        {
          name: "Temperatura",
          value: `${temp} ${units.temp}`,
        },
        {
          name: "Humedad",
          value: `${humedad} %`,
        },
        {
          name: "Última actualización",
          value: `${update}`,
        },
        {
          name: "Velocidad del viento",
          value: `${wind.speed} ${units.wind}`,
        },
        {
          name: "Presión atmosferica",
          value: `${pressure} ${units.pressure}`,
        },
        {
          name: "Sol",
          value: `Salida ${sun.in}, Puesta ${sun.out} `,
        },
        {
          name: `${moon.desc}`,
          value: `Salida ${moon.in}, Puesta ${moon.out}`,
        },
        {
          name: "Radiación ultravioleta",
          value: `${uv_index_max} FPS ${messUV}`,
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
};
