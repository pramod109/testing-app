const request = require('supertest');

var app = require('./server').app;

describe('Express testing', () => {
	it('should return jello world', (done)=>{
		request(app)
			.get('/')
			.expect('Jello World')
			.end(done);
	});
});


/*
it('should return users data', (done) => {
	request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body).toInclude([{
				name: 'Mike',
				age: '27'
			}]);
		})
		.end(done);
});
*/