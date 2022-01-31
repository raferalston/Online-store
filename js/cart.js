let cart = document.querySelector(".shoping-cart");
let buttonDel = document.querySelectorAll('.shoping-button') 
console.log(cart)

for(let button of buttonDel) {
    button.addEventListener('click',function(e){
    let onDiv = e.target;
     onDiv.parentNode.parentNode.remove(onDiv)
    
});
    
    

    }


