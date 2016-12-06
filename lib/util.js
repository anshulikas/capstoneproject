module.exports.convertDateToDOY = function(date) {
	var date = new Date(date);
	var year = date.getFullYear();
	var yearBegin = new Date(year, 0, 0);
	var diff = date - yearBegin;
	var yearDay = Math.ceil( diff / 60 / 60 / 1000 / 24 );
	var yearLast2 = year.toString().substr(2,2);
	return yearLast2 + '' + yearDay;
}