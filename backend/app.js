const express = require("express");
const cors = require("cors");

const bookRoute = require("./routes/bookRoute");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/v1/books", bookRoute);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
