const functions = require("firebase-functions");
const express = require("express");
const booking = require('./booking/booking');
const cors = require("cors")({ origin: true });


const app = express();

app.use(cors);

app.use('/booking', booking);
// Creates a new booking
app.post("/", (req, res) => {
  res.status(200).send()
})

// Gets all bookings for that user.
app.get("/", (req,res) => {

})

// Gets a specific booking.
app.get("/{id}", (req, res) => {

})

// Accepts a booking.
// Booking Status must be of status: RS
// Requester must be the landlord.
// Pararsm: bookingId
app.put("/{id}/accept" , (req, res ) => {

})

// Rejects a booking.
// Booking Status must be of status: RS
// Requester must be the landlord.
// Satus will become: BR
app.put("/{id}/reject" , (req, res ) => {

})


exports.app = functions.https.onRequest(app);
