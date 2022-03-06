// ---->>> 1 concte string start ki 3 se last ki 3 ko <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const data = (str) => {
//     return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3) //how to remove piche se string 
// }
// console.log(data("developer"));
// console.log(data("delo123and123"));

// ---->>> 2 return half string by slice method <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================
// const data = (val) => {
//     return val.slice(0, val.length / 2) // ye best hai pr
//         // var a = val.length             // yebhi kr skte hai
//         // for (var i = 0; i < a / 2; i++) {
//         //     console.log(val[i]);
//         // }

// }
// console.log(data("rahu"));


// ---->>> 3 concate tow string remove thre first character <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const data = (a, b) => {
//     return a.slice(1) + b.slice(1)
// }
// console.log(data("rahul", "shalu"));


// ---->>> 4 return nearrest of 100 in two value <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const data = (a, b) => {
//     return a > b ? a : b
//     return (100 - a) < (100 - b) ? a : b // dono kr skte hai
// }
// console.log(data(500, 95));





// ---->>> 5 sorting arry asending order  <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const arr = [12, 45, 78, 92, 50]
// const data = (arr) => {
//     return arr.sort(function(a, b) {
//         return a - b
//     })
// }
// console.log(data(arr));

// ---->>> 6 sorting arry disending order  <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const arr = [12, 45, 78, 92, 50]
// const data = (arr) => {
//     return arr.sort(function(a, b) {
//         return b - a
//     })
// }
// console.log(data(arr));

// ---->>> 7 count element present in string   <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const data = (val) => {
//     var a = {}
//     for (var i = 0; i < val.length; i++) {
//         if (a[val[i]] >= 1) {
//             a[val[i]] += 1
//         } else {
//             a[val[i]] = 1
//         }
//     }
//     console.log(a);
// }
// data("rahul choudhary")


// ---->>> 8 check word how much time present in string <<<-----
// junior developer channel on youtube == video 2
// =================================================================
// =================================================================

// const data = (str, char) => {

//     console.log(str.split('')); // har word ko array me daal degi 

//     var b = str.split('').filter(ch => ch === char).length
//     console.log(b);

//     return b >= 2 && b <= 4 ? true : false

// }

// console.log(data("oooooooh", "o"));