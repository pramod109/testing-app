const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Jello World');
});

app.get('/users', (req,res) => {
	res.send([
	{
		name: 'Mike',
		age: 27
	}, {
		name: 'Joe',
		age: 22
	}, {
		name: 'Jen',
		age: 18
	}
	]);
});

app.listen(3000);
module.exports.app = app;