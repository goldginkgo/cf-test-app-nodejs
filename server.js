var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cfApp = require('./app/application');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', cfApp.get_root_info);
app.get('/v1/cf_envs', cfApp.get_cf_envs);
app.get('/v1/app_name', cfApp.get_app_name);
app.get('/v1/space_name', cfApp.get_app_space);

app.listen(port);
console.log('API server started on: ' + port);
