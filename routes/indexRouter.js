const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages});
});

indexRouter.post("/new", (req, res) => {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect("/");
  res.end();
});

indexRouter.get("/:id(\\d+)", (req, res) => {
  const id = req.params.id;
  res.render("message", {id, messages});
});

module.exports = indexRouter;