function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Please input a positive number";
  }
  const ticketPrice = 120;
  const janitorFee = 500;
  const staffMembersLunchFees = 8 * 50;

  const sale = ticketSale * ticketPrice;
  const totalExpenseEachDay = janitorFee + staffMembersLunchFees;

  const totalEarningEachDay = sale - totalExpenseEachDay;

  return totalEarningEachDay;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid input";
  }
  const letter = ["a", "y", "i", "e", "o", "u", "w"];
  const lowerCaseName = name.toLowerCase();
  if (letter.includes(lowerCaseName[lowerCaseName.length - 1])) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let valid = [];
  for (const arr of array) {
    if (typeof arr === "number" && !isNaN(arr)) {
      valid.push(arr);
    }
  }
  return valid;
}

function password(obj) {
  if (
    typeof obj !== "object" || !obj.name || !obj.birthYear || !obj.siteName ||
    typeof obj.birthYear !== "number" ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }
  const site = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  const password = site + "#" + obj.name + "@" + obj.birthYear;

  return password;
}

function monthlySavings(arr , livingCost) {

if (!Array.isArray(arr) || typeof livingCost !== "number"){
    return 'invalid input'
}
let totalIncome = 0;
for(const array of arr){
    if(array >= 3000){
        const reduceTaxAbove3000 = array- (array * 20 / 100);
        totalIncome = totalIncome + reduceTaxAbove3000;
    } 
    else{
        totalIncome = totalIncome + array;
    }
}

const saving = totalIncome - livingCost;

if(saving < 0){
    return 'earn more'
}
return saving;

}
