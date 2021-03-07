let a = parseInt(prompt("ingrese cuantas medialunas quiere"))
let b = parseInt(prompt("ingrese cuantos cafes"))
let resultado1 = 0;
let resultado2 = 0;
let suma = 0;
const medialuna = 45;
const cafe = 100;
function total(a, b){
    suma = a * medialuna + b * cafe;
}
total(a, b)
alert("Usted debe " + suma);
