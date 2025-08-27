let cedula = prompt("ingresa la cedula")
let Monto = parseFloat(prompt("ingresa el valor total"))
let puntosInicial = 100
let sumarPuntosUno = 100
let sumarPuntosDos = 250
let sumarPuntosTres = 400
let cantidadPuntosFinal = 0
let descuento = 0
let saldoFinal = 0
let valorFaltante = 0


  if (Monto >= 1  && Monto <= 100000) {
    cantidadPuntosFinal = puntosInicial +   sumarPuntosUno


  }

  if (Monto >= 101000 && Monto <= 500000 ) {
      cantidadPuntosFinal = puntosInicial + sumarPuntosDos
  }
  if(Monto >= 501000  ){
  cantidadPuntosFinal = puntosInicial + sumarPuntosTres

  }if (cantidadPuntosFinal >= 500) {
    descuento = Monto * 20 /100
    saldoFinal = Monto - descuento
    console.log("su cedula es",cedula,"su montos es de:",Monto,"su descuento es de:",descuento,"su saldo final es de",saldoFinal )

  }if (cantidadPuntosFinal < 500) {
    valorFaltante = 500 - cantidadPuntosFinal  
    console.log("puntos insuficientes, valor actual :",Monto, "la cantidad de creditos faltantes es de :",valorFaltante)

  }