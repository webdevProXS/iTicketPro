module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Har bir mintaqa nomi noyob bo'lishi kerak
          validate: {
              len: [1, 100], // 1 dan 100 ta belgigacha
          },
      },
      postpone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0, // Agar kerak bo'lsa, default qiymatini qo'shish mumkin
      },
  });



  return Region;
};
