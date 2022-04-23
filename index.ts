import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world and bye!! - circle");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
console.log("asd");
