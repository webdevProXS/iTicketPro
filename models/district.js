// district.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const District = sequelize.define('District', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // boshqa ustunlar
    }, {
        tableName: 'District',
        timestamps: true // agar kerak bo'lsa
    });

    return District;
};
