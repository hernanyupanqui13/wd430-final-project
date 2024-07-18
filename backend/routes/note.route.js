const express = require("express");
const router = express.Router();
const Note = require("../schemas/note");
const validateEmptyBody = require("../middlewares/validator");

router.get("/", async function (req, res, next) {
  try {
    const notes = await Note.find();
    res.json(notes || []);

  } catch (error) {
    console.error(error);
    res.json({
      error: "it not work"
    });

  }
});

router.post("/", validateEmptyBody, async (req, res, next) => {

  const newNote = new Note(req.body);

  await newNote.save();

  res.status(200).json({
    msg: "secess"
  });

});


router.put("/", async (req, res) => {

});

module.exports = router;
