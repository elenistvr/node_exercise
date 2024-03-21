const Sequelize = require("sequelize");
const sequelize = require("../database");
const Message = require("./message");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.DATE,
  },
  gender: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
});

User.hasMany(Message, { as: "sentMessages", foreignKey: "sender" });
User.hasMany(Message, { as: "receivedMessages", foreignKey: "receiver" });

module.exports = User;
