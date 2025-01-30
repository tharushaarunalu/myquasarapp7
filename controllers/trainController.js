const trains = [
  { name: 'Express 101', from: 'City A', to: 'City B', departure: '08:00 AM', arrival: '12:00 PM', class: 'AC', availability: 'Seats Available (10)' },
  { name: 'Express 202', from: 'City C', to: 'City D', departure: '10:00 AM', arrival: '03:00 PM', class: 'Sleeper', availability: 'Waitlist' },
];

exports.getHomePage = (req, res) => {
  res.render('index');
};

exports.searchTrains = (req, res) => {
  const { from, to, date } = req.query;
  const results = trains.filter(train => train.from === from && train.to === to);
  res.render('search', { trains: results });
};
