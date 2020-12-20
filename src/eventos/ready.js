const { prefix } = require("../config/config");
module.exports = (client) => {
  client.user.setPresence({
    status: "online",
    activity: {
      name: `Prefijo ${prefix}`,
      type: "WATCHING",
    },
  });
};
