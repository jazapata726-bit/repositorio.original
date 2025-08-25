let pequeña = 3000
let grande = 4000
let tipolavadora = prompt("1.pequeña 2.grande")
let numerohoras = 0
let total = 0
switch (tipolavadora) {
    case "1": {
        numerohoras = parseInt(prompt("cuantas horas usará la pequeña?"))
        if (numerohoras > 10) {
            total = (numerohoras * pequeña) * 97 / 100
        } else {
            total = (numerohoras * pequeña)
        }
        break;
    }
    case "2": {
        numerohoras = parseInt(prompt("cuantas horas usará la grande?"))
        if (numerohoras > 10) {
            total = (numerohoras * grande) * 97 / 100
        } else {
            total = (numerohoras * grande)
        }
        break;



    } default: {
        console.log("opción invalida")
    }
}
