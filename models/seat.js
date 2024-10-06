module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Sectors", // Model nomini to'g'ri kiritish
        key: "id",
      },
      allowNull: false, // Agar kerak bo'lsa, null bo'lmasligini ta'minlash
    },
    row_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, // Musbat qiymat
      },
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, // Musbat qiymat
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Venues",
        key: "id",
      },
      allowNull: false, // Agar kerak bo'lsa, null bo'lmasligini ta'minlash
    },
    seat_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "SeatTypes",
        key: "id",
      },
      allowNull: false, // Agar kerak bo'lsa, null bo'lmasligini ta'minlash
    },
    location_in_schema: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Unknown", // Default qiymat
    },
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });

    Seat.belongsTo(models.SeatType, {
      foreignKey: "seat_type_id",
      as: "seatType",
    });
    
    Seat.belongsTo(models.Sector, {
      foreignKey: "sector_id",
      as: "sector",
    });
    
    Seat.hasMany(models.Ticket, {
      foreignKey: "seat_id",
      as: "tickets",
    });
  };

  return Seat;
};
