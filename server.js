// add dependecy variables
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//init app and creat port
const app = express();

const PORT = process.env.PORT || 8080;
// set up body parcing, static, and route middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//start tje server on the port
app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});