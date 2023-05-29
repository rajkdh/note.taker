const path = require('path');
const router = require('express').Router();

//set route - note data sent to html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;