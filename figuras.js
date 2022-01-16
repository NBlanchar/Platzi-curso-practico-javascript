// Codigo del Cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado
};


// Codigo del Triangulo
function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;
};

function areaTriangulo (base, altura){
    return (base * altura) /2;
};

//Codigo Circulo
  function diametroCirculo (radio){
    return radio *2;
 };
 const pi = Math.PI;
 
 function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
 };

function areacirculo (radio){
    return (radio * radio) * pi
};


// Cuadrado HTMl
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

//Triangulo HTML
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLadoTriangulo1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputLadoTriangulo2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputBaseTriangulo");
    const base = Number(input3.value);
    
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert (perimetro);
};

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputAlturaTriangulo");
    const altura = input1.value;
    const input2 = document.getElementById("InputBaseTriangulo");
    const base = input2.value;
    
    const area = areaTriangulo(base, altura);
    alert(area);
};

// Circulo HTML
function calcularPerimetroCirculo(){
const input = document.getElementById("InputRadio");
const value = input.value;

const perimetro = perimetroCirculo(value);
alert(perimetro);
};

function calcularAreaCirculo(){
const input = document.getElementById("InputRadio");
const value = input.value;

const area = areacirculo(value);
alert(area);
};