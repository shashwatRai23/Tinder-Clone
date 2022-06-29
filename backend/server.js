const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./models/dbCards");
const cors=require("cors")
// App config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose
  .connect(
    "mongodb+srv://Shashwat:shashwatrai@cluster0.jevp2tg.mongodb.net/tinderdb?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// API Endpoints
app.get("/", (req, res) => {
  return res.status(200).send("Hello There...");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else
      res.status(201).send(data);
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else res.status(200).send(data);
  });
});
// Listener
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
