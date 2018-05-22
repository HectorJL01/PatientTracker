
var db = require("../models");

module.exports = function(app) {
    app.get("/api/staff", function(req, res) {
    var query = {};
    if (req.query.booking_id) {
      query.bookingId = req.query.booking_id;
    }

  db.staff.findAll({
    where: query,
    // include: [db.booking]
  }).then(function(dbstaff) {
    res.json(dbstaff);
  });
});
//--------------------------------------------------
app.get("/api/staff/:id", function(req, res) {
db.staff.findOne({

    where: {
      id: req.params.id
    },
    // include: [db.booking]
  }).then(function(dbstaff) {
    res.json(dbstaff);
  });
});

}