//Palíndromo
function palindromo(fraseOriginal) {
    let original = fraseOriginal.toLowerCase().replace(/ /gi, "");
    let reversa = original.split('').reverse().join('');
    console.log('Original:', original);
    console.log('Reversa:',reversa);

    if(original == reversa) {
        console.log('Es palíndromo')
    } else {
        console.log('No es palíndromo')
    }
}

//Número primo
function nPrimo(primo){
    for (let i=2; i<=primo; i++) {
        if(primo % i === 0){
            if(i===primo){console.log('El número',primo,'es primo')}
            else console.log ('El número',primo,'no es primo')
            break;
        } 
    }
}

//Cubo
function cubo(n){
    console.log('Tamaño:',n)
    for (x=n; x>=1; x--){
      let cuadrado = Array(n).fill(x).join(',')
      console.log(cuadrado)
    }    
    for (z=2; z<=n; z++){
        let cuadrado = Array(n).fill(z).join(',')
        console.log(cuadrado)
      }  
}

//BubbleSort
function bubble(arregloOriginal){
    console.log('Original:',arregloOriginal/*.join(',')*/)
    let tamano = arregloOriginal.length;
    for (let x=1; x<=tamano; x++){
        for (let i=0; i<=tamano-2; i++ ) {
            let minimo = Math.min(arregloOriginal[i],arregloOriginal[i+1]);
            let maximo = Math.max(arregloOriginal[i],arregloOriginal[i+1]);
            arregloOriginal[i]=minimo
            arregloOriginal[i+1]=maximo
        }
    }
    console.log('Final:',arregloOriginal/*.join(',')*/)
}


//Función Palíndromo
console.log( "\n" + "*** Función Palíndromo ***");
palindromo("Anita lava la tina");

//Función Número Primo
console.log( "\n" + "*** Función Número Primo ***");
nPrimo(22);

//Función Cubo
console.log( "\n" + "*** Función Cubo ***");
cubo(9);

//Función BubbleSort
console.log( "\n" + "*** Función BubbleSort ***");
let arregloBurbuja = [993,2,67,2,0,5,1,9,4];
bubble(arregloBurbuja);