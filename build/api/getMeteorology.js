"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMeteored = getMeteored;
exports.getGael = getGael;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = require("node-fetch");

var {
  API_METEORED,
  API_GAEL
} = require("../utils/constants");

function getMeteored() {
  return _getMeteored.apply(this, arguments);
}

function _getMeteored() {
  _getMeteored = _asyncToGenerator(function* () {
    try {
      var response = yield fetch(API_METEORED);
      var result = yield response.json();
      var dia = Object.values(result.day);
      var hoy = dia[0];
      var {
        sun,
        moon,
        hour
      } = hoy;
      var obj = hour.map((_ref) => {
        var {
          wind,
          interval,
          temp,
          humidity,
          clouds,
          rain,
          uv_index
        } = _ref;
        return {
          wind,
          interval,
          temp,
          humidity,
          clouds,
          rain,
          uv_index,
          message: valorUv(uv_index)
        };
      });
      var fields = [];
      obj.forEach(element => {
        fields.push({
          name: "\u27A1\uFE0F Hora ".concat(element.interval, ", Temp ").concat(element.temp, "\xB0, Humedad ").concat(element.humidity, "%"),
          value: "Velocidad del viento ".concat(element.wind.speed, " km/h min, ").concat(element.wind.gusts, " km/h max, direcci\xF3n ").concat(element.wind.dir),
          inline: false
        });
        fields.push({
          name: "Nubes ".concat(element.clouds, ", lluvia ").concat(element.rain),
          value: "Radiaci\xF3n UV ".concat(element.uv_index, " ~ ").concat(element.message),
          inline: false
        });
      });
      fields.push({
        name: "Sol \u2600\uFE0F",
        value: "Salida ".concat(sun.in, " ~ Oculta ").concat(sun.out),
        inline: false
      });
      fields.push({
        name: "Luna \uD83C\uDF15 ".concat(moon.desc),
        value: "Salida ".concat(moon.in, " ~ Oculta ").concat(moon.out),
        inline: false
      });
      return {
        fields
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  return _getMeteored.apply(this, arguments);
}

function valorUv(uv_index) {
  var message;

  if (uv_index <= 3) {
    message = "baja";
  } else if (uv_index > 3 && uv_index <= 6) {
    message = "moderada";
  } else if (uv_index > 6 && uv_index <= 8) {
    message = "alta";
  } else if (uv_index > 8 && uv_index <= 11) {
    message = "muy alta";
  } else {
    message = "extremadamente alta";
  }

  return message;
}

function getGael() {
  return _getGael.apply(this, arguments);
}

function _getGael() {
  _getGael = _asyncToGenerator(function* () {
    try {
      var response = yield fetch(API_GAEL);
      var result = yield response.json();
      return {
        location: result.Estacion,
        update: result.HoraUpdate,
        temp: result.Temp,
        humedad: result.Humedad,
        state: result.Estado
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  return _getGael.apply(this, arguments);
}