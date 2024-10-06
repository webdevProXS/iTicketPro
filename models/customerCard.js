module.exports = (sequelize, DataTypes) => {
  const CustomerCard = sequelize.define("CustomerCard", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      customer_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "Customers",
              key: "id"
          },
          allowNull: false // Mijoz ID'si bo'lishi shart
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false
      },
      number: {
          type: DataTypes.STRING, // Kredit kartasi raqami sifatida saqlash
          allowNull: false,

      },
      month: {
          type: DataTypes.INTEGER, // Oy raqami sifatida saqlash
          allowNull: false,

      },
      year: {
          type: DataTypes.INTEGER, // Yil uchun maydon
          allowNull: false
      },
      is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      is_main: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
  });

  CustomerCard.associate = (models) => {
      CustomerCard.belongsTo(models.Customer, {
          foreignKey: "customer_id",
          as: "customer"
      });
  };

  return CustomerCard;
};
