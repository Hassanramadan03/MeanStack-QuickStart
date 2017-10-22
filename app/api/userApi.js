      /// user End Point
            module.exports = function (app) {
                // Initialize new user Repository
                var user = require('../models/user');
                var Repository = require('../repository').Repository;
                var userRepository = new Repository(user);
                var ensureAuthenticated = require('./authMiddleware').authMiddleware;

                /*
                | GET /api/user/all
                */
                app.get('/api/user/all', function (req, res) {
                    userRepository.find({}, function (result, iserr) {
                        if (iserr) {
                            res.send(result);
                        } else {
                            res.json(result);
                        }
                    });
                });

                /*
                | GET : /api/user/single
                */
                app.get('/api/user/single', ensureAuthenticated, function (req, res, next) {
                    var id = req.param('id');
                    userRepository.get(id, function (result, iserr) {
                        if (iserr) {
                            res.send(result);
                        } else {
                            res.json(result);
                        }
                    });
                });
                /*
                | POST :: /api/user/add
                */
                app.post('/api/user/add', ensureAuthenticated, function (req, res) {
                    var obj = new user(req.body);
                    userRepository.add(obj, function (err) {
                        if (err) {
                            res.send(500);
                        } else {
                            res.send(200);
                        }
                    });
                });
                /*
                | POST :: /api/user/update
                */
                app.post('/api/user/update', ensureAuthenticated, function (req, res) {
                    var obj = new user(req.body);
                    var id = req.param('id');
                    var result = userRepository.update({ _id: id }, obj);
                    res.send(result);
                });
                /*
                | POST :: /api/user/delete
                */
                app.post('/api/user/delete', ensureAuthenticated, function (req, res) {
                    var id = req.param('id');
                    userRepository.remove({ _id: id }, function (err) {
                        if (err) {
                            res.send(500);
                  } else {
                      res.send(200);
                  }
              });
          })
      }
