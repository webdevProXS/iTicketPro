module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define("Delivery", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 100] // Nomning uzunligi 1 dan 100 ta belgi
          }
      },

  });

  Delivery.associate = (models) => {
      Delivery.hasMany(models.Booking, {
          foreignKey: "delivery_method_id",
          as: "bookings"
      });
  };

  return Delivery;
};
