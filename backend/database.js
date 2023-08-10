const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log("La conexion fue exitosa"))
  .catch((err) => console.error(err));
