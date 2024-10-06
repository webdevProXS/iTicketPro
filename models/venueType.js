module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define("VenueType", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
  });

  VenueType.associate = (models) => {
      VenueType.hasMany(models.Venue, {
          foreignKey: "venue_type_id",
          as: "venues"
      });
  };

  return VenueType;
};
