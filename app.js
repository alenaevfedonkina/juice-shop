const openBurgerBtn = document.getElementById('burger')
const displayBurger = document.getElementById('display_burger')
const overlay = document.querySelector('.overlay')
const btnCloseBurger = document.getElementById('btnCloseBurger')
const btnMenu = document.getElementById('btn-menu')
const displayMenu = document.getElementById('display_menu')
const closeMenu = document.getElementById('btnCloseMenu')
const openMenuInList = document.getElementById('menu2')
const openProductCard = document.querySelector('.card_product')
const displayCardProduct = document.getElementById('product_card')
const closeCardProduct = document.getElementById('CloseCardProduct')

openProductCard.addEventListener('click', function(){
    displayCardProduct.style.display = "block";
    overlay.style.display = "block";

})
closeCardProduct.addEventListener('click', function(){
    displayCardProduct.style.display = "none";
    overlay.style.display = "none";

})


openBurgerBtn.addEventListener('click', function(){
    displayBurger.style.display = "block";
    
})
btnCloseBurger.addEventListener('click', function(){
    displayBurger.style.display = "none";
})

btnMenu.addEventListener('click', function(){
    displayMenu.style.display = "block";
})
closeMenu.addEventListener('click', function(){
    displayMenu.style.display = "none";
})
openMenuInList.addEventListener('click', function(){
    displayBurger.style.display = "none";
    displayMenu.style.display = "block";
})