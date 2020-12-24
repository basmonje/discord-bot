require("dotenv").config();
import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
  console.log("Servidor en puerto 4000");
});

const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require("fs");

client.comandos = new Discord.Collection();

for (const file of readdirSync("./src/comandos/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContent = require(`./comandos/${file}`);
    client.comandos.set(fileName, fileContent);
  }
}

for (const file of readdirSync("./src/eventos/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContent = require(`./eventos/${file}`);
    client.on(fileName, fileContent.bind(null, client));
    delete require.cache[require.resolve(`./eventos/${file}`)];
  }
}

client
  .login(process.env.TOKEN)
  .then(() => {
    console.log(
      `En escucha, conectado en ${client.guilds.cache.size} servidores y hay disponibles ${client.users.cache.size} usuarios.`
    );
  })
  .catch((err) => {
    console.error("Error al iniciar sesión en Discord " + err);
  });
