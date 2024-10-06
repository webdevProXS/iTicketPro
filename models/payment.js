module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Har bir to'lov usuli nomi noyob bo'lishi kerak
          validate: {
              len: [1, 100], // 1 dan 100 ta belgigacha
          },
      },
  });

  Payment.associate = (models) => {
      Payment.hasMany(models.Booking, {
          foreignKey: "payment_method_id",
          as: "bookings",
      });
  };

  return Payment;
};
