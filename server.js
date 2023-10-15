const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src");

app.use("/", express.static("src"));
app.use("/assets/css", express.static("css"));
app.use("/assets/images", express.static("images"));
app.use("/js", express.static("js"));

app.get("/example", (req, res) => {
  // res.sendFile(__dirname + "/src/index.html");
  let languages = ["HTML", "CSS", "JAVASCRIPT"];
  res.render("example", { title: "Hello World", languages });
});

app.get("/", (req, res) => {
  let languages = [
    {
      name: "HTML",
      className: "html",
    },
    {
      name: "CSS",
      className: "css",
    },
    {
      name: "BOOTSTRAP",
      className: "bootstrap",
    },
    {
      name: "JAVASCRIPT",
      className: "javascript",
    },
    {
      name: "C Programming",
      className: "c",
    },
  ];
  res.render("index", { name: "Gurlal Singh", languages });
});

app.get("/my-works", (req, res) => {
  res.sendFile(__dirname + "/src/my-works.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/src/contact.html");
});

app.listen(3000, () => {
  console.log("server is listening at 3000");
});
