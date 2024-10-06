module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("Status", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Har bir status noyob bo'lishi
      validate: {
        len: [1, 255], // Status uzunligini cheklash
      },
    },
  });

  Status.associate = (models) => {
    Status.hasMany(models.Booking, {
      foreignKey: "status_id",
      as: "bookings",
    });

    Status.hasMany(models.Cart, {
      foreignKey: "status_id",
      as: "carts",
    });
    
    Status.hasMany(models.Ticket, {
      foreignKey: "status_id",
      as: "tickets",
    });
  };

  return Status;
};
