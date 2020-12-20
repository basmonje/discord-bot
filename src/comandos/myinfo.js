module.exports = (client, message, args) => {
    message.channel.send({embed: {
        color: 3447002,
        fields: [{
            name: "Nombre de usuario",
            value: `${message.author.username} \n Su ID es ${message.author.id}`
          }],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: "Abril"
        }
    }});  
}