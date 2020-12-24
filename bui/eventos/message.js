"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var {
  prefix
} = require("../config/config");

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (client, message) {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return; // Definiendo los argumentos y comandos.

    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase(); // Manejando los eventos.

    var cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos

    if (!cmd) return; // Si no hay comandos no ejecute nada.
    // Ejecuta el comando enviando el client, el mensaje y los argumentos.

    cmd(client, message, args);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();