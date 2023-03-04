let listIngredients = document.querySelectorAll('.selectbtn');
let pedido = document.getElementById('pedido');
let ingredientes = document.getElementById('ingredientes');

 listIngredients.forEach(function(ingredient) {

      ingredient.addEventListener('click', elegirIng);
   
  
 });

let arrayIngredient =["Tomate","Albahaca","Mozzarella","Peperoni","Champiñon","Jamon","Pollo Parrilla","Jamon","Bacon Crispy","Anchoas","Aceitunas","Cebolla","Pimiento","Piña","atun"];

 function elegirIng(){
  
    
    for(let i=0;i<listIngredients.length; i++){
        alert(listIngredients[i].textContent)
    }
 }
 function imprimirIng(){
    
 }
