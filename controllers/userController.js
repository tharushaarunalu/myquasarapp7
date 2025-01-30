exports.getAccountPage = (req, res) => {
  res.render('myAccount', { user: { name: 'John Doe', email: 'john.doe@example.com' } });
};
