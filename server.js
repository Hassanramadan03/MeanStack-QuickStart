var express=require('express'),
    app=express(),
    morgan=require('morgan'),
    mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/simple');
// mongoose.connect(config.online , config.mongoOptions);
app.use(morgan('dev'));
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// bundle all our files here
require('./app/bundle')(app);

var port=process.env.PORT||'3030';
app.listen(port,function(){
    console.log('server is running on port : ' +port)
})
