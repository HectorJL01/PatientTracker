module.exports = function (sequelize, DataTypes) {
    var staff = sequelize.define("staff", {

        staff_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });


//------------------------------------------
staff.associate = function(models) {
   
    staff.belongsTo(models.booking, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return staff;
};