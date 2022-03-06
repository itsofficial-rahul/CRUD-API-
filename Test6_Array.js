// ---->>> 1 get charcter chek ascii value of his ASCII value   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// function data(char) {

//     return String.fromCharCode(char) // us pr no pr jo hoga vo hoga vo aa jayega
// }
// console.log(data(88));
// console.log(data(14));
// console.log(data(56));


// ---->>> 2 get avg salary ,total salary by reduce or for in loop   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================


// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000" },
//     { fname: "vikas", lname: "choudhary", salary: "4000" },
//     { fname: "nitesh", lname: "choudhary", salary: "4000" },
//     { fname: "vishal", lname: "choudhary", salary: "4000" }
// ]

// function data(person) {
//     let sum = 0
//     for (const i of person) {
//         sum = sum + parseInt(i['salary'])
//     }
//     return sum // total salary return karga
//     return sum / person.length // average salary return karega 
//     return person.reduce((accumulater, per) => accumulater + parseInt(per.salary), 0) / person.length //shortcut
// }
// console.log(data(person));

// ---->>> 3 get count of age is gretter than 30   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================


// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000", age: "12/20/2006" }, // mm--dd--yyyy pattern
//     { fname: "vikas", lname: "choudhary", salary: "4000", age: "10/02/1980" }, //mm--dd--yyyy pattern
//     { fname: "nitesh", lname: "choudhary", salary: "4000", age: "10/02/1960" },//mm--dd--yyyy pattern
//     { fname: "vishal", lname: "choudhary", salary: "4000", age: "4/12/1955" }  //mm--dd--yyyy pattern
// ]

// function data(person) {

//     return person.filter(ele => new Date().getFullYear() - new Date(ele.age).getFullYear() > 30).length
// }
// console.log(data(person));

// ---->>> 4 get count of age is gretter than 30   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================
// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000", age: "20" },
//     { fname: "vikas", lname: "choudhary", salary: "4000", age: "60" },
//     { fname: "nitesh", lname: "choudhary", salary: "4000", age: "80" },
//     { fname: "vishal", lname: "choudhary", salary: "4000", age: "25" }
// ]

// function data(person) {

//     return person.filter(ele => ele.age > 30).length
// }
// console.log(data(person));



// ---->>> get first name concate with lname   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000", age: "20" },
//     { fname: "vikas", lname: "choudhary", salary: "4000", age: "60" },
//     { fname: "nitesh", lname: "choudhary", salary: "4000", age: "80" },
//     { fname: "vishal", lname: "choudhary", salary: "4000", age: "25" }
// ]

// function data(person) {
//     for (var i of person) { // isse bhi kr skte
//         console.log(i.fname + " " + i.lname);
//     }
//     console.log(person.map(person => `${person.fname} ${person.lname}`)) // issebhi kr skte

// }
// data(person)




// ---->>> 5 arrange youngest to older   <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000", age: "20" },
//     { fname: "vikas", lname: "choudhary", salary: "4000", age: "60" },
//     { fname: "nitesh", lname: "choudhary", salary: "4000", age: "80" },
//     { fname: "vishal", lname: "choudhary", salary: "4000", age: "25" }
// ]

// function data(person) {
//     return person.sort(function(a, b) {
//         return a.age - b.age
//     })
// }
// console.log(data(person));


// ---->>> 7 arrange youngest to older by DOB  <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// const person = [
//     { fname: "rahul", lname: "choudhary", salary: "4000", age: "12/20/1980" }, // mm--dd--yyyy pattern
//     { fname: "vikas", lname: "choudhary", salary: "4000", age: "10/02/2006" }, //mm--dd--yyyy pattern
//     { fname: "nitesh", lname: "choudhary", salary: "4000", age: "10/02/1960" }, //mm--dd--yyyy pattern
//     { fname: "vishal", lname: "choudhary", salary: "4000", age: "4/12/1955" } //mm--dd--yyyy pattern
// ]

// function data(person) {
//     return person.sort((a,b) => {
//         return new Date(a.age) - new Date(b.age)
//     })
// }
// // console.log(data(person))


// ---->>> 8 check how many in same department  <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// const person = [{
//         fname: "rahul",
//         lname: "choudhary",
//         Dep: "sale",
//         salary: "4000",
//         age: "12/20/1980"
//     }, // mm--dd--yyyy pattern
//     {
//         fname: "vikas",
//         lname: "choudhary",
//         Dep: "sale",
//         salary: "4000",
//         age: "10/02/2006"
//     }, //mm--dd--yyyy pattern
//     {
//         fname: "nitesh",
//         lname: "choudhary",
//         Dep: "marke",
//         salary: "4000",
//         age: "10/02/1960"
//     }, //mm--dd--yyyy pattern
//     {
//         fname: "vishal",
//         lname: "choudhary",
//         Dep: "marke",
//         salary: "4000",
//         age: "4/12/1955"
//     } //mm--dd--yyyy pattern
// ]

// function data(person) {
//     var d = {}
//     for (var i of person) {
//         if (d[i['Dep']] >= 1) {
//             d[i['Dep']] += 1
//         } else {
//             d[i['Dep']] = 1
//         }
//     }
//     return d
// }
// console.log(data(person));


//---->>>> date  se kese nikalna date and month aur usko check krna  <<<-----
//==========================================================
//=========================================================
// function timeForMilkAndCookies(date) {
//     return date.getMonth() === 11 && date.getDate() == 24 // one line solutiion
//     var a = date.getDate()
//     var b = date.getMonth()
//     return (a == 24) && (b == 12) ? true : false

// }


// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));