module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tickets",
        key: "id",
      },
      allowNull: false, // Ticket har doim kerak
      onDelete: "CASCADE", // Ticket o'chirilganda Cart ham o'chiriladi
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Customers",
        key: "id",
      },
      allowNull: false, // Customer har doim kerak
      onDelete: "CASCADE", // Customer o'chirilganda Cart ham o'chiriladi
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Statuses",
        key: "id",
      },
      allowNull: true, // Optional
      onDelete: "SET NULL", // O'chirilganda null ga o'rnatiladi
    },
  });

  Cart.associate = (models) => {
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "bookings",
    });

    Cart.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Cart;
};
