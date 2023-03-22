const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./models/User");
const app = express();

mongoose.connect(process.env.MONGO_URL);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sdfasdfasdfasdfasd"

app.use(express.json());

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
        jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret,{},(err,token)=>{
            if (err) throw err;
            res.cookie("token",token).json("pass ok");
        });
    } else {
      res.status(422).json("pass not found");
    }
  } else {
    res.json("not found");
  }
});

app.listen(4000);
