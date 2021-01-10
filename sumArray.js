/* 
		Technical Test: "In NodeJS, write a function which returns the sum of a given array of numbers.”
						Use http://localhost:8080 as url to access results.
*/

//good input arrays
var array1 = [1, 2, 3, 4, 5]; //sum is 15
var array2 = [20.0, 2.2, 3.1, 14.0, 4.2]; //sum is 43.5
var array3 = [-20.0, 4, -3.1, 26, 8.5]; //sum is 15.4
//bad input arrays
var array4 = [1, 2, "middle", 4, 5]; //array contains non integers
var array5 = 4; //not an array
var array6 = []; //array is empty

function sumArray(array){		//function to find sum of arrays	
	try{		//test cases to ensure input is the correct datatype
		if (!Array.isArray(array)){			//checks input is an array
			throw new TypeError("Input is not an array");
		}
		else if (array.length == 0){		//checks array is empty 
			throw new TypeError("Input array is empty");
		}
		else if (array.some(isNaN)){		//checks array contains only integers
			throw new TypeError("Input array contains non integers");
		}
		else{		//returns sum of input array	
			let reducer = (currentTotal, currentValue) => currentTotal + currentValue;		//accumulator value for sum of the array
			const sum = array.reduce(reducer);		//uses reduce method to calculate the sum 
			return sum.toFixed(1);		//outputs to 1 posisiton after decimal
		}
	}
	catch(err) {		//catch error output and return statement to webpage
		return ("a " + err);
	}
};

var http = require('http');		//adds http module to create the server

//open local server on port 8080
//http://localhost:8080

http.createServer(function (req, res) {		//initialises the server
	res.writeHead(200, {'Content-Type': 'text/html'});		//sets data type through http module to display text
	//displays the given array and its sum or throws error msg
	res.write("The sum of [" + array1 + "] is " + sumArray(array1) + "<br/>");
	res.write("The sum of [" + array2 + "] is " + sumArray(array2) + '<br/>');
	res.write("The sum of [" + array3 + "] is " + sumArray(array3) + '<br/>');
	res.write("The sum of [" + array4 + "] is " + sumArray(array4) + '<br/>');
	res.write("The sum of " + array5 + " is " + sumArray(array5) + '<br/>');
	res.write("The sum of [" + array6 + "] is " + sumArray(array6) + '<br/>');
	res.end();		//ends server response
}).listen(8080);		//opens local server through port 8080