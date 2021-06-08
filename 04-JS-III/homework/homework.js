// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
var devolverPrimerElemento=array;
return devolverPrimerElemento[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const ult=array;
  return ult[ult.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const largo=array;
  return largo.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const inc=array;
  for (let i = 0; i < inc.length; i++) {
     inc[i]=inc[i] + 1;
    }
  return inc;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const arr=array;
  var elem=elemento;
  arr.push(elemento);
  return arr;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const arr=array;
  var elem=elemento;
  arr.unshift(elemento);
  return arr;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  const inc=palabras;
  var lel;
   lel=inc.join(' ');
  return lel;
  }

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const cont=array;
  for (let i = 0; i < cont.length; i++) {
    if (cont[i]==elemento){
      return true
    }
}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const agreg=numeros;
  var cont=0;
  for (let i = 0; i < agreg.length; i++) {
    cont=agreg[i] + cont;
    }
return cont;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const prom=resultadosTest;
  var cont=0;
  var i=0;
  for (i = 0; i < prom.length; i++) {
    cont=prom[i] + cont;
    }
return cont=cont/i;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  const masg=numeros;
  var cont=0;
  for (let i = 0; i < masg.length; i++) {
    if (masg[i]>cont){
      cont=masg[i];
    }
    }
return cont;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  const mult=arguments;
  var cont=1;
  var i=0;
  if ((mult.length - 1) === -1){
    return cont=0;
  }
  if ((mult.length - 1) === 0){
return cont=mult[0];
  }
  if ((mult.length - 1) !== -1 && (mult.length - 1) !== 0 ) {
  for (i = 0; i < mult.length; i++) {
  
      cont=((mult[i])*(cont));
    }
    return cont;    
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  const cant=arreglo;
  var i=0;
  var cont=0;
  for (i = 0; i < cant.length; i++) {
    if (cant[i]>18){
      cont= (cont+1);
    }
    }
    return cont;
  }


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  const diasem=numeroDeDia;
  if (numeroDeDia===1 || numeroDeDia===7){
    return 'Es fin de semana';
  }
return 'Es dia Laboral';  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var emp=n;
 var  i=0;
emp= n.toString().split('');
  if (emp[0]==='9'){
    return true;
  }
    return false;
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  const igual=arreglo;
  var i=0;
  var cont=0;
  var cont1=0;
  for (i = 0; i < igual.length-1; i++) {
    if (igual[i]!==igual[i+1]){
      return false;
          }
    }
    return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const meses=array;
  const mesesg=[];
  var i=0;
  var cont=0;
  for (i = 0; i < meses.length; i++) {
    if (meses[i]==='Enero'){
      mesesg.push('Enero');
    }
    if (meses[i]==='Marzo'){
      mesesg.push('Marzo');
    }
    if (meses[i]==='Noviembre'){
      mesesg.push('Noviembre');
    }
  }
    if (mesesg.length!==3){
  return 'No se encontraron los meses pedidos';
       }
return mesesg;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const mayor=array;
  const mayora=[];
  var i=0;
  var cont=0;
  for (i = 0; i < mayor.length; i++) {
    if (mayor[i]>100){
      mayora.push(mayor[i]);
    }
}
return mayora;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var brea=numero;
  const mayora=[];
  var i=0;
  var cont=0;
    for (i = 0; i<10; i++) {
      brea=brea + 2;
    mayora[i]=brea;
    
    if (brea===i){
      return 'Se interrumpió la ejecución';
    }
}
return mayora;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var brea=numero;
  const mayora=[];
  var i=0;
  var cont=0;
    for (i = 0; i<10; i++) {
      if (i===5){
        continue; 
      }
      brea=brea + 2;
    mayora.push(brea);
   }
return mayora;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
