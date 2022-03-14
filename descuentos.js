//const precioOriginal = 120;
//const descuento = 18;

function Cupon(codigo,descuento){
    this.codigo = codigo
    this.descuento = descuento
}
var cupon1 = new Cupon ("baaa",15);
var cupon2 = new Cupon ("abaa",25);
var cupon3 = new Cupon ("aaba",55);
var cupon4 = new Cupon ("aaab",75);

var cupones = [cupon1,cupon2,cupon3,cupon4];

function calcularDescuetoCoupon(precioOriginal,cupon){
   for(let i=0;i<cupones.length;i++){
       if(cupones[i].codigo==cupon){
            const descuento = cupones[i].descuento
            const porcentajeDescuento = 100 - descuento;
            const precioConDescuento = (precioOriginal * porcentajeDescuento) / 100;
            return "El precio con descuento es: "+precioConDescuento;
       }
   }
        return "Por favor verificar el codigo del cupo "+ precioOriginal   
}

function calcularPrecioConDescuento(precioOriginal,descuento){
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajeDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = Number(inputPrice.value);
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" +precioConDescuento;
}

function onClickButtonPriceCoupon(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = Number(inputPrice.value);
    const InputCoupon = document.getElementById("InputCoupon");
    const CouponValue = InputCoupon.value;

    const precioConDescuento = calcularDescuetoCoupon(priceValue,CouponValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = precioConDescuento;
}