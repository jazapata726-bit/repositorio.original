let prendido_apagado=prompt("el semaforo está encendido o apagado?")
let color = ""
if(prendido_apagado=="encendido"){
    color = prompt("qué color está")
if(color=="amarillo"){
    alert("Precaución")
}
else if(color=="verde"){
    alert("Puede avanzar")
}
else if(color=="rojo"){
    alert("Deténgase")
}
else{
    alert("Fallo en el sistema")
}
}else if(prendido_apagado=="apagado"){
    alert("semaforo apagado")
}