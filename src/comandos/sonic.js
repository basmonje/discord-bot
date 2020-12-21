module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447002,
      fields: [
        {
          name: "Soy Sonic",
          value: "testing",
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
