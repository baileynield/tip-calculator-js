const tipCalc = () => {
    const tipPercentage = prompt("What percentage of your bill would you like to leave for a tip? ");
    const bill = prompt("How much is your bill? ");

    const tipPercentageNumber = Number(tipPercentage)
    const tipDecimal = tipPercentageNumber / 100;

    const billNumber = Number(bill)
    const tip = tipDecimal * billNumber;

    let totalBill = billNumber + tip;
    totalBill = Math.round(totalBill * 100) / 100;

    alert(`Your total is: $${totalBill.toFixed(2)}`);
};

tipCalc();