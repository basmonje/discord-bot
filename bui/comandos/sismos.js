"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getEarthquakes = require("../api/getEarthquakes");

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (client, message, args) {
    var response = yield getEarthquakes();
    var res = response.data;
    message.channel.send({
      embed: {
        color: "0x0099ff",
        title: "Últimos Sismos registrados en Chile ⛰️",
        description: "➡️ Muestra de los últimos 5 sismos registrados en Chile 🗿",
        author: {
          name: "Sismoslogía de Chile",
          url: "http://www.sismologia.cl/"
        },
        fields: [{
          name: "1. Magnitud ".concat(res[0].magnitud, " \uD83E\uDDFF Hora ").concat(res[0].hora),
          value: "".concat(res[0].ref, " \uD83D\uDDFA\uFE0F Profundidad ").concat(res[0].profundidad, " m"),
          inline: false
        }, {
          name: "2. Magnitud ".concat(res[1].magnitud, " \uD83E\uDDFF Hora ").concat(res[1].hora),
          value: "".concat(res[1].ref, " \uD83D\uDDFA\uFE0F Profundidad ").concat(res[1].profundidad, " m"),
          inline: false
        }, {
          name: "Magnitud ".concat(res[2].magnitud, " \uD83E\uDDFF Hora ").concat(res[2].hora),
          value: "".concat(res[2].ref, " \uD83D\uDDFA\uFE0F Profundidad ").concat(res[2].profundidad, " m"),
          inline: false
        }, {
          name: "Magnitud ".concat(res[3].magnitud, " \uD83E\uDDFF Hora ").concat(res[3].hora),
          value: "".concat(res[3].ref, " \uD83D\uDDFA\uFE0F Profundidad ").concat(res[3].profundidad, " m"),
          inline: false
        }, {
          name: "Magnitud ".concat(res[4].magnitud, " \uD83E\uDDFF Hora ").concat(res[4].hora),
          value: "".concat(res[4].ref, " \uD83D\uDDFA\uFE0F Profundidad ").concat(res[4].profundidad, " m"),
          inline: false
        }],
        timestamp: new Date(),
        footer: {
          text: "basmonje",
          icon_url: "https://avatars2.githubusercontent.com/u/47266631?s=400&u=ef04c7c60515db1079cc3b0e65b624c46a13240c&v=4"
        }
      }
    });
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();