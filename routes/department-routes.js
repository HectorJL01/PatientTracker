var db = require("../models");

module.exports = function(app) {
    app.get("/api/department", function(req, res) {
    var query = {};
    if (req.query.booking_id) {
      query.bookingId = req.query.booking_id;
    }

  db.department.findAll({
    where: query,
    // include: [db.booking]
  }).then(function(dbdepartment) {
    res.json(dbdepartment);
  });
});
//--------------------------------------------------
app.get("/api/department/:id", function(req, res) {
db.department.findOne({

    where: {
      id: req.params.id
    },
    // include: [db.booking]
  }).then(function(dbdepartment) {
    res.json(dbdepartment);
  });
});

}