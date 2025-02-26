const path = require("path");
const express = require("express");
require("dotenv").config();

const app = express();

//Set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware
app.use(express.urlencoded({extended: true})); //body parser only works before route

//Import routes
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

//Use routes
app.use("/", indexRouter);
app.use("/new", formRouter);

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


