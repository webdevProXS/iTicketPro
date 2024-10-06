module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      cart_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Carts",     
              key: "id"
          },
          allowNull: false,  // Cart bo'sh bo'lmasligi kerak
          onDelete: 'CASCADE',  // Cart o'chirilganda Booking ham o'chiriladi
      },
      finished: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
              isAfter: new Date().toISOString() // Faqat kelajakdagi sanalarni qabul qiladi
          }
      },
      payment_method_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Payments",
              key: "id"
          },
          allowNull: true, // Optional, agar to'lov usuli bo'lmasa
          onDelete: 'SET NULL', // O'chirilganda null ga o'rnatiladi
      },
      delivery_method_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Deliveries",
              key: "id"
          },
          allowNull: true, // Optional
          onDelete: 'SET NULL',
      },
      discount_method_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Discounts",
              key: "id"
          },
          allowNull: true, // Optional
          onDelete: 'SET NULL',
      },
      status_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Statuses",
              key: "id"
          },
          allowNull: false, // Status har doim bo'lishi kerak
          onDelete: 'CASCADE',
      },
  });

  Booking.associate = (models) => {
      Booking.belongsTo(models.Cart, {
          foreignKey: "cart_id",
          as: "cart"
      });
      Booking.belongsTo(models.Payment, {
          foreignKey: "payment_method_id",
          as: "payment"
      });
      Booking.belongsTo(models.Delivery, {
          foreignKey: "delivery_method_id",
          as: "delivery"
      });
      Booking.belongsTo(models.Discount, {
          foreignKey: "discount_method_id",
          as: "discount"
      });
      Booking.belongsTo(models.Status, {
          foreignKey: "status_id",
          as: "status"
      });
  };

  return Booking;
};
