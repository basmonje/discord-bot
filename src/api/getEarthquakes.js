const fetch = require("node-fetch");
const { API_EARTHQUAKES } = require("../utils/constants");

module.exports = async function getEarthquakes() {
  try {
    const response = await fetch(API_EARTHQUAKES);
    const result = await response.json();
    const newResult = result.map(
      ({ Fecha, Profundidad, Magnitud, RefGeografica }) => {
        let date = new Date(Fecha);
        let hours = date.getHours();
        let min = date.getMinutes();
        let second = date.getMinutes();

        if (min < 10) {
          min = `0${min}`;
        }

        if (second < 10) {
          second = `0${second}`;
        }

        const hora = `${hours}:${min}:${second}s`;
        return {
          hora,
          profundidad: Profundidad,
          magnitud: Magnitud,
          ref: RefGeografica,
        };
      }
    );
    return {
      data: newResult,
    };
  } catch (error) {
    console.log(object);
    return null;
  }
};
