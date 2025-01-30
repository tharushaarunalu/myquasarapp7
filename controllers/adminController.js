const adminUsername = "admin";
const adminPassword = "admin@123";

// Display Admin Login Page
exports.getLoginPage = (req, res) => {
  res.render("adminLogin", { error: null });
};

// Handle Admin Login
exports.postLogin = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("adminLogin", { error: "Username and password are required." });
  }

  if (username === adminUsername && password === adminPassword) {
    return res.redirect("/admin/dashboard");
  } else {
    return res.render("adminLogin", { error: "Invalid credentials." });
  }
};

// Display Dashboard
exports.getDashboard = (req, res) => {
  res.render("dashboard");
};

// Manage Users Page
exports.getManageUsers = (req, res) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  res.render("manageUsers", { users });
};

// Manage Bookings Page
exports.getManageBookings = (req, res) => {
  const bookings = [
    { id: 1, customer: "John Doe", train: "Train A", date: "2025-01-28" },
    { id: 2, customer: "Jane Smith", train: "Train B", date: "2025-01-29" },
  ];
  res.render("manageBookings", { bookings });
};

// Reports Page
exports.getReports = (req, res) => {
  const reports = [
    { id: 1, title: "Monthly Sales", value: "$10,000" },
    { id: 2, title: "User Registrations", value: "150" },
  ];
  res.render("reports", { reports });
};

// Logout
exports.logout = (req, res) => {
  res.redirect("/admin/login");
};
