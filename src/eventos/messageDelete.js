module.exports = (client, message) => {
  let canal = client.channels.cache.get("790053861267341342");
  canal.send(
    `**${message.author.username}** elimino un mensaje con el contenido: ${message}`
  );
};
