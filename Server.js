const http = require("http");
const app = require("./App");
const sequelize = require("./database");
const User = require("./models/user");
const Message = require("./models/message");
require("dotenv").config();

const port = 3000;

setTimeout(() => {
  sequelize
    .sync()
    .then(() => {
      console.log("Database synced");
      const server = http.createServer(app);

      server.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error("Error syncing db", err);
    });
}, 5000);
