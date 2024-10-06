module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define("Discount", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 0, // Chegirma qiymati 0 dan kam bo'lmasligi kerak
      },
    },
  });

  Discount.associate = (models) => {
    Discount.hasMany(models.Booking, {
      foreignKey: "discount_method_id",
      as: "bookings",
    });
  };

  return Discount;
};
