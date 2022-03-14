
var array= []

function agregarNumero(numero){
    array.push(numero)
    return array
}


function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i=0; i< lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista/lista.length;  
    return promedioLista;
}

function calcularMediana(lista){
    // Ordenar Lista
    lista.sort(function(a,b){
        return a-b
    })
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

function calcularModa(lista){
    let listacount = {}
    lista.map(
        function(elemento){
            if(listacount[elemento]){
               listacount[elemento] +=1 
            }else{
                listacount[elemento] = 1
            }
        }
    )
    let listaArray =Object.entries(listacount).sort(
        function (a,b){
            return a[1]-b[1]
        }
    )
    let moda = listaArray[listaArray.length-1]
    return moda
}

function onClickButtonAddNumber(){
    const inputNumber = document.getElementById("inputNumber");
    const numberValue = Number(inputNumber.value);

    const precioConDescuento = agregarNumero(numberValue);

    const resultP = document.getElementById("lista");
    resultP.innerText = "Los elementos en la lista son: \n" +precioConDescuento;
}

function onClickButtonCalculateAverage(){
    const promedio = calcularPromedio(array) 
    const resultP = document.getElementById("ResultIP");
    resultP.innerText = "El promedio de la lista es: " +promedio;
}

function onClickButtonCalculateMedian(){
    const media= calcularMediana(array) 
    const resultP = document.getElementById("ResultIP");
    resultP.innerText = "La media de la lista es: " +media;
}

function onClickButtonCalculateMode(){
    const moda = calcularModa(array) 
    const resultP = document.getElementById("ResultIP");
    resultP.innerText = "La moda de la lista es: " +moda;
}