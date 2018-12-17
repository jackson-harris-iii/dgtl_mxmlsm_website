var React = require('react');
// We will need to require Keystone first
var keystone = require('keystone');

// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
  api: importRoutes('./api'),
};

// Export our app routes
exports = module.exports = function (app) {
    // Get access to the API route in our app
    app.get('/api/post/', keystone.middleware.api, routes.api.posts.list);
    // Set up the default app route to  http://localhost:3000/index.html
    app.get('/index.html', function (req, res) {
        // Render some simple boilerplate html
        function renderFullPage() {
            // Note the div class name here, we will use that as a hook for our React code
            // We are also adding the bundled javascript code 
            return `
		<!doctype html>
		<html>
			<head>
                <title>Dgtl_Mxmlsm</title>
                 <!-- Font Awesome -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.16/css/mdb.min.css" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
			</head>
      <body>
        <div id="app"></div>
                <!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.16/js/mdb.min.js"></script>
                <script src="bundle.js"></script>                 
			</body>
		</html>
		`;
        }
        // Send the html boilerplate
        res.send(renderFullPage());
    });
}