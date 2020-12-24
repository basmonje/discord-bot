const fetch = require("node-fetch");
const { API_METEORED, API_GAEL } = require("../utils/constants");

export async function getMeteored() {
  try {
    const response = await fetch(API_METEORED);
    const result = await response.json();
    const dia = Object.values(result.day);
    const hoy = dia[0];
    const { units, uv_index_max, pressure, sun, moon, hour } = hoy;

    const obj = hour.map(({ wind, interval, temp, humidity, clouds, rain }) => {
      return { wind, interval, temp, humidity, clouds, rain };
    });

    console.log(obj);

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
      units,
      pressure,
      sun,
      moon,
      uv_index_max,
      messUV: message,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
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
