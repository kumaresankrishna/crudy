const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "student",
  insecureAuth: true,
});
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("db connected");
});
global.db = db;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/student", require("./studcontrol/studentcontroller"));

app.listen(port, () => console.log("server started " + port));
