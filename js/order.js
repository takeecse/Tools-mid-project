function placeOrder(){

localStorage.removeItem("cart");

alert("Order placed successfully");

window.location.href = "order-success.html";

}