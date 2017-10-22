module.exports = {
    url: 'mongodb://localhost:27017/itc',
    online : 'mongodb://vacationtrip:vacationtrip@ds013206.mlab.com:13206/vacationtrip',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'Km_is_csn1@MyParent#Love-Me100%and&Ilove^_^ThemSOOOMuch',
    mongoOptions :{ server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }
};
