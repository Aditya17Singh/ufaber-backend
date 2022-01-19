var express = require("express");
const { NotExtended } = require("http-errors");
var router = express.Router();
var Form = require("../models/Form");

//List Form
router.get("/", async (req, res, next) => {
  try {
    let form = await Form.find();
    return res.status(200).send({ form });
  } catch (error) {
    next(error);
  }
});
//Create Form
router.post("/create", async (req, res, next) => {
  try {
    let form = await Form.create(req.body.form);
    return res.status(200).send({ form });
  } catch (error) {
    console.log(error, "from backnd error");
    next(error);
  }
});

module.exports = router;
