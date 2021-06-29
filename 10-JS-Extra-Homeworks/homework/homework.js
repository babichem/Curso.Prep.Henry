// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let obd = Object.entries(objeto);
  return obd;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cont=0;
  var numerodecaract={};
   
   for (var i=0; i<string.length; i++) {
     if ((string[i] in numerodecaract === false)){ 
       cont=0;
       
       for ( var h=0; h<string.length; h++){
     
          if (string[i]===string[h]){
         cont=cont+1;
          }
         }
         
         Object.defineProperty(numerodecaract, string[i], {value:cont,writable: true,
          enumerable: true,
          configurable: true});
        
        }         
         
            }
     
   return  numerodecaract;
}
  


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var  cont=[];
  var  cont1=[];
   
  for (var i=0; i<s.length; i++) {
    if (s[i].toUpperCase()===s[i]){ 
      cont+=s[i];
    }
    if (s[i].toLowerCase()===s[i]){ 
      cont1+=s[i];
    }
  }
  return cont+=cont1;
    }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var  cont="";
  var  cont1="";
  var  cont2="";
  var h=0;
  var cont3=0;
  for (var i=0; i<str.length; i++) {
    if (!(h>=str.length)){
        i=i+cont3
    if (str[(i)]!==" "){ 
    cont="";
    cont3=0;
      for(var h=i;(str[h]!==" "&&h<str.length); h++){
        cont+=str[h]; 
        cont3++;    
        }
     for(var g=h-1; (str[g]!==" "&&g>=0); g--){
      cont1+=str[g];
      }
     }
   
   cont2+=cont1+" ";
   
   cont1="";
    }
  }
  return cont2.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 var numer=numero.toString();
 var cont="";

  for(var h=numer.length-1;h>=0; h--){
    cont+=numer[h]; 
  }
   
    if (numer===cont){
      return "Es capicua";
    }
    return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var cont="";
  var cont1="";
  
   for(var h=0;h<cadena.length; h++){
     cont="";
     cont+=cadena[h];
     if(cadena[h]==="a") {
      cont=cont.replace(cadena[h],"");
     }
     if(cadena[h]==="b") {
      cont=cont.replace(cadena[h],"");
     }
     if(cadena[h]==="c") {
      cont=cont.replace(cadena[h],"");
      
     }
     cont1+=cont;
    }
  return cont1;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cont=arr;
  var cont2=[];
  var cont3="";
        for(var h=0;h<cont.length; h++){
        cont3="";
        cont3=cont[h];
       for (var i=0;i<cont.length;i++){
         if (cont3.length<=cont[i].length){
           if ((cont2.includes(cont3))){
            cont3="";
             cont3=cont[i];
             }
             
             if (!(cont2.includes(cont[i]))&&(cont2.includes(cont3))){
              cont3="";
              cont3=cont[i];
            }
           }  
         if (cont3.length>cont[i].length){
          if (!(cont2.includes(cont[i]))){
           cont3="";
           cont3=cont[i];
           
          }
        }
      }
      cont2.push(cont3);
       
     }
      return cont2;
    }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  var cont2=[];
  
        for(var h=0;h<arreglo1.length; h++){
    
       for (var i=0;i<arreglo2.length;i++){
         if (arreglo1[h]===arreglo2[i]){
           cont2.push(arreglo1[h]);
         }
       }
      }
       return cont2;
    }
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

