"use strict";

module.exports = (client, message, args) => {
  var texto = args.join(" ");
  if (!texto) return message.channel.send("Debe escribir un mensaje.");
  message.channel.send(texto);
};