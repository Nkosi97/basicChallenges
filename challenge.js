// class Calculator {
// 	// Write functions to add(), subtract(), multiply() and divide()
// constructor(){}
// add(a,b){
// 	let sum = a + b;
// 	return sum;
// }
//  subtract(a,b){
// 	let minus = a - b;
// 	return minus;
// }
//  multiply(a,b){
// 	let product = a * b;
// 	return product;
// }
//  divide(a,b){
// 	let divide = a / b;
// 	return divide;
// }
	
// }
// var calculator = new Calculator()

// console.log(calculator.add(10, 5))



class Employee {
	constructor (firstname, lastname, fullname, email) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname = `${this.firstname} ${this.lastname}`
		this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase()
	}
	

}
