function mayorMenor(){
var num1 = prompt("Ingrese numero 1: ");
var num2 = prompt("Ingrese numero 2: ");
var num3 = prompt("Ingrese numero 3: ");

var max = Math.max(num1,num2,num3);
var min = Math.min(num1,num2,num3);

document.write ("Maximo : " +max + "<br>" );
document.write ("Minimo : " +min);
}