function filterCategory(category){

let filtered;

if(category === "all"){

filtered = products;

}else{

filtered = products.filter(product =>
product.category === category);

}

displayProducts(filtered);

}



function filterPrice(price){

document.getElementById("priceValue").innerText = price;

const filtered = products.filter(product =>
product.price <= price);

displayProducts(filtered);

}