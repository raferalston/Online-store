let cards = document.getElementsByClassName('capsule_add')

let products = [
    {
        name: 'jacket',
        tag: 'blue',
        img: "img/Capsule.png",
        price: 52,
        inCart: 0
    },
    {
        name: 'jacket',
        tag: 'yellow',
        img: "img/Image.png",
        price: 40,
        inCart: 0
    },
    {
        name: 'jacket',
        tag: ' black',
        img: "img/Knownforher.png",
        price: 45,
        inCart: 0
    },
    {
        name: 'jacket',
        tag: ' red',
        img: "img/ForMen.png",
        price: 35,
        inCart: 0
    },
    {
        name: 'jacket',
        tag: ' white',
        img: "img/ForWomen.png",
        price: 50,
        inCart: 0
    },
    {
        name: 'jacket',
        tag: 'green',
        img: "img/Women2.png",
        price: 48,
        inCart: 0
    },
];
Array.from(cards).forEach(function (card, index) {
    card.addEventListener('click', function () {
        cartNumbers(products[index]);
        totalCost(products[index])
        cartValue(products[index])
    })
})
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.span-cart').textContent = productNumbers;
    }
}
function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.span-cart').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.span-cart').textContent = 1;
    }
    setItems(products)
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

        }
        cartItems[product.tag].inCart += 1;


    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product

        }

    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))

}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    localStorage.setItem('totalCost', product.price);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productContainer = document.querySelector('.shoping')
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
         <div class = "shoping-cart">
        <img class = "shoping-img"src=${item.img}>
        <div class="shoping-text"> 
        <button class="shoping-button">
        X 
        </button>
        <h3 class="shoping-title">MANGO  PEOPLE</h3>
        <p class="shoping-title_two">T-SHIRT</p>
        <p class="shoping-subtitle">Price:<span class ="shoping-span">${item.price}$</span></p>
        <p class="shoping-subtitle">Color: Red</p>
        <p class="shoping-subtitle">Size: Xl</p>
        <p class="shoping-subtitle">Quantity</p> 
        <div class="total">
       = ${item.inCart * item.price}$
        </div>
        <input class= "shoping-input" type="number" max="10" min="1">
         </div>
        `


        });
    }

}


onLoadCartNumbers();
displayCart()
function valueInput(product) {
    let inputValue = document.querySelectorAll('.shoping-input');
    let cartValue = localStorage.getItem('productsInCart')
    cartValue = JSON.parse(cartValue)

    console.log(cartValue)
    Array.from(inputValue).forEach(index => {

        Object.values(cartValue).map(item => {
            index.value = item.inCart

        })

    })
}
valueInput(products)