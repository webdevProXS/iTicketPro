module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      etaj: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              min: 0 // Etaj manfiy bo'lmasligi kerak
          }
      },
      condition: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [3, 255] // Holati kamida 3 ta belgidan iborat bo'lishi kerak
          }
      }
  });

  Flat.associate = (models) => {
      // Flat modelini boshqa modellarga bog'lash
      // Misol uchun, agar sizda "Building" modeli bo'lsa
      // Flat.belongsTo(models.Building, {
      //     foreignKey: 'building_id',
      //     as: 'building'
      // });
  };

  return Flat;
};
