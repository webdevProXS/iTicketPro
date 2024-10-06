module.exports = (sequelize,DataTypes)=>{
  const TicketType = sequelize.define("TicketType",{
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      color: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      ticket_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  })

  TicketType.associate = (models)=>{
      TicketType.hasMany(models.Ticket,{
          foreignKey: "ticket_type_id",
          as: "tickets"
      })
  }

  return TicketType
}