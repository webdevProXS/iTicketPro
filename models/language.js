module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define("Language", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Har bir til nomi noyob bo'lishi kerak
          validate: {
              len: [1, 50], // 1 dan 50 ta belgigacha
          },
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [0, 255], // 0 dan 255 ta belgigacha
          },
      },
  });

  Language.associate = (models) => {
      Language.hasMany(models.Customer, {
          foreignKey: "lang_id",
          as: "customers",
      });
      Language.hasMany(models.Event, {
          foreignKey: "language_id",
          as: "events",
      });
  };

  return Language;
};
