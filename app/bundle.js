// Call any new api files here .
module.exports = function(app) {
// on connect to the database start seed the data
// require('./seeder')(app);
// Auth API Routes
// require('./api/adminUser')(app);
// application data API
// Application 'CLient' Routes #basic Routes
require('./routes')(app);
// require('./authRoute')(app);
// require('./api/applicationRequestApi')(app);
require('./api/userApi')(app);

}
