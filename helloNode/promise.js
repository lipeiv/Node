
const devices = ['dummydummydummydummy01715-000237347','dummydummydummydummy02581-000035998','dummydummydummydummy02920-000012393','dummydummydummydummy00779-008920','dummydummydummydummy00847-001917',
'dummydummydummydummy02241-000005686','dummydummydummydummy02524-000035436','dummydummydummydummy03119-000061861',
'dummydummydummydummy02322-000055590','dummydummydummydummy02093-000006551'];

const _result = {"sent":[],"failed":[{"device":"5c9f2cf7a8","status":"400","response":{"reason":"DeviceTokenNotForTopic"}}]};

var result = {"sent": [], "failed": []};

for (var i = 0 ; i < devices.length; i++) {
	result.failed.push({"device":devices[i],"status":"400","response":{"reason":"DeviceTokenNotForTopic"}})
}

console.log(result,result.failed[0]);


const promise1 = Promise.resolve(123);
promise1.then((value) => {
  console.log(value);
  // expected output: 123
});


var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v); // 1
});

var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));
/*
*  打印顺序如下，这里有一个同步异步先后执行的区别
*  original === cast ? true
*  value: 33
*/

// Resolve一个thenable对象
var p1 = Promise.resolve({ 
  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
});
console.log(p1 instanceof Promise) // true, 这是一个Promise对象

p1.then(function(v) {
    console.log(v); // 输出"fulfilled!"
  }, function(e) {
    // 不会被调用
});

// Thenable在callback之前抛出异常
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError("Throwing");
  resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable在callback之后抛出异常
// Promise resolves
var thenable = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});