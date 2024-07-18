const express = require('express');
const router = express.Router();
const notesRoutes = require("./note.route")

router.use('/notes', notesRoutes);

module.exports = router;
