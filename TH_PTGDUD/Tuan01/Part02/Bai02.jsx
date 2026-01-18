const bills = [125,555,44];
const tips = [];
const totals = [];

const calTip = (price) => {
    let tip;
    let total;
    if(price >= 50 && price <= 300){
        tip = price * 0.15;
        }else { 
        tip = price * 0.2;
    }
     total = price + tip;
        totals.push(total)
    return tip
};

for(let price of bills){
    tips.push(calTip(price));
}

console.log(bills)
console.log(tips)
console.log(totals)