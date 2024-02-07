function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return "Please input a positive number"
    }

     const ticketPrice = 120;
     const janitorFee = 500;
     const staffMembersLunchFees = 8 * 50;
     
    const sale = ticketSale * ticketPrice;
    const totalExpenseEachDay = janitorFee + staffMembersLunchFees;
    
    const totalEarningEachDay = sale - totalExpenseEachDay;

    return totalEarningEachDay;

    }




