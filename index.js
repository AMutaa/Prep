const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this
  },
  getB() {
    console.log(this.b);
  }
}

obj.getA().getB();

// SCOPE

var myObject = {
  foo: "bar",
  func: function () {
    var self = this; /*this is a local variable*/
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo); /*self is in the local scope*/
    }());
  }
};
myObject.func();


function foo1() {
  return {
    bar: "hello"
  };
}
console.log(foo1());

function foo2() {
  return {
    bar: "hello"
  };
}
console.log(foo2());

var carname = "Volvo xc60"

console.log(carname.toLowerCase());

// Count number of letters in a string
function count(params, string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === params) {
      count++;
    }
  }
  return count;
}

// function counter(string) {
//   var count = 0;
//   var alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"
//   for (var i; i < string.length; i++) {
//     if (string[i] === alphabet.split("")) {
//       count++
//     };
//   }
//   return count
// }

// console.log(counter(name));
console.log(count("p", "apple"));



var array1 = [1, 2, 3, 2, 4, 5];

function dup(arr) {
  var dup = [];
  var obj = {};
  for (var i = 0; i < array.length; i++) {}
}



// const counter = {
//   cnt: 0,

//   inc: function () {
//     cnt++;
//     console.log(cnt);
//   }
// };

// var unboundInc = counter.inc;
// console.log(unboundInc());

// var boundInc = unbound.bind(counter);

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', boundInc, false);




const array4 = [2, 3, 6, 7]
const array5 = array4.map(x => x * 2);
console.log(array5);

const array6 = ["Martin", "William", "Daniel", "Francis"]

// const array7 = array6.map((name) => `name + Connors`)
const array7 = array6.map((name) => `${name} Connors`)

console.log(array7);

//Fizz Buzz

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log('Fizz')
//   }
//   if (i % 5 == 0) {
//     console.log('Buzz')
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('Fizz-Buzz')
//   }
// }


function greeting(name) {
  alert('Hello ' + name)
}

function processUserInput(callback) {
  const name = prompt('Whats your name?');
  callback(name)
}

processUserInput(greeting);