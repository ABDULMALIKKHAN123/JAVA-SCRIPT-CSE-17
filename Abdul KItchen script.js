let total = 0;

function order(item, price){

    const cart = document.getElementById("cart");

    const li = document.createElement("li");

    li.textContent = `${item} - ₹${price}`;

    cart.appendChild(li);

    total += price;

    document.getElementById("total").textContent = total;
}