const fetch = require("node-fetch");
const { API_METEORED, API_GAEL } = require("../utils/constants");

export async function getMeteored() {
  try {
    const response = await fetch(API_METEORED);
    const result = await response.json();
    const dia = Object.values(result.day);
    const hoy = dia[0];
    const { sun, moon, hour } = hoy;

    const obj = hour.map(
      ({ wind, interval, temp, humidity, clouds, rain, uv_index }) => {
        return {
          wind,
          interval,
          temp,
          humidity,
          clouds,
          rain,
          uv_index,
          message: valorUv(uv_index),
        };
      }
    );

    const fields = [];

    obj.forEach((element) => {
      fields.push({
        name: `➡️ Hora ${element.interval}, Temp ${element.temp}°, Humedad ${element.humidity}%`,
        value: `Velocidad del viento ${element.wind.speed} km/h min, ${element.wind.gusts} km/h max, dirección ${element.wind.dir}`,
        inline: false,
      });
      fields.push({
        name: `Nubes ${element.clouds}, lluvia ${element.rain}`,
        value: `Radiación UV ${element.uv_index} ~ ${element.message}`,
        inline: false,
      });
    });

    fields.push({
      name: `Sol ☀️`,
      value: `Salida ${sun.in} ~ Oculta ${sun.out}`,
      inline: false,
    });

    fields.push({
      name: `Luna 🌕 ${moon.desc}`,
      value: `Salida ${moon.in} ~ Oculta ${moon.out}`,
      inline: false,
    });

    return {
      fields,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

function valorUv(uv_index) {
  var message;

  if (uv_index <= 3) {
    message = "baja";
  } else if (uv_index > 3 && uv_index <= 6) {
    message = "moderada";
  } else if (uv_index > 6 && uv_index <= 8) {
    message = "alta";
  } else if (uv_index > 8 && uv_index <= 11) {
    message = "muy alta";
  } else {
    message = "extremadamente alta";
  }

  return message;
}

export async function getGael() {
  try {
    const response = await fetch(API_GAEL);
    const result = await response.json();

    return {
      location: result.Estacion,
      update: result.HoraUpdate,
      temp: result.Temp,
      humedad: result.Humedad,
      state: result.Estado,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
