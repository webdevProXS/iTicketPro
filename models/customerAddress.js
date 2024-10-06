module.exports = (sequelize, DataTypes) => {
  const CustomerAddress = sequelize.define("CustomerAddress", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      district_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
  });

  CustomerAddress.associate = (models) => {
      CustomerAddress.belongsTo(models.District, {
          foreignKey: "district_id",
          as: "district",
      });
  };

  return CustomerAddress;
};
