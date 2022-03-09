// reverse string and or check palindrome por not in one lline code


// memoization function 
//======================
// const memoizAddition = () => {
//     let cache = {}
//     return (value) => {
//         if (value in cache) {
//             console.log("fetching from cathche")
//             return cache[value]
//         } else {
//             console.log("calculating value");
//             let result = value + 20
//             cache[value] = result
//             return result
//         }
//     }

// }
// const addition = memoizAddition();
// console.log(addition(20));
// console.log(addition(20));

// //   set time out 

// function first_Time() {
//     setTimeout(() => {
//         console.log("first is invoked");
//     }, 5000);
// }

// function second_Time() {
//     setTimeout(() => {
//         console.log("second in called")
//     }, 2000);
// }

// function third() {
//     setTimeout(() => {
//         console.log("third is called")
//         setTimeout(() => {
//             console.log("inner is invoked")
//         }, 5000);
//     }, 3000)
// }
// first_Time()
// second_Time()
// third()

//  put keys and values of bobject in arrray with seprate

// function data(obj) {
//     var arr = []
//     var a = Object.keys(obj)
//     var b = Object.values(obj)
//     arr.push(a, b)
//     console.log(arr)

// }
// data({ a: 'rahul', b: "vikas" })


//  sum of gino tk all

// function data(obj) {
//     var sum = 0
//     for (var i = 0; i <= obj; i++) {
//         sum = sum + i
//     }
//     console.log(sum)
// }
// data(13)

//   9-03-2022

//  use of local varible at outside of function 

// function data() {
// var a = 10
// return a
// }
// b = data()
// console.log(b);
// 
// 
// 

const arr_data = [5, 6, 3, 8, 9, ]

arr_data.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array + 1);
});
for (const key in arr_data) { // thus only returns index value 
    console.log(key)
}
for (const iterator of arr_data) {
    console.log(iterator); // thus only returns value 
}


// find evev  value upto the 100

for (let index = 1; index <= 100; index++) {
    index % 2 == 0 ? console.log(index) : null // 1 st way
}

// find odd  value upto the 100

for (let index = 1; index <= 100; index++) {
    index % 2 != 0 ? console.log(index) : null // 1 st way
}


//  use of index of method

var a = [10, 20, 30, , 40, 50, 60]
console.log(a.indexOf(20)) //  output is 1
console.log(a.indexOf(20, 3)) //  output -1  because  index 3 ke baad nhi dunda usne 
console.log(a.indexOf(56)) // out put   -1  not found
console.log(a.indexOf(40, 2)); // output 4


// d/w lastindex aakhir value dekhta hai
// indexof first value pr hi return ho jata hai

var a = [20, 20, 20, 40, 20, 20]

console.log(a.lastIndexOf(20)) //  output is 5 
console.log(a.indexOf(20)) //  output 0



//  for in loop key value pr kaam krta hai

var a = {
    name: "rahul",
    age: "45",
    add: "hatod"
}
for (var i in a) {
    console.log(i);
    console.log(a[i])
}
var a = [10, 20, 30, 50, ]

for (var i in a) {
    console.log(i);
    console.log(a[i])
}


// map method same us loop jese
// var a = [10, 20, 30, 50, ]
// a.map((ele, index, arry) => {
//     console.log(ele)
//     console.log(index);
//     console.log(arry)
// })

// string method


var a = "i am a web  dev am is dev eloper"
console.log(a.length)
console.log(a.startsWith("i "));
console.log(a.endsWith("per"))
console.log(a.includes("am"))
console.log(a.search(/am/g))
console.log(a.match(/is/i))
console.log(a.match(/is/g))
console.log(a.match("is"))
console.log(a.indexOf("a"))
console.log(a.lastIndexOf('a'));
console.log(a.replace("dev", "rahul"))
console.log(a.split(''))
console.log(a.slice(3, 10))
console.log(a.charAt(9));

var a = "rahul"
var b = a.repeat(2)
console.log(b)


// pass by value pass by refrence

// const a = [10, 20, 30]

// const b = [].concat(a)
// b.push(50)
// console.log(b)
// console.log(a)

// pass by value // pass by refrense 


let likes = 100
const obj = {
    name: "thapa thecncal",
    suscribe: "9.8"
}
const data = (likes, obj) => {
    likes = 500
    obj.suscribe = "1.0"
    console.log(likes, obj);

}

data(likes, obj)
console.log(likes)
console.log(obj.suscribe)


const fun1 = () => {
    setTimeout(() => {
        console.log("fun is called");
    }, 3000);
}
const fun2 = () => {
    fun1()
    console.log("fun2 is called")

}
fun2()