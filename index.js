var express = require('express'),
	bodyParser = require('body-parser'),
	filesApi = require('./api/files'),
    app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('www'));
app.use('/graph_files', express.static('graph_files'));
app.use('/api', filesApi);


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});