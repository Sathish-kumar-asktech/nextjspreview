const express = require("express");
const CityController = require("../../TechveelEnq_Controller/MasterController/CityController");

const router = express.Router();
const jwt = require("jsonwebtoken");
function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

router.get("/GetAllCity", CityController.GetAllCity);
router.get("/GetOneCity/:id", verifytoken, CityController.GetOneCity);
router.post("/InsertCity", verifytoken, CityController.InsertCity);
router.put("/UpdateCity/:id", verifytoken, CityController.UpdateCity);
router.delete("/DeleteCity/:id", verifytoken, CityController.DeleteCity);

module.exports = {
  TechveelEnq_Route: router,
};
