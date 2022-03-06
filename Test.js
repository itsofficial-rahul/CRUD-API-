//  ----->>  Exersise 1 rd find greter then 1950  <<-----

const { time } = require("console");

// var list = [-25, -10, -7, -3, 2, 4, 8, 1]
// var newarr = []


// function fun(a, n) {
//     for (var i = 0; i < a.length; i++) {
//         for (var j = i + 1; j < a.length; j++) {
//             for (var k = j + 1; k < a.length; k++) {
//                 if ((a[i] + a[j] + a[k]) == n) {
//                     newarr .push([a[i] ,a[j] ,a[k]])
//                 }

//             }
//         }
//     }
// }
// fun(list, 0)
// console.log(newarr)

//  ----->>  Exersise 2 rd find greter then 1950  <<-----

// var a = [10, 2, 2, 5, 6, 6]

// function fun(val) {

//     let data = {}
//     for (var i = 0; i < val.length; i++) {
//         if (data[val[i]] >= 1) {
//             data[a[i]] += 1
//         } else {
//             data[a[i]] = 1
//         }
//     }
//     console.log(data);

// }
// fun(a)


// ----->>  Exersise 3 rd find greter then 1950  <<-----

// const years = [1920, 1940, 1950, 1961, 1987]

// function find_years(years) {
//     return years.filter(ele => ele >= 1950)
// }

// console.log(find_years(years))

// ------ ----->>  Exersise 4 rd find greter then 1950  <<-----
// var val = [100, 200]

// function fun([...data]) {
//     let sum = 0
//     for (var i = 0; i < data.length; i++) {
//         sum = sum + data[i]
//     }
//     console.log(sum)
//     return data.filter(ele => ele === 100)



// }
// console.log(fun(val));

//---->>>> 5 exersice check no is 100 or the sum of no is 100 == return by youtube
// junior developer channel on youtube == video 1
//=================================================================
//=================================================================

// const data = (a, b) => {
//     //  a === 100 || b === 100 || (a + b) === 100  ye bhi kr skte hai pr only return true or false

//     if (a === 100) {
//         console.log(`a is ${a}`);
//         if (b === 100) {
//             console.log(`b is ${b}`);
//             if ((a + b) === 100) {
//                 console.log(`sum of no is 100`);
//             }
//         }
//     } else {
//         console.log("no test passed")
//     }
// }

// data(50, 50);
// // console.log(data(0, 10))
// // console.log(data(100, 200));


//---->>> 6 chek element is present in array or not == return by youtube
// junior developer channel on youtube == video 1
//=================================================================
//=================================================================

// var arr = [100, 100, 200, 300, 400, 100, 500]

// const data = (arr) => {
//     let counter = 0
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] === 100 ? counter++ : null
//     }
//     return `100 present is ${ counter} times`
// }
// console.log(data(arr))

// ---->>> 7 get extension of file by youtube <<<-----
// junior developer channel on youtube == video 1
// =================================================================
// =================================================================

// const data = (str) => str.slice(str.lastIndexOf('.')) // ==Imp for slice in string at point what we nees
// console.log(data("index.html"));
// console.log(data("index.js"));

// ---->>> 8 find charcode of string  <<<-----
// junior developer channel on youtube == video 1
// =================================================================
// =================================================================


// const data = (val) => {
//     let b = val
//     for (i = 0; i < b.length; i++) {
//         console.log((val.charCodeAt(i)))
//     }
// }
// data("rahul")

// ---->>> 9 get current date / time/month / year  <<<-----
// junior developer channel on youtube == video 1
// =================================================================
// =================================================================

// function data() {
//     const date = new Date() //  object bana liya date ka 
//     const days = date.getDay()
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     const hour = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()

//     return `${days}/${month}/${year}  ${hour}-${minute}-${second}`
// }
// console.log(data());


// ---->>> 10  check if string start this str or not or add also<<<-----
// junior developer channel on youtube == video 1
// =================================================================
// =================================================================

// const data = (str) => {
//     // return str.indexOf("New!") === 0 ? str : `New! ${str}` // dono sahi hai 
//     return str.startsWith("New!") ? str : `New! ${str}` // imp for use ternary operator
// }
// console.log(data("N!office"));