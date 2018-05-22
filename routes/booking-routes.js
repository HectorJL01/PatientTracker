var db = require("../models");

module.exports = function(app) {
    app.get("/api/booking", function(req, res) {
     
      db.booking.findAll({
        // include: [db.patient, db.staff, db.department]
      }).then(function(booking) {
        res.json(booking);
      });
    });
//------------------------------------------------------

app.get("/api/booking/:id", function(req, res) {

        db.booking.findOne({
            where: {
              id: req.params.id
            },
            // include: [db.patient, db.staff, db.department]
          }).then(function(dbbooking) {
            res.json(dbbooking);
          });
        });


}

//--------------------------------------------------------

// app.post("/api/booking", function(req, res) {
//     db.booking.create(req.body)
//     .then(function(booking) {
//       res.json(booking);
//     });
//   });