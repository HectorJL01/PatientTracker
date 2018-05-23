var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));
//----------------------------------------------
require("./routes/html-routes.js")(app);
require("./routes/booking-routes.js")(app);
require("./routes/staff-routes.js")(app);
require("./routes/patient-routes.js")(app);
require("./routes/department-routes.js")(app);





db.sequelize.sync({ }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });