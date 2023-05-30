

// for 90 percent
let number = document.getElementById('bar-1');
let counter = 0;

setInterval(()=> {
	if (counter == 90) {
		clearInterval();
		// statement
	}else {
			counter = counter+1;
	number.innerHTML = counter + "%";

		
	}



}, 76);

// for 78%

let number1 = document.getElementById('bar-2');
let counter1 = 0;

setInterval(()=> {
	if (counter1 == 78) {
		clearInterval();
		// statement
	}else {
			counter1 = counter1+1;
	number1.innerHTML = counter1 + "%";

		
	}



}, 67);


// for 67%

let number2 = document.getElementById('bar-3');
let counter2 = 0;

setInterval(()=> {
	if (counter2 == 67) {
		clearInterval();
		// statement
	}else {
			counter2 = counter2+1;
	number2.innerHTML = counter2 + "%";

		
	}



}, 90);



// testonomail

let test1 = document.getElementById('test1');
let count = 0;

setInterval(()=>{
	if (count == 101) {
		clearInterval();
	}
	else{
			count = count+1;
	test1.innerHTML = count + '+';

	}

},60);




// test 2

let test2 = document.getElementById('test2');
let count2 = 0;

setInterval(()=>{
	if (count2 == 145) {
		clearInterval();
	}
	else{
			count2 = count2+1;
	test2.innerHTML = count2 + '+';

	}

},40);



// test 3

let test3 = document.getElementById('test3');
let count3 = 0;

setInterval(()=>{
	if (count3 == 180) {
		clearInterval();
	}
	else{
			count3 = count3+1;
	test3.innerHTML = count3 + '+';

	}

},40);



// test 4

let test4 = document.getElementById('test4');
let count4 = 0;

setInterval(()=>{
	if (count4 == 199) {
		clearInterval();
	}
	else{
			count4 = count4+1;
	test4.innerHTML = count4 + '+';

	}

},30);



// form validation

const nameError = document.getElementById('name-error').value;
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');


function validate(){
	let name = document.getElementById('name');

	if (name.length == 0) {
		nameError.innerHTML = 'Name is Required';
		return false;
		// statement
	}

}

