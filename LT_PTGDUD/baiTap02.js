class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const products = [
    new Product(1,"sữa",850000,10),
     new Product(2,"kem",950000,50),
     new Product(3,"bò",10,20),
     new Product(4,"mèo",23,30),
];

function showProduct(){
    const names = products.map(st => st.name);

    const costProduct = products.filter(st => st.price > 100);

    const countProduct = products.reduce((sum, st) => sum + st.quantity * st.price, 0);


    console.log("tên:", names);
    console.log("giá sản phẩm:", costProduct);
    console.log("tổng giá sản phẩm:", countProduct);
}

showProduct();