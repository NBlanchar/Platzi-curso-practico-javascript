// Lista de Salarios
const salarioCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
// Lista de Salarios Ordenados
const salarioColOrdenado = salarioCol.sort(function(a,b){
    return a-b
});

function calcularMedianaSalario(lista){
    // Obtener mitad de la lista
    let mitad = parseInt(lista.length / 2)
    let  Mediana; 
    // Mediana dependiendo de si la listadatos son pares o impares
    if(lista.length % 2 ===0 ){
        let elemento1= lista[mitad-1]
        let elemento2= lista[mitad]
         Mediana = (elemento1 + elemento2)/2
    }else{
         Mediana = lista[mitad]
    }
    return  Mediana
}

const medianaGeneralCol = calcularMedianaSalario(salarioColOrdenado);

const spliceStart = salarioColOrdenado.length * 90 /100;
const spliceCount = salarioColOrdenado.length - spliceStart;
const salariosColTop10 = salarioColOrdenado.splice(spliceStart,spliceCount)

const medianaTop10Col = calcularMedianaSalario(salariosColTop10);

let resultP = document.getElementById("lista");
    resultP.innerText = "Los salarios en la lista son: \n" +salarioColOrdenado;