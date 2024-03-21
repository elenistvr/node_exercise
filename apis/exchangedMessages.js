const User = require("../models/user");
const Message = require("../models/message");
const { Op } = require("sequelize");

const messageController = {
  getExchangedMessages: async (req, res) => {
    try {
      const { sender, receiver } = req.query;

      const user1 = await User.findByPk(sender);
      const user2 = await User.findByPk(receiver);

      if (!user1 || !user2) {
        return res.status(404).json({ error: "One or more users not found" });
      }
      const exchangedMessages = await Message.findAll({
        where: {
          [Op.or]: [
            { sender: sender, receiver: receiver },
            { sender: receiver, receiver: sender },
          ],
        },
        order: [["timestampSent", "DESC"]],
      });

      if (exchangedMessages.length === 0) {
        console.log("No exchanged messages found for the given users.");
      }

      res.status(200).json(exchangedMessages);
    } catch (error) {
      console.error("Error retrieving exchanged messages:", error);
      res.status(500).send("Error retrieving exchanged messages");
    }
  },
};

module.exports = messageController;
