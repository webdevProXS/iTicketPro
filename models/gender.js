module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Gender nomi noyob bo'lishi kerak
      validate: {
        len: [1, 50] // 1 dan 50 ta belgigacha
      },
    },
  });

  Gender.associate = (models) => {
    Gender.hasMany(models.Customer, {
      foreignKey: "gender_id",
      as: "customers",
    });
    Gender.hasMany(models.HumanCategory, {
      foreignKey: "gender_id",
      as: "humanCategories", // Ko'plab inson kategoriyalari uchun ko'plab
    });
  };

  return Gender;
};
