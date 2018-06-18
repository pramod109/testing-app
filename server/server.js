const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Jello World');
});

app.listen(3000);