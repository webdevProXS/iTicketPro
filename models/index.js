const Sequelize = require("sequelize");
const sequelize = require("../config/database");


const Admin = require("./admin")(sequelize, Sequelize);
const Cart = require("./cart")(sequelize, Sequelize);
const Booking = require("./booking")(sequelize, Sequelize);
const Customer = require("./customer")(sequelize, Sequelize);
const Country = require("./country")(sequelize, Sequelize);
const CustomerAddress = require("./customerAddress")(sequelize, Sequelize);
const CustomerCard = require("./customerCard")(sequelize, Sequelize);
const Discount = require("./discount")(sequelize, Sequelize);
const District = require("./district")(sequelize, Sequelize); 
const Delivery = require("./delivery")(sequelize, Sequelize);
const Event = require("./event")(sequelize, Sequelize);
const EventType = require("./eventType")(sequelize, Sequelize);
const Flat = require("./flat")(sequelize, Sequelize);
const Gender = require("./gender")(sequelize, Sequelize);
const HumanCategory = require("./humanCategory")(sequelize, Sequelize);
const Language = require("./language")(sequelize, Sequelize);
const Payment = require("./payment")(sequelize, Sequelize);
const Region = require("./region")(sequelize, Sequelize);
const Seat = require("./seat")(sequelize, Sequelize);
const SeatType = require("./seatType")(sequelize, Sequelize);
const Sector = require("./sector")(sequelize, Sequelize);
const Status = require("./status")(sequelize, Sequelize);
const Ticket = require("./ticket")(sequelize, Sequelize);
const TicketType = require("./ticketType")(sequelize, Sequelize);
const Venue = require("./venue")(sequelize, Sequelize);
const VenuePhoto = require("./venuePhoto")(sequelize, Sequelize);
const VenueType = require("./venueType")(sequelize, Sequelize);


const models = {
    Admin, Cart, Booking, Customer, Country, CustomerAddress, 
    CustomerCard, Discount, District, Delivery, Event, Flat, 
    Gender, HumanCategory, Language, Payment, Region, 
    Seat, SeatType, Sector, Status, Ticket, TicketType, 
    Venue, VenuePhoto, VenueType, EventType
};


Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = models;
