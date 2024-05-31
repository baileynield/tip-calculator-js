const tipCalc = () => {
    const tipPercentage = prompt("What percentage of your bill would you like to leave for a tip? ");
    const bill = prompt("How much is your bill? ");
    const tipPercentageNumber = Number(tipPercentage)
    const tipDecimal = tipPercentageNumber / 100;
    const billNumber = Number(bill)
    const tip = tipDecimal * billNumber;
    const totalBill = billNumber + tip;
    alert(`Your total is: $ ${totalBill}`);
};

tipCalc();