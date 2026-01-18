const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips = [];
const totals = [];

const calTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0 ; i < bills.length ; i++){
    tips.push(calTip(bills[i]));
    totals.push(calTip(bills[i]) + bills[i]);
}

console.log(bills)
console.log(tips)
console.log(totals)