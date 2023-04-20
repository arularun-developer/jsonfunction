let details1 = {name:"person1",age:5}
let details2 = {age:5,name:"person1"}

// equall condition//
let flag = true
for(let a in details1)
{
    if(details1[a]!==details2[a])
    {
        flag = false;
        break
    }
}
flag?console.log("Equall"):console.log("Not Equall")


// // not equall condition///
// let details1 = {name:"person1",age:5}
// let details2 = {age:6,name:"person1"}


// let flag = true
// for(let a in details1)
// {
//     if(details1[a]!==details2[a])
//     {
//         flag = false;
//         break
//     }
// }
// flag?console.log("Equall"):console.log("Not Equall")