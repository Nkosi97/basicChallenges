var x = 15;
//The output will be 15 if x is executed

function check() {
  let num = 15;
  
  if (num == 15) {
    return true;
  } else {
    return false;
  }
}

// console.log(check());

function display(name) {
  let myName = "Umuzi";
  return myName;
}
// console.log(display())


function addNum(a,b){
  var c = a + b;
  return c;
}
// console.log(addNum(2,6));

//Lavisa
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var c3 = ["react","angular"]
array = c1.concat(c2,c3);

console.log(array)


// what will be the output of the following
var courses = ["HTML", "CSS", "JS"];
// console.log(courses.length);

var date = new Date();
var minutes = date.getMinutes()
// console.log(minutes)
//Output the current minutes