let cart = [];

let buttons = document.getElementsByClassName("add-btn");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        let name = buttons[i].getAttribute("data-name");

        let price = Number(buttons[i].getAttribute("data-price"));

        alert(name + " Added to Cart");

    });

}


function showCart() {

    let items = document.getElementById("cartItems");

    let total = 0;
    let count = 0;

    items.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        let subtotal = cart[i].price * cart[i].quantity;

        total = total + subtotal;
        count = count + cart[i].quantity;

        items.innerHTML +=
    "<h4>" + cart[i].name + "</h4>" +
    "<p>Price: ₹" + cart[i].price + "</p>" +
    "<p>Quantity: " + cart[i].quantity + "</p>" +
    "<p>Subtotal: ₹" + subtotal + "</p>" +

    "<button class='increase' data-index='" + i + "'>+</button>" +

    "<button class='decrease' data-index='" + i + "'>-</button>" +

    "<button class='remove' data-index='" + i + "'>Remove</button><hr>";;

    }
    


    document.getElementById("cartCount").innerText = count;


    if (cart.length == 0) {

        document.getElementById("emptyCart").style.display = "block";

    } else {

        document.getElementById("emptyCart").style.display = "none";

    }



    let discount = 0;

    if (total > 5000) {

        discount = total * 10 / 100;

    } else if (total > 3000) {

        discount = total * 5 / 100;

    }

    let finalAmount = total - discount;


    document.getElementById("originalAmount").innerText = "₹" + total;

    document.getElementById("discountAmount").innerText = "₹" + discount;

    document.getElementById("finalAmount").innerText = "₹" + finalAmount;

 
    }


    document.getElementById("cartCount").innerText = count;


    if (cart.length == 0) {

        document.getElementById("emptyCart").style.display = "block";

    } else {

        document.getElementById("emptyCart").style.display = "none";

    }


  

    let discount = 0;

    if (total > 5000) {

        discount = total * 10 / 100;

    } else if (total > 3000) {

        discount = total * 5 / 100;

    }

    let finalAmount = total - discount;


    document.getElementById("originalAmount").innerText = "₹" + total;

    document.getElementById("discountAmount").innerText = "₹" + discount;

    document.getElementById("finalAmount").innerText = "₹" + finalAmount;


    

    if (total > 5000) {

        document.getElementById("cartSummary").style.backgroundColor = "lightgreen";

    } else {

        document.getElementById("cartSummary").style.backgroundColor = "#f5f2fc";

    }

function increase(i) {

    cart[i].quantity++;

    showCart();

}

function decrease(i) {

    cart[i].quantity--;

    if (cart[i].quantity == 0) {

        cart.splice(i, 1);

    }

    showCart();

}

function removeItem(i) {

    cart.splice(i, 1);

    showCart();

}

document.getElementById("clearCart").onclick = function() {

    cart = [];

    showCart();

};

document.getElementById("placeOrder").onclick = function() {

    if (cart.length == 0) {

        alert("Your cart is empty");

    } else {

        alert("Order placed successfully");

        cart = [];

        showCart();

    }

};

showCart();



    
  

