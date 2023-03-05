let listIngredients = document.querySelectorAll('.selectbtn');
let pedido = document.getElementById('pedido');
let ingredientes = document.getElementById('ingredientes');
let selectIng = [];

[...listIngredients].forEach(function(ing) {

  ing.addEventListener("click", function() {
      seleccionarIngrediente(ing.innerText);
    });
  });

  
pedido.addEventListener("click", function() {
    mostrarSeleccion();
  });

limpiar.addEventListener("click", () =>{
    selectIng = [];
    ingredientes.innerHTML = "";
    
});

function seleccionarIngrediente(ingr) {
  if (!selectIng.includes(ingr)) {
    selectIng.push(ingr);
    alert(`Ha seleccionado ${ingr}.`);
  } else {
    alert(`Ya ha seleccionado ${ingr}.`);
  }
}

function mostrarSeleccion() {
  ingredientes.innerHTML = "";
  if (selectIng.length === 0) {
    ingredientes.innerHTML = "No ha seleccionado ningún ingrediente.";
  } else {
    for (let i = 0; i < selectIng.length; i++) {
    ingredientes.innerHTML=`Ha seleccionado: ${selectIng.join(", ")}.`
    }

  }
}



















