var repository = require('./repository').Repository;
var user = require('./models/user');
var userRepository = new repository(user);
// var middleware = require('./middleware');
// var isLoggedInOnly = middleware.isLoggedInOnly;
// var notLoggedInOnly = middleware.notLoggedInOnly;
var express=require('express');
module.exports = function (app) {
      // app.use('/admin', express.static('public/backend'));
      app.use('/', express.static('public/frontend'));
      app.get('/admin/', function (req, res) {
          // console.log(req.adminAuthorized);
          // if (req.adminAuthorized||true) {
          if (true) {
              req.session.page = req.params.page;
              res.sendfile('./public/backend/index.html');
          }
      });


}
