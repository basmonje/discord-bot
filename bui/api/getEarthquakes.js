"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = require("node-fetch");

var {
  API_EARTHQUAKES
} = require("../utils/constants");

module.exports = /*#__PURE__*/function () {
  var _getEarthquakes = _asyncToGenerator(function* () {
    try {
      var response = yield fetch(API_EARTHQUAKES);
      var result = yield response.json();
      var newResult = result.map((_ref) => {
        var {
          Fecha,
          Profundidad,
          Magnitud,
          RefGeografica
        } = _ref;
        var date = new Date(Fecha);
        var hours = date.getHours();
        var min = date.getMinutes();
        var second = date.getMinutes();

        if (min < 10) {
          min = "0".concat(min);
        }

        if (second < 10) {
          second = "0".concat(second);
        }

        var hora = "".concat(hours, ":").concat(min, ":").concat(second, "s");
        return {
          hora,
          profundidad: Profundidad,
          magnitud: Magnitud,
          ref: RefGeografica
        };
      });
      return {
        data: newResult
      };
    } catch (error) {
      console.log(object);
      return null;
    }
  });

  function getEarthquakes() {
    return _getEarthquakes.apply(this, arguments);
  }

  return getEarthquakes;
}();