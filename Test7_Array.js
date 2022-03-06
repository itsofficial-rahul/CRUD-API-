// ---->>> 1 check id and if +  true  <<<-----
// junior developer channel on youtube == video 5  Date = 6/03/2022
// =================================================================
// // // =================================================================




const arr = [{
        orderID: "1",
        cusname: "234",
        delivarydate: "01-02-2020",
        deliverd: true,
        items: [
            { productid: "234" },
            { price: 30 }
        ]
    },
    {
        orderID: "2",
        cusname: "235",
        delivarydate: "01-02-2021",
        deliverd: true,
        items: [
            { productid: "235" },
            { price: 60 }
        ]
    },
    {
        orderID: "3",
        cusname: "235",
        delivarydate: "01-02-2022",
        deliverd: false,
        items: [
            { productid: "123" },
            { price: 70 }
        ]
    },
    {
        orderID: "3",
        cusname: "123",
        delivarydate: "01-02-2022",
        deliverd: false,
        items: [{ productid: "123" },
            { price: 70 }
        ]
    }
]

// function data(arr) {

//     return arr.filter(ele => ele.cusname == "234" && !ele.deliverd)  // ! false direct
// }


// console.log(data(arr));





// ---->>> 2 check if all deleiverd is true or not every ,filter ,for in loop  <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================


// function data(arr) {
// return arr.every(order => order.deliverd) //   best way

// return arr.filter(ele => ele.deliverd === false) // short hand

// for (var i of arr) {
//     if (i.deliverd === false) {
//         console.log(i);
//         return false
//     }
// }

// return true
// }


// console.log(data(arr));



// ---->>> print array ke andar arry item ko<<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================

// function data(arr) {

//     for (const i of arr) {
//         console.log((i.items[0])); // index value se item  ke andar ko print krna
//     }


//     console.log(arr.some(orde => orde.cusname == "123")) // ye pura check karegi
//     return arr.filter(oder => oder.cusname == "123") // ye pura data de degi aur legth bhi
// }
// console.log(data(arr));


// ---->>> check how many item sold by id '123' ke <<<-----
// junior developer channel on youtube == video 6  Date = 6/03/2022
// =================================================================
// =================================================================
// function data(arr) {
//     // return arr.some(ele => ele.items.some((ar, le) => ar.productid == '123')) //ye sirf bata dega ki true aur false

//     // count batayefa pura kitne beche hai
//     return arr.reduce((acc, order) => acc + order.items.reduce((acc, itm) => acc + (itm.productid === "123"), 0), 0)
// }
// console.log(data(arr));