"use strict";

var _getMeteorology = require("../api/getMeteorology");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _getMeteorology.getMeteored)();

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (client, message, args) {
    if (!args[0]) return message.channel.send({
      embed: {
        color: "#FFFF00",
        title: "No has ingresado un argumento",
        description: "Lista de comandos disponibles",
        fields: [{
          name: "#conce now",
          value: "Este valor mostrará la temperatura actual",
          inline: false
        }, {
          name: "#conce day",
          value: "Este valor mostrará una lista con una diferencia de 3 horas.",
          inline: false
        }]
      }
    });

    if (args[0] === "now") {
      var {
        location,
        update,
        temp,
        humedad,
        state
      } = yield (0, _getMeteorology.getGael)();
      return message.channel.send({
        embed: {
          color: "#7B68EE",
          title: "".concat(location, " \uD83D\uDEF0\uFE0F"),
          fields: [{
            name: "Temperatura",
            value: "".concat(temp),
            inline: true
          }, {
            name: "Estado",
            value: "".concat(state),
            inline: true
          }, {
            name: "Humedad",
            value: "".concat(humedad, "%"),
            inline: true
          }, {
            name: "Última actualización",
            value: "".concat(update),
            inline: true
          }],
          url: null,
          timestamp: new Date(),
          footer: {
            text: "nuevo",
            icon_url: client.user.avatarURL(),
            text: "github.com/basmonje/discord-bot"
          }
        }
      });
    } else if (args[0] === "day") {
      var {
        fields
      } = yield (0, _getMeteorology.getMeteored)();
      return message.channel.send({
        embed: {
          color: "#7B68EE",
          title: "M\xE1s datos de Concepci\xF3n \uD83D\uDEF0\uFE0F",
          fields: fields,
          url: null,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: "github.com/basmonje/discord-bot"
          }
        }
      });
    } else {
      return message.channel.send({
        embed: {
          color: "#FFFF00",
          title: "Datos no coinciden \u26A0\uFE0F",
          fields: [{
            name: "Debes ingresar ➡️ #conce ",
            value: "Para ver lista de comandos"
          }],
          timestamp: new Date()
        }
      });
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();