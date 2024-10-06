module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Events",
        key: "id",
      },
    },
    seat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Seats",
        key: "id",
      },
    },
    price: {
      type: DataTypes.INTEGER, // Odatda narxlar butun sonlar bo'ladi
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.INTEGER, // Odatda xizmat haqi butun sonlar bo'ladi
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Statuses",
        key: "id",
      },
    },
    ticket_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "TicketTypes", // TicketTypes bo'lishi kerak
        key: "id",
      },
    },
  });

  Ticket.associate = (models) => {
    Ticket.hasMany(models.Cart, {
      foreignKey: "ticket_id",
      as: "carts",
    });
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.belongsTo(models.TicketType, {
      foreignKey: "ticket_type_id",
      as: "ticket_type",
    });
  };

  return Ticket;
};
