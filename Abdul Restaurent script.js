let total = 0;

// Add Item to Cart
function addToCart(item, price) {

    const cart = document.getElementById("cartItems");

    const li = document.createElement("li");

    li.innerHTML = `
        ${item} - ₹${price}
        <button onclick="removeItem(this, ${price})" class="remove-btn">
            Remove
        </button>
    `;

    cart.appendChild(li);

    total += price;

    document.getElementById("total").innerHTML = total;
}

// Remove Item
function removeItem(button, price){

    button.parentElement.remove();

    total -= price;

    if(total < 0){
        total = 0;
    }

    document.getElementById("total").innerHTML = total;
}

// Checkout
function checkout(){

    if(total == 0){
        alert("🛒 Your cart is empty!");
    }
    else{
        alert("✅ Thank you for ordering from Malik's Kitchen!\n\nTotal Bill: ₹" + total);
    }

}

// Search Food
function searchFood(){

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        let food = card.querySelector("h3").innerText.toLowerCase();

        if(food.includes(input)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}