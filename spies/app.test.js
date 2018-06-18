const rewire = require('rewire');

const expect = require('expect');

var app = rewire('./app');


describe('App', () => {
	
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);
	
	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('joe', 23);
		expect(spy).toHaveBeenCalledWith('joe',23);
	});
	
	it('should call save user with user obj', 
	() => {
		var email = 'a@b.com';
		var password = '123abc';
		
		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});