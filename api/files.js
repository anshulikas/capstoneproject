var express = require('express');
var router = express.Router();
var path = require('path');
var Promise = require('bluebird');
var readDir = Promise.promisify(require('fs').readdir);
var util = require('../lib/util');

router.route('/getfiles/:date')
	.post((req, res) => {
		var folderName = util.convertDateToDOY(req.params.date);
		folderName = path.resolve('.', 'graph_files', folderName);

		readDir(folderName)
			.then(function(files) {
				res.json({
					success: true,
					files: files
				});
			}).catch(function(err) {
				res.json({
					success: false,
					err: err
				});
			})
	} );


module.exports = router;