const fetch = require("node-fetch");

const sismos = "https://api.gael.cl/general/public/sismos";

async function getSismos() {
  const get = await fetch(sismos);
  const response = await get.json();
  return response;
}

module.exports = async (client, message, args) => {
  const res = await getSismos();

  message.channel.send({
    embed: {
      color: 3447003,
      title: "Últimos Sismos",
      author: {
        icon_url: client.user.avatarURL(),
      },
      fields: [
        {
          name: `${res[0].RefGeografica} | ${res[0].Fecha}`,
          value: `Magnitud ${res[0].Magnitud} | Profundidad ${res[0].Profundidad} m`,
        },
        {
          name: `${res[1].RefGeografica} | ${res[1].Fecha}`,
          value: `Magnitud ${res[1].Magnitud} | Profundidad ${res[1].Profundidad} m`,
        },
        {
          name: `${res[2].RefGeografica} | ${res[2].Fecha}`,
          value: `Magnitud ${res[2].Magnitud} | Profundidad ${res[2].Profundidad} m`,
        },
      ],
      url: null,
      timestamp: new Date(),
    },
  });
};
