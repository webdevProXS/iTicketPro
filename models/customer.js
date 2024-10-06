const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        birth_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Genders",
                key: "id"
            }
        },
        lang_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Languages",
                key: "id"
            }
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Customer.beforeSave(async (customer) => {
        if (customer.changed("hashed_password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10);
        }
        if (customer.changed("hashed_refresh_token")) {
            customer.hashed_refresh_token = await bcrypt.hash(customer.hashed_refresh_token, 10);
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "carts"
        });

        Customer.hasMany(models.CustomerCard, {
            foreignKey: "customer_id",
            as: "customerCards"
        });
        Customer.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender"
        });

        Customer.belongsTo(models.Language, {
            foreignKey: "lang_id",
            as: "language"
        });
    };

    return Customer;
};
