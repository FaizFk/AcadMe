const express = require("express");
const ejsMate = require("ejs-mate");

const app = express();

// Body-parsers and Static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// View Engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
