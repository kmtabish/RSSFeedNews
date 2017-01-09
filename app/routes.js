var readFeed = require('./controllers/feed');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/feedBBC',readFeed.getBBC);
	//app.get('/feedMashable',readFeed.getMashable);
	app.get('/feedCNET',readFeed.getCNET);
	app.get('/feedMashable',readFeed.getMashable);
	app.post('/testSendBird',function(req, res){
		console.log("SENDBIRD", req.body)
		res.end();
	});


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
