module.exports = function (sequelize, DataTypes) {
    var patient = sequelize.define("patient", {
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        patient_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    });

//----------------------------------------------

patient.associate = function(models) {
   
    patient.belongsTo(models.booking, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return patient;
};