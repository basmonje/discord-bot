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
        units,
        uv_index_max,
        pressure,
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
          rain
        } = _ref;
        return {
          wind,
          interval,
          temp,
          humidity,
          clouds,
          rain
        };
      });
      console.log(obj);
      var message;

      if (uv_index_max <= 3) {
        message = "baja";
      } else if (uv_index_max > 3 && uv_index_max <= 6) {
        message = "moderada";
      } else if (uv_index_max > 6 && uv_index_max <= 8) {
        message = "alta";
      } else if (uv_index_max > 8 && uv_index_max <= 11) {
        message = "muy alta";
      } else {
        message = "extremadamente alta";
      }

      return {
        units,
        pressure,
        sun,
        moon,
        uv_index_max,
        messUV: message
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  return _getMeteored.apply(this, arguments);
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