//Suscripciones de Revistas – Cálculo de costo
let revista = prompt("a que revista desea suscribirse?")
let tiempo_revista = ""
let nombre_operador = prompt("qué operador celular tiene?")
let valor = 0
if(revista == "dinero"&&nombre_operador == "claro"){
    tiempo_revista = prompt("ingresa el tiempo")
if(tiempo_revista == "3"){
    valor=6*95/100
}
if(tiempo_revista == "6"){
    valor=11*95/100
}
if(tiempo_revista == "12"){
    valor=20*95/100
}
}else if(revista == "dinero"){
    tiempo_revista = prompt("ingrese el tiempo")
if(tiempo_revista == "3"){
    valor = 6
}
if(tiempo_revista == "6"){
    valor = 11
}
if(tiempo_revista == "12"){
    valor = 20
}
}
if(revista == "national geographic"&&nombre_operador == "claro"){
    tiempo_revista = prompt("ingrese el tiempo")
if(tiempo_revista=="3"){
    valor=10*95/100
}
if(tiempo_revista=="6"){
    valor=13*95/100
}
if(tiempo_revista=="12"){
    valor=22*95/100
}
}else if(revista == "national geographic"){
    tiempo_revista=prompt("ingrese el tiempo")
if(tiempo_revista=="3"){
    valor=10
}
if(tiempo_revista=="6"){
    valor=13
}
if(tiempo_revista=="12"){
    valor=20
}
}
if(revista = "american journal"&&nombre_operador == "claro"){
    tiempo_revista=prompt("ingrese tiempo")
if(tiempo_revista=="3"){
    valor=12*95/100
}
if(tiempo_revista=="6"){
    valor=18*95/100    
}
if(tiempo_revista=="12"){
    valor=30*95/100
}
}else if(revista=="american journal"){
    tiempo_revista=prompt("ingrese tiempo")
if(tiempo_revista=="3"){
    valor=12
}
if(tiempo_revista=="6"){
    valor=18
}
if(tiempo_revista=="12"){
    valor=30
}
}

console.log(valor)