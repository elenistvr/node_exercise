const Sequelize = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

const Message = sequelize.define("Message", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING,
  },
  sender: {
    type: Sequelize.INTEGER,
  },
  receiver: {
    type: Sequelize.INTEGER,
  },
  seen: {
    type: Sequelize.BOOLEAN,
  },
  timestampSent: {
    type: Sequelize.DATE,
  },
});

module.exports = Message;
