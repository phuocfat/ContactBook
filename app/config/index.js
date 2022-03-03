const config = {
  app: {
    port: process.env.PORT || 8080,

  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb+srv://Phuoc2432001:Phuoc2432001@cluster0.mo0z1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
};
module.exports = config;
