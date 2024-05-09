import bodyParser from "body-parser";
import express from "express";

export const api = express.Router();

// 'content-type': 'application/json',
const jsonParser = bodyParser.json();
api.use(jsonParser);

// 'content-type': 'application/x-www-form-urlencoded'
const urlencodedParser = bodyParser.urlencoded({extended: false});
api.use(urlencodedParser);

api.head("/", (req, res) => {
  console.log("HEAD check");
  res.status(200).send("OK");
});

api.get("/ping", (req, res) => {
  console.log("ping", {ok: true});
  res.json({message: "OK"});
});

api.post("/user", (req, res) => {
  const {name, email} = req.body;
  console.log(`/user: ${name}, email: ${email}`);
  res.json({message: `Hello ${name}`});
})
