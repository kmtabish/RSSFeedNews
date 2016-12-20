var readFeed = require('./controllers/feed');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/feedBBC',readFeed.getBBC);
	app.get('/feedMashable',readFeed.getMashable);
	app.get('/testSendBird',function(req, res){
		console.log("SENDBIRD", req, res)
	});


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
