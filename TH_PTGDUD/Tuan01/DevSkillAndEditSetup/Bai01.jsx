const printForecast = (arr) => {
     for(let i = 0; i < arr.length ; i++){
        console.log(`...${arr[i]}ºC in ${i+1} days`)
     }
}

const data01 = [17, 21, 23];
const data02 = [12, 5, -5, 0, 4]

printForecast(data01);
printForecast(data02);