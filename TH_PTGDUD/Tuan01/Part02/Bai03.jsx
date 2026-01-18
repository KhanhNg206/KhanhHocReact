const markInfo = {
    name : 'Mark',
    height : 1.69,
    canNang : 78,
    calBMI : function() {
        this.bmi = this.canNang / (this.height * this.height);
        return this.bmi;
    }
};

const johnInfo = {
    name : 'John',
    height : 1.95,
    canNang : 92,
    calBMI : function() {
        this.bmi = this.canNang / (this.height * this.height);
        return this.bmi;
    }
};

markInfo.calBMI();
johnInfo.calBMI();

if(markInfo.bmi > johnInfo.bmi){
    console.log(`BMI của Mark (${markInfo.bmi.toFixed(2)}) lớn hơn BMI của John (${johnInfo.bmi.toFixed(2)})`)
}else if(johnInfo.bmi > markInfo.bmi){
     console.log(`BMI của John (${johnInfo.bmi.toFixed(2)}) lớn hơn BMI của Mark (${markInfo.bmi.toFixed(2)})`)
}else{
     console.log(`BMI của John (${johnInfo.bmi.toFixed(2)}) bằng BMI của Mark (${markInfo.bmi.toFixed(2)})`)
}