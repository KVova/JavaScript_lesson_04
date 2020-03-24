"use strict"

function line() {
	console.log("    <<<----------<>---------->>>");
}

// 1
// a
function sortMaxToMin(a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
	return 0;
}
var array = [ 1, 3, -4, 10, 11, -3, 32, 4, 5, 8, 9, 6, 3, 2, 3, -11, -10, -13,
		14, 24, -25 ];

array.sort(sortMaxToMin);
console.log(array);
line();

// b
array.sort(sortMaxToMin);
array.reverse();
console.log(array);
line();

// 2
var arrayPositive = array.filter(function(number) {
	return number >= 0;
});

var arrayNegetive = array.filter(function(number) {
	return number < 0;
});

console.log(arrayPositive);
console.log(arrayNegetive);
line();

// 3
// a
var Student = {
	yearOfStuding : 2,
	facultyName : "FB"
};

var Student1 = {
	yearOfStuding : 1,
	facultyName : "FE"
};

var Student2 = {
	yearOfStuding : 3,
	facultyName : "FCC"
};

var Student3 = {
	yearOfStuding : 4,
	facultyName : "FCE"
};

var Student4 = {
	yearOfStuding : 1,
	facultyName : "FFB"
};

var Student5 = {
	yearOfStuding : 3,
	facultyName : "FDB"
};

var Student6 = {
	yearOfStuding : 2,
	facultyName : "FPO"
};

var Student7 = {
	yearOfStuding : 5,
	facultyName : "FIT"
};

var Student8 = {
	yearOfStuding : 4,
	facultyName : "FKT"
};

var Student9 = {
	yearOfStuding : 6,
	facultyName : "FKNIT"
};

var studentArray = [ Student, Student1, Student2, Student3, Student4, Student5,
		Student6, Student7, Student8, Student9 ];
var facultyNameArray = studentArray.map(function(item) {
	return item.facultyName
});
console.log(facultyNameArray);
line();

// b
var studentArraySum = studentArray.reduce(function(sum, current) {
	return sum + current.yearOfStuding;
}, 0);
console.log(studentArraySum);