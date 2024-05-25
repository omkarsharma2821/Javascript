const accountID = 12345;
let accountEmail = "abc@gmail.com";
var accountPassword = "1234";

// accountID = 25; not allowed to change const variables
// console.log(accountID)

accountEmail = "def@gmail.com";
accountPassword = "5678";

console.table([accountEmail, accountID, accountPassword]);