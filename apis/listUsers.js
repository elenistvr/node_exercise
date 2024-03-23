const Message = require("../models/message");
const User = require("../models/user");
const { Op } = require("sequelize");

const listUsersControler = {
  getListOfUsers: async (req, res) => {
    try {
      const { userId } = req.query;
      const recentMessages = await Message.findAll({
        where: {
          [Op.or]: [{ sender: userId }, { receiver: userId }],
        },
        order: [["timestampSent", "DESC"]],
      });

      if (recentMessages.length === 0) {
        return res
          .status(404)
          .json({ error: "No recent messages for this user" });
      }

      const recentUsers = [];

      for (let message of recentMessages) {
        const differentUserId =
          message.sender != userId ? message.sender : message.receiver;

        const user = await User.findByPk(differentUserId);

        if (!user) {
          console.error(`User with this id= ${differentUserId} doesnt exist`);
        } else if (!recentUsers.some((u) => u.id === user.id)) {
          user.dataValues.lastMessageAt = message.timestampSent;
          recentUsers.push(user);
        }
      }

      res.status(200).json(recentUsers);
    } catch (error) {
      console.error("Error retrieving recent users:", error);
      res.status(500).send("Error retrieving recent users");
    }
  },
};

module.exports = listUsersControler;
