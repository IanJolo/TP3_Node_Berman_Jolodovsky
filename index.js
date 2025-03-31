const mostrarListas = lista =>{
    lista.map(elemento=>{
        console.log(elemento)
    })
}


console.log("1.");
console.log("Hola Mundo")

console.log("2.");
let materias=["ingles", "mate", "lengua", "DAI", "EFSI"]

function mostrarMateriasTradicional(){
    mostrarListas(materias)
}
const mostrarMateriasFlecha = materias => {
    mostrarListas(materias)

}
mostrarMateriasTradicional();
mostrarMateriasFlecha(materias);

console.log("3.");
materias.push("Ed.Judía");
mostrarMateriasFlecha(materias);

console.log("4.");
console.log(materias.lastIndexOf("mate"));
materias.push("mate")
console.log(materias.lastIndexOf("mate"))

console.log("5.");
let listaNumeros=[2, 3, 4, 8, 1, 3];

const sumar=listaNumeros =>{
    let suma=0;
    listaNumeros.map(numero => {
        suma+=numero
    });
    return suma;
}
console.log(sumar(listaNumeros));

console.log("6.");
const invertirArray = array =>{
    array.reverse()
    mostrarListas(array)

}
invertirArray(listaNumeros);

console.log("7.");
listaNumeros.sort();
mostrarListas(listaNumeros);

console.log("8.");
console.log(listaNumeros.filter(numero=>numero>2));

console.log("9.");
let cantVeces=0;
listaNumeros.map(numero=>{
    if(numero==3){
        cantVeces++;
    }
})
console.log(cantVeces);

