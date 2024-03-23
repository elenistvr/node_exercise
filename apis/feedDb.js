const User = require("../models/user");
const Message = require("../models/message");
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

const feedDb = {
  feedDb: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No file uploaded");
      }
      const usersData = await readXlsxFile(req.file.path, { sheet: "users" });
      const messagesData = await readXlsxFile(req.file.path, {
        sheet: "messages",
      });

      for (let user of usersData) {
        const userObj = {
          id: user[0],
          name: user[1],
          surname: user[2],
          birthday: user[3],
          gender: user[4],
          username: user[5],
        };
        try {
          await User.create(userObj);
        } catch (err) {
          console.error("Cannot create db entry", err.original.detail);
        }
      }
      for (let message of messagesData) {
        const messageObj = {
          id: message[0],
          content: message[1],
          sender: message[2],
          receiver: message[3],
          seen: message[4],
          timestampSent: message[5],
        };
        try {
          await Message.create(messageObj);
        } catch (err) {
          console.error("Cannot create db entry", err.original.detail);
        }
      }

      res.status(200).send("Data inserted successfully into db");
    } catch (error) {
      console.log("Error feeding the db", error);
      res.status(500).send("Error feeding the db");
    } finally {
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting file");
          }
        });
      }
    }
  },
};

module.exports = feedDb;
