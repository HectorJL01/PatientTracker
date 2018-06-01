var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/veiw.html"));
      });

      //---------------------------------------------
      app.get("/patient", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/patient.html"));
      });
    //-----------------------------------------------
    app.get("/new", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/new.html"));
    });
      //-----------------------------------------------
      app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
      });

}