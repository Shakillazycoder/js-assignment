let p = console.log.bind();

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
  }else{
    return "Bad Name";
  }
  
}

function deleteInvalids(array) {
    if (!Array.isArray(array)){
        return 'Invalid Array'
    }
    let valid = []
    for(const arr of array){
        if(typeof arr === 'number' && !isNaN(arr)){
           valid.push(arr)
        }
    }
     return valid;
    }