const express = require("express");
require("dotenv").config();
const sequelize = require("./config/database");
const setupSwagger = require("./swagger/swagger");

const app = express();

app.use(express.json());

const admin = require("./routes/adminRoute");
app.use("/api", admin);

const cart = require("./routes/cartRoute");
app.use("/api", cart);

const booking = require("./routes/bookingRoute");
app.use("/api", booking);

const customer = require("./routes/customerRoute");
app.use("/api", customer);

const country = require("./routes/countryRoute");
app.use("/api", country);

const customerAddress = require("./routes/cutomerAddressRoute");
app.use("/api", customerAddress);

const customerCard = require("./routes/customerCardRoute");
app.use("/api", customerCard);

const discount = require("./routes/discountRoute");
app.use("/api", discount);

const delivery = require("./routes/deliveryRoute");
app.use("/api", delivery);

const district = require("./routes/districtRoute");
app.use("/api", district);

const event = require("./routes/eventRoute");
app.use("/api", event);

const eventType = require("./routes/eventTypeRoute");
app.use("/api", eventType);

const flat = require("./routes/flatRoute");
app.use("/api", flat);

const gender = require("./routes/genderRoute");
app.use("/api", gender);

const human_category = require("./routes/humanCategoryRoute");
app.use("/api", human_category);

const language = require("./routes/languageRoute");
app.use("/api", language);

const payment = require("./routes/paymentRoute");
app.use("/api", payment);

const region = require("./routes/regionRoute");
app.use("/api", region);

const seat = require("./routes/seatRoute");
app.use("/api", seat);

const seatType = require("./routes/seatTypeRoute");
app.use("/api", seatType);

const sector = require("./routes/sectorRoute");
app.use("/api", sector);

const status = require("./routes/statusRoute");
app.use("/api", status);

const ticket = require("./routes/ticketRoute");
app.use("/api", ticket);

const ticketType = require("./routes/ticketTypeRoute");
app.use("/api", ticketType);

const venue = require("./routes/venueRoute");
app.use("/api", venue);

const venuePhoto = require("./routes/venuePhotoRoute");
app.use("/api", venuePhoto);

const venueType = require("./routes/venueTypeRoute");
app.use("/api", venueType);

setupSwagger(app);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
