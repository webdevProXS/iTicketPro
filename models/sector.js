module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define("Sector", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // 'unique' o'chirildi, noyob bo'lishi shart emas
    },
  });

  Sector.associate = (models) => {
    Sector.hasMany(models.Seat, {
      foreignKey: "sector_id",
      as: "seats",
    });
  };

  return Sector;
};
