module.exports = (sequelize, DataTypes) => {
  const SeatType = sequelize.define("SeatType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Har bir o'rin turi uchun noyob bo'lishi

    },
  });

  SeatType.associate = (models) => {
    SeatType.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seats",
    });
  };

  return SeatType;
};
