// ---->>> 1 check given year is leap or not <<<-----
// junior developer channel on youtube == video 4  Date = 06/03/2022
// =================================================================
// =================================================================

// function leap_Year(a) {
//     return (a % 4 == 0) && (a % 400 == 0) ? "leap Year" : "not leapyear"
// }
// console.log(leap_Year(2018));

// ---->>> 2 ccheck object key is similar or not   <<<-----
// junior developer channel on youtube == video 4  Date = 06/03/2022
// =================================================================
// =================================================================

// const obj1 = {
//     name: "rahul",
//     age: "20",
//     pass: "3837"
// }

// const obj2 = {
//     name: "rahul",
//     age: "20",
//     pass: "3837"
// }

// function data(obj1, obj2) {
//   return   Object.keys(obj1).every(ele => obj2[ele])  // only key check krega similar hai yanhi

// }
// console.log(data(obj1, obj2));

// ---->>> 3 check complte object are similar to another object  <<<-----
// junior developer channel on youtube == video 4  Date = 06/03/2022
// =================================================================
// =================================================================

// const obj1 = {
//     name: "rahul",
//     age: "20",
//     pass: "3837"
// }

// const obj2 = {
//     name: "rahul",
//     age: "20",
//     pass: "3837"
// }

// function data(obj1, obj2) {
//     console.log(JSON.stringify(obj1));  // json formate me convert kr diya 
//     console.log(obj1);
//     return JSON.stringify(obj1) === JSON.stringify(obj2) // return true if complte object are similar

// }
// console.log(data(obj1, obj2));



// ---->>> 4 2d array in string   <<<-----  // imp
// junior developer channel on youtube == video 4  Date = 06/03/2022
// =================================================================
// // =================================================================

// function data(val) {
//     return val.split('\n').map(row => row.split()) // new row me insert kar dega
//     return val.split() // pure ko ek arre me daal dega
// }
// //\n backspace or new line lo tod dega waha se array me daal dega 
// const str = `abc,edf ,
//      ad,fg
//      fg,hg,hjk` // use backtick
// console.log(data(str));



// ---->>> 5 check element present or not    <<<-----  // imp
// junior developer channel on youtube == video 4  Date = 06/03/2022
// =================================================================
// // =================================================================

// const arr = [3, 2, 4, 55]

// function data(arr) { // use every ,some ,filter, or for loop
//     // return arr.every(ele => ele > 5)  // output false 
//     // return arr.some(ele => ele >2 5)  // output true 
//     // return arr.filter(ele => ele > 3) // return only 4,5
//     for (var i = 0; i < arr.length; i++) { // by for loop 
//         if (arr[i] === 3) {
//             return true
//         }
//     }
//     return false
// }
// console.log(data(arr, 3));