// ---->>> 1 storting string with alphabetical orde   <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// =================================================================

// const { ignore } = require("nodemon/lib/rules");
// const { stringify } = require("nodemon/lib/utils");

// function data(str) {

//     return str.split('').sort().join('') // split har ek ko array me daal dega 
// } // sort=sorting kr dega arry ki 
// // join wapas join krwa dega unko
// console.log(data("dcbaa"));

// ---->>> 2 count vowel in string  by arry method or using if else condition   <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// =================================================================

// function data(str, latters = ['a', 'e', 'i', 'o', 'u']) {

//     let count = 0
//     return str.split('').filter(ele => latters.indexOf(ele) > -1).length  // by method
//     for (var i = 0; i < str.length; i++) {  // by condtion ststment
//         (str[i] == 'a' || str[i] == 'o' || str[i] == 'e' || str[i] == 'i' || str[i] == 'u') ? count++ : count
//     }
//     return count
// }

// console.log(data("rahul"));


// ---->>> 3 find unique value in string me me se  <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// =================================================================
// function data(str) {
//     return new Set(str) // ye object or set ke form me unique data dega
//     return [...new Set(str)] // ye arry ke form me unic data dega
// }
// console.log(data("aabbcccd"));


// ---->>> 4 find unique value in arry me se me me se  <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// // =================================================================
// function data(str) {
//       new Set(str) // ye object or set ke form me unique data dega
//     return [...new Set(str)] // ye arry ke form me unic data dega
// }
// console.log(data([2, 3, 1, 56, 8, 56, 2, 3, 1]));



// ---->>> 5 find single value in string me se me se   <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// =================================================================
// function data(str) {
//     return str.split('').filter((ele, val, arr) => arr.filter(elemrn => elemrn === ele).length === 1)
// }
// console.log(data("ewebbdebde"));

// ---->>> 6 find single value in arry me se me se   <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// =================================================================

// const arr = [1, 1, 2, 3, 5, 2, 5, 3, 3]

// const data = (arr) => {
//     // 5 kitni baar hai dekhna ho to return arr.filter(ele => ele === 5).length 
//     return arr.filter((ele, val, ar) => ar.filter(elem => elem === ele).length === 1)
// }
// console.log(data(arr));