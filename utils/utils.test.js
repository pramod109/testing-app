const expect = require('expect');

const utils = require('./utils');

it( 'should add two numbers',() => {
	var res = utils.add(10,20);
	
	expect(res).toBe(30).toBeA('number');
});

it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7);
		done();
	});
});

it('should square the number',()=>{
	var res = utils.square(2);
	
	expect(res).toBe(4).toBeA('number');
});

it('should async square the number', (done) => {
	utils.asyncSquare(2, (square)=>{
		expect(square).toBe(4);
		done();
	});
} );

it ('should set first and last name', () => {
	var user = {location: 'Arlington'}
	var res = utils.setName(user, 'John Doe');
	
	expect(user).toInclude(
		{
			firstName: 'John',
			lastName: 'Doe'
		}
	);
});

