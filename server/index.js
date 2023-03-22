const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./models/User");
const Game = require("./models/Game");
const app = express();

mongoose.connect(process.env.MONGO_URL);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sdfasdfasdfasdfasd";

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      email: email,
      password: bcrypt.hashSync(password, bcryptSalt),
      name: name,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id, name: userDoc.name },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not found");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/games", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  const { gameid, name, image, description, rating, minplayers, maxplayers } =
    req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const gameDoc = await Game.create({
      owner: userData.id,
      gameid,
      name,
      image,
      description,
      rating,
      minplayers,
      maxplayers,
    });
    res.json(gameDoc);
  });
});

app.get("/user-games", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Game.find({ owner: id }));
  });
});

app.get("/games/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;
  res.json(await Game.findById(id));
});

app.put("/games", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  const {
    id,
    gameid,
    name,
    image,
    description,
    rating,
    minplayers,
    maxplayers,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const gameDoc = await Game.findById(id);
    if (userData.id === gameDoc.owner.toString()) {
      gameDoc.set({
        gameid,
        name,
        image,
        description,
        rating,
        minplayers,
        maxplayers,
      });
      await gameDoc.save();
      res.json("ok");
    }
  });
});

app.get('/places', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json( await Game.find() );
});

app.listen(4000);
