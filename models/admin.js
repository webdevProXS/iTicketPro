const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Login must be a valid email address"
                },
            },
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_creator: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });

    Admin.beforeSave(async (admin) => {
        // Passwordni hash qilish
        if (admin.changed("hashed_password")) {
            admin.hashed_password = await bcrypt.hash(admin.hashed_password, 10);
        }
        
        // Refresh tokenni hash qilish
        if (admin.changed("hashed_refresh_token")) {
            admin.hashed_refresh_token = await bcrypt.hash(admin.hashed_refresh_token, 10);
        }
    });

    return Admin;
};
