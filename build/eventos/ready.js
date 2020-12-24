"use strict";

var {
  prefix
} = require("../config/config");

module.exports = client => {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "Prefijo ".concat(prefix),
      type: "WATCHING"
    }
  });
};