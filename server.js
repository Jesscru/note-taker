// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require('fs');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});



// Displays all saved notes
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

// Create new notes - takes in JSON input
app.post("/api/notes", function(req, res) {

});

// Deletes requested note via an id given to the note 
app.delete("/api/notes/:id", function(req, res) {

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
