module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [
        {
          name: "La velocidad de la luz",
          value:
            "En el vacío es una constante universal con el valor de 299 792 458 m/s",
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Eloisaow",
      },
    },
  });
};
