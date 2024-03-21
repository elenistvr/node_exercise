const User = require("../models/user");

const userController = {
  getUsersByParams: async (req, res) => {
    try {
      const { id, name, surname, birthday, gender, username } = req.query;
      const query = {};
      if (id) {
        query.id = id;
      }
      if (name) {
        query.name = name;
      }
      if (surname) {
        query.surname = surname;
      }
      if (birthday) {
        query.birthday = birthday;
      }
      if (gender) {
        query.gender = gender;
      }
      if (username) {
        query.username = username;
      }

      const users = await User.findAll({ where: query });

      if (users.length === 0) {
        console.log("No users found for the given parameters.");
      }
      res.status(200).json(users);
    } catch (error) {
      console.error("Error retrieving users:", error);
      res.status(500).send("Error retrieving users");
    }
  },
};

module.exports = userController;
