function arr(){
var miArray = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68]

for (i=0;i<miArray.length;i++){ 
  if (i%2==0){
    document.write("Elemento de posicion par es: " + miArray[i]) 
  document.write("<br>") 
  }
  else if (i%2 != 0)
    {
      document.write("Elemento de posicion impar es: " + miArray[i]) 
   	document.write("<br>")
    }
}
}