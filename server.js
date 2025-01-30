const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes"); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like images, CSS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
  res.render("index"); // Assuming you have 'index.ejs' in your views folder
});

// Train Schedules Route
app.get("/train", (req, res) => {
  res.render("train"); // Assuming you have 'train.ejs' in your views folder
});

// Schedules Route
app.get("/schedule", (req, res) => {
  res.render("schedule"); // Assuming you have 'schedule.ejs' in your views folder
});

// Payment Route
app.get("/payment", (req, res) => {
  res.render("payment"); // Assuming you have 'payment.ejs' in your views folder
});

// Booking Route
app.get("/booking", (req, res) => {
  res.render("booking"); // Assuming you have 'booking.ejs' in your views folder
});

// About Us Route
app.get("/about", (req, res) => {
  res.render("about"); // Assuming you have 'about.ejs' in your views folder
});

// Contact Us Route
app.get("/contact", (req, res) => {
  res.render("contact"); // Assuming you have 'contact.ejs' in your views folder
});

// Login/Register Route
app.get("/user", (req, res) => {
  res.render("login"); // Assuming you have 'login.ejs' in your views folder
});

app.use("/admin", adminRoutes);

// 404 Page Not Found
app.use((req, res) => {
  res.status(404).render("404"); // Assuming you have '404.ejs' in your views folder
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
