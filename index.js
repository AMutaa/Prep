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
  return
  {
    bar: "hello"
  };
}
console.log(foo2());

var carname = "Volvo xc60"

console.log(carname.toLowerCase());

// Count number of letters is a string
function count(params, string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === params) {
      count++;
    }
  }
  return count;
}

console.log(count("p", "apple"));