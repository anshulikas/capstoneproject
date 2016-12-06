var express = require('express'),
	bodyParser = require('body-parser'),
	filesApi = require('./api/files'),
    app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('www'));

app.use('/api', filesApi);



/*router.route('/getfiles')
	.post((req, res) => {
		res.json({success: true});
	} );*/

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});