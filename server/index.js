const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "newPass",
  database: "CRUD"
});

app.get("/", (req, res) => {});

app.listen(3001, () => {
  console.log("running on PORT 3001");
});
