var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var compression = require("compression");
var https = require("https");
var fs = require("fs");
var helmet = require("helmet");
var app = express();


//generating logs
app.use(morgan("common"));

//armoring the API with Helmet
app.use(helmet());

//only allow client apps from the address: localhost:3001
app.use(cors({
	origin: ["http://localhost:3001"],
	methods: ["GET", "POST"],
	allowedHeaders: ["Content-Type", "Authorization"]
}));

//compacting requests using GZIP middleware
app.use(compression());

app.get("/", function(req, res) {
	res.json({
		status: "My API is alive!"
	});
});

/*
//installing SSL support to use HTTPS
var credentials = {
	key: fs.readFileSync("my-api.key", "utf8"),
	cert: fs.readFileSync("my-api.cert", "utf8")
};
https
	.createServer(credentials, app)
	.listen(3000, function() {
		console.log("My API is running...");
	});
*/

app.listen(3000, function() {
	console.log("My API is running...");
});

module.exports = app;