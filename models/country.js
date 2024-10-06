module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Har bir davlat nomi noyob bo'lishi kerak
            validate: {
                len: [1, 100], // 1 dan 100 ta belgigacha
                is: /^[\s\S]*\S[\s\S]*$/ // Bo'sh bo'lmagan nom
            }
        }
    });



    return Country;
};
