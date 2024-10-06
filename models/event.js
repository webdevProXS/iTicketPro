module.exports = (sequelize, DataTypes) => {    
  const Event = sequelize.define("Event", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      photo: {
          type: DataTypes.STRING,
          allowNull: false
      },
      finish_date: {
          type: DataTypes.DATE,
          allowNull: false
      },
      info: {
          type: DataTypes.STRING,
          allowNull: false
      },
      event_type_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      human_category_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      venue_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Venues",
              key: "id"
          }
      },
      language_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Languages",
              key: "id"
          }
      },
      release_date: {
          type: DataTypes.DATE,
          allowNull: false
      },
  });

  Event.associate = (models) => {
      Event.belongsTo(models.Venue, {
          foreignKey: "venue_id",
          as: "venue"
      });
      Event.belongsTo(models.Language, {
          foreignKey: "language_id",
          as: "language"
      });
      Event.hasMany(models.Ticket, {
          foreignKey: 'event_id',
          as: "tickets"  
      });
  };

  return Event;
};
