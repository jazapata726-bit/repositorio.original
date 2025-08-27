// empresa LavaSpress  se dedica al alquiler de lavadoras por hora. Tiene dos tipos de lavadoras; Pequeña: 3.000 pesos por hora.  Grande: 4.000 pesos por hora.
let small = 3000
let big = 4000
let timeSmall = parseInt(prompt("How much time are you going to use this small washing machine, plis, only numbers"))
let timeBig = parseInt(prompt("How much time are you going to use this big washing machine, plis, only numbers"))
let totalhoras = timeSmall + timeBig
if(totalhoras>10){  
    descuentoPorcentaje = ((timeSmall*small)+(timeBig*big))*3/100
    costoFinalTot = ((timeSmall*small)+(timeBig*big)) - descuentoPorcentaje
}else{
    costoFinalTot = (timeSmall*small)+(timeBig*big)
}
console.log(costoFinalTot)