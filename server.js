var express = require("express");
const apiRoutes = require("./routes/apiroutes");
const apiRoutes2 = require("./routes/htmlroutes");
var app = express();
var PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", apiRoutes2);






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });