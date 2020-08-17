//Advance oop challenges

function merge() {
  var courses = ["HTML", "CSS", "JS"];
  var courses1 = ["java"];

  var arr = courses.concat(courses1);

  return arr;
}

// console.log(merge())

function join() {
  var course = ["HTML", "CSS", "JS"];
  course.push("java");

  return course;
}
// console.log(join())

// Khanya
function correct(str) {
  var string = "repoleved bew";
  return string.split("").reverse().join("");
}
// console.log(correct());

// Yanga
function correct(string) {
  var str = "hey";
  return str.toUpperCase();
}
// console.log(correct())


function check(arr){
  return arr.filter(function(words){
      
      if(words != 'Fanta' && words != 'Cola'){
         return arr;
      }
  }).map(v => v.toLowerCase())
}

console.log(check(['Cola','Sprite', 'Fanta' , 'Stony']))