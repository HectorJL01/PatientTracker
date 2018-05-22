var db = require("../models");

module.exports = function(app) {
    app.get("/api/patient", function(req, res) {
    var query = {};
    if (req.query.booking_id) {
      query.bookingId = req.query.booking_id;
    }

  db.patient.findAll({
    where: query,
    // include: [db.booking]
  }).then(function(dbpatient) {
    res.json(dbpatient);
  });
});
//--------------------------------------------------
app.get("/api/patient/:id", function(req, res) {
db.patient.findOne({

    where: {
      id: req.params.id
    },
    // include: [db.booking]
  }).then(function(dbpatient) {
    res.json(dbpatient);
  });
});

}