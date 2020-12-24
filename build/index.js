"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

var app = (0, _express.default)();
app.get("/", (req, res) => {
  res.sendFile(_path.default.join(__dirname, "/views/index.html"));
});
app.use(_express.default.static(_path.default.join(__dirname, "public")));
app.listen(4000, () => {
  console.log("Servidor en puerto 4000");
});

var Discord = require("discord.js");

var client = new Discord.Client();

var {
  readdirSync
} = require("fs");

client.comandos = new Discord.Collection();

for (var file of readdirSync("./src/comandos/")) {
  if (file.endsWith(".js")) {
    var fileName = file.substring(0, file.length - 3);

    var fileContent = require("./comandos/".concat(file));

    client.comandos.set(fileName, fileContent);
  }
}

for (var _file of readdirSync("./src/eventos/")) {
  if (_file.endsWith(".js")) {
    var _fileName = _file.substring(0, _file.length - 3);

    var _fileContent = require("./eventos/".concat(_file));

    client.on(_fileName, _fileContent.bind(null, client));
    delete require.cache[require.resolve("./eventos/".concat(_file))];
  }
}

client.login(process.env.TOKEN).then(() => {
  console.log("En escucha, conectado en ".concat(client.guilds.cache.size, " servidores y hay disponibles ").concat(client.users.cache.size, " usuarios."));
}).catch(err => {
  console.error("Error al iniciar sesión en Discord " + err);
});