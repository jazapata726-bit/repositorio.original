// Control de Aforo – Estadio Centenario (Armenia)
let codigoString = prompt("ingrese la letra");
let codigoInt = prompt("ingrese los numeros");
if (codigoString.length == 1 && codigoInt.length == 5   ){
if (codigoString == "O"||codigoString == "o"){
    console.log("Bienvenido. Diríjase a la zona Oriental.")

}else if (codigoString == "T" || codigoString == "t"){
    console.log("“Bienvenido. Diríjase a la zona occidental.”")
}else if (codigoString =="S" || codigoString == "s"){
    console.log("“Bienvenido. Diríjase a la zona sur.”")

}else if (codigoString == "n" || codigoString =="N"){
    console.log("Bienvenido. dirijase a la zona norte")
}
}
else{
    console.log("“Código inválido. Por favor verifique e intente nuevamente.");

}