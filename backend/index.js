const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "607162455873-k0u19f6ushglpkp9l0vt2t8hgg20856a.apps.googleusercontent.com"
);

app.use(bodyParser.json());
app.use(cors());
app.post("/api/google-login", async (req, res) => {
  const data = await client.verifyIdToken({ idToken: req.body.token });
  res.status(200).json(data.getPayload());
});

app.listen(4001, () => {
  console.log("Server is ready at http://localhost:4001");
});
