"use strict";

module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        icon_url: client.user.avatarURL()
      },
      title: "🛰️ Hola soy un Bots ! 🤖📡",
      url: null,
      description: "Soy un asistente atrapado en Discord 🛰️, fui creada para ayudar a los humanos, respetando las 3 leyes de la Robótica de Isaac Asimov 🚀. Si quieres saber más acerca de mis funcionalidades, puedes ver mi documentación 📝",
      fields: [{
        name: "📝 Documentación de comandos ☣️",
        value: "Documentación 🚧 [Comandos](https://github.com/basmonje/discord-bot)"
      }, {
        name: "Tres leyes de la robótica",
        value: "Leer más en [Wiki](https://es.wikipedia.org/wiki/Tres_leyes_de_la_rob%C3%B3tica)"
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "github.com/basmonje/discord-bot"
      }
    }
  });
};