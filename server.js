const app = require("./app.js");
const config = require("./app/config");
const mongoose = require("mongoose");

mongoose.connect(config.db.uri)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Can not connect to the database!", err);
    process.exit();
  })
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
