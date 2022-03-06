// ---->>> 1 return only even no or its length <<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

const { join } = require("path/posix");
const { CHAR_VERTICAL_LINE } = require("picomatch/lib/constants");


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function data(arr) {
//     return arr.filter(ele => ele % 2 === 0).length // return even no length
//         // return arr.filter(ele => ele % 2 === 0) only return even value
// }
// console.log(data(arr));


// ---->>> 2 insert  even no in arry upto the given value <<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

// function data(a) {
//     var arr = []
//     for (var i = 1; i <= a; i++) {
//         (i % 2 == 0) ? arr.push(i): null
//     }
//     return arr   //  ye element dega
//     return arr.length  // ye unki length return krega
// }
// console.log(data(6))

// ---->>> 3 check given array is sorted or not ( use 2  method) <<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

// const arr = [1, 2, 32, 4]

// function data(a) {
//     // let d = a.join('')   // 1 st method 
//     // var order = a.sort(function(a, b) {
//     //     return a - b
//     // })
//     // return d === order.join('') ? "asending order" : "dis"


//     for (var i = 0; i < a.length; i++) {  //  2 method
//         if (a[i + 1] < a[i])
//             return false
//     }
//     return true
// }
// console.log(data(arr));

// 
// ---->>> 4 find largest element  in array in arry<<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

// const arr = [1, 45, 899, 455, 7000]

// function data(arr) {
// return Math.max(...arr)    // best way
//     let sum
//     for (var i = 0; i < arr.length; i++) {
//         (sum > arr[i]) ? sum: sum = arr[i]
//     }
//     return sum
// }
// console.log(data(arr));

// ---->>> 5 find lowest element  in array in arry<<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================



// const arr = [45, 899, 455, 7, 4, 455, 8]

// function data(arr) {
// return Math.min(...arr)   // best way
//     var sum
//     for (var i = 0; i < arr.length; i++) {
//         (sum < arr[i]) ? null: sum = arr[i]
//     }
//     return sum
// }
// console.log(data(arr));


// ---->>> 6 largest even no in array<<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

// const arr = [1, 2, 30, 6, 80, 99, 20]

// function data(arr) {
//     return Math.max(...arr.filter(ele => ele % 2 === 0)) // best way
// let sum
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         (sum > arr[i]) ? null: sum = arr[i]
//     }
// }
// return sum
// }
// console.log(data(arr));


// ---->>> 7 replace charaecter with given data<<<-----
// junior developer channel on youtube == video 3  Date = 05/03/2022
// =================================================================
// =================================================================

// function data(val) {
//     return "$" + "" + val.slice(1) // for add $ in first postion
//     return val.replace(/[0-9]/, "$")
//     return val.replace(/[0-9]/g, "$") // for replce digit in first position  with global 
//     return val.replace(/[a-c]/, "$") // for replace charecter

// }
// console.log(data("ra22hul"));