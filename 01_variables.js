const accountId=144345
let accountEmail="test@gmail.com"
var accountPassword="12324" // var is not useable because it easily changeable and issues in block scope and function scope values is easily updated .
accountCity="lahore"
let accountState;  // give a undefine output 
 

accountEmail="hc@hcgmail.com"
accountPassword="45663"
accountCity="karachi"
// accountId=2  not allowes and as well as const is not changeable
// console.log(accountId);
// console.table is used to print all the variable in one log. mtlb bar bar console.log nahi likna paray ga .
// console.table(typeof[accountEmail,accountId,accountPassword,accountCity,accountState])
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
// console.log(typeof(accountCity))