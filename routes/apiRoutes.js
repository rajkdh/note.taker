const router = require("express").Router();
const store = require("../db/store");

//call for stored data
router.get("/notes", (req, res) => {
    store
    .getNotes().then(notes => {
        res.json(notes)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//post notes
router.post("/notes", (req, res) => {
    store
    .addNote(req.body).then(note => {
        res.json(note)
    }).catch(err => {
        res.status(500).json(err)
    })
})