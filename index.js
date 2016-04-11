var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var app = express();

//generating logs
app.use(morgan("common"));

//only allow client apps from the address: localhost:3001
app.use(cors({
	origin: ["http://localhost:3001"],
	methods: ["GET", "POST"],
	allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", function(req, res) {
	res.json({
		status: "My API is alive!"
	});
});

app.listen(3000, function() {
	console.log("My API is running...");
});

module.exports = app;