var express = require("express");
var PORT = process.env.PORT || 8090;
var app = express();
app.use(express.static("public"));
// app.get("/", function(req, res) {
// });




app.listen(PORT, function() {  
  console.log("Server listening on: http://localhost:" + PORT);
});