"use strict";

module.exports = (client, message) => {
  var canal = client.channels.cache.get("790053861267341342");
  canal.send("**".concat(message.author.username, "** elimino un mensaje con el contenido: ").concat(message));
};