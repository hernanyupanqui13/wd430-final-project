const express = require("express");
const router = express.Router();
const Note = require("../schemas/note");
const validateEmptyBody = require("../middlewares/validator");

router.get("/", async function (req, res) {
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

router.post("/", validateEmptyBody, async (req, res) => {

  const createdNote = new Note(req.body);

  await createdNote.save();

  res.status(200).json({
    msg: "Success",
    createdNote: createdNote
  });

});


router.put("/:id", validateEmptyBody, async (req, res) => {
  const updatedNote = await Note.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true } // returns the new updated model
  );;

  res.status(200).json({
    msg: "Note updated!",
    updatedNote: updatedNote
  });

});



router.delete("/:id", async (req, res) => {
  await Note.findOneAndDelete({
    _id: req.params.id
  });

  res.status(204);
});

module.exports = router;
