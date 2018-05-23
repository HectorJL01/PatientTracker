 module.exports = function (sequelize, DataTypes) {
     var booking = sequelize.define("booking", {
         patient_id: {
             type: DataTypes.INTEGER,
             allowNull: false
         },
      
         staff_name: {
             type: DataTypes.STRING,
             allowNull: false
         },
         department_name: {
             type: DataTypes.STRING,
             allowNull: false
         },
         start_time: {
             type: DataTypes.DATE,
             allowNull: false,
             // defaultValue: Sequelize.NOW
         },
         end_time: {
             type: DataTypes.DATE,
             allowNull: false,
             // defaultValue: Sequelize.NOW
         }
     });


 //---------------------------------------------
 booking.associate = function(models) {

    booking.hasMany(models.patient, {
      onDelete: "cascade"
    });
    booking.hasMany(models.staff, {
        onDelete: "cascade"
      });
      booking.hasMany(models.department, {
        onDelete: "cascade"
      });
  };

  return booking;
};
