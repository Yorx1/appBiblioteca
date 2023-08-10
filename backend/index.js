require("dotenv").config();
// if (process.env.NODE_ENV === "development") {
//   require("dotenv").config();
// }

const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("node:path");
const cors = require("cors")

//inicializacion
const app = express();

require("./database");

//asignamos el puerto
app.set("port", 3000);

//middleware
app.use(morgan("dev"));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//routes
app.use("/api/books", require("./routes/books.js"));

//static files
app.use(express.static(path.join(__dirname, "public")));
//inicializamos el sever
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto", app.get("port"));
});
