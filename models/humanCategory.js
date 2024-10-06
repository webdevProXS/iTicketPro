module.exports = (sequelize, DataTypes) => {
  const HumanCategory = sequelize.define("HumanCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Noyob nom
    },
    start_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finish_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Genders",
        key: "id",
      },
    },
  });

  HumanCategory.associate = (models) => {
    HumanCategory.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
  };

  return HumanCategory;
};
