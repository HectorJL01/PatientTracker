module.exports = function (sequelize, DataTypes) {
    var department = sequelize.define("department", {

        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: false
        },

    });


//------------------------------------------
// department.associate = function(models) {
   
//     department.belongsTo(models.booking, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return department;
};