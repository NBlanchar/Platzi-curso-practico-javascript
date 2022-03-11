// Codigo del Cuadrado
function perimetroCuadrado (lado){
    let resultado = lado * 4;
    return resultado + " cm"
};

function areaCuadrado(lado){
    let resultado = lado * lado
    return resultado + " cm^2"
};


// Codigo del Triangulo
function perimetroTriangulo (lado1,lado2,base){
    let resultado= lado1 + lado2 + base;
    return resultado + " cm"
};

function areaTriangulo (base, altura){
    let resultado= (base * altura) /2;
    return resultado + " cm^2"
};

// Codigo Triangulo Isósceles
function alturaTrianguloIsoceles (lado1,lado2,base){
    if(lado1!=lado2){
        return "No es un Triangulo Isoceles"
    }else{
        resultado = Math.sqrt(lado1**2 - ((base**2)/4))
    }
    return "La altura del triangulo es: " + resultado + " cm"
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
function calcularAlturaTrianguloIsoceles(){
    const input1 = document.getElementById("InputLadoTriangulo1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputLadoTriangulo2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputBaseTriangulo");
    const base = Number(input3.value);
    
    const altura = alturaTrianguloIsoceles(lado1,lado2,base);
    alert (altura);
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