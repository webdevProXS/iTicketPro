module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false
      },
      site: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              is: /^\+?[1-9]\d{1,14}$/
          }
      },
      venue_type_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: "VenueTypes", 
              key: "id"
          }
      },
      schema: {
          type: DataTypes.STRING,
          allowNull: false
      },
      region_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: "Regions", 
              key: "id"
          }
      },
      district_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: "District",
              key: "id"
          }
      },
  });

  Venue.associate = (models) => {
      Venue.hasMany(models.Event, {
          foreignKey: "venue_id",
          as: "events"
      });
      Venue.hasMany(models.Seat, {
          foreignKey: "venue_id",
          as: "seats"
      });
      Venue.belongsTo(models.VenueType, {
          foreignKey: "venue_type_id",
          as: "venueType"
      });
      Venue.belongsTo(models.Region, {
          foreignKey: "region_id",
          as: "region"
      });
      Venue.belongsTo(models.District, {
          foreignKey: "district_id",
          as: "district"
      });
  };

  return Venue;
};
