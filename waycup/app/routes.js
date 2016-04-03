// app/routes.js

	module.exports = function(app) {
		
		/*//default html 
		app.get('*', function(req, res) {
			res.sendfile('./public/views/home.html'); // load our public/index.html file
		});*/
		
		
		//default html 
		app.get('*', function(req, res) {
			res.sendfile('./public2/views/home.html'); // load our public/index.html file
		});
		
	};
