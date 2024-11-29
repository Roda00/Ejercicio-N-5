const numero1 = +prompt("Introduci un numero")
const numero2 = +prompt("Introduci otro numero")
const operacion = prompt("Introduci una operacion que sea +, -, * o / ")

let resultado

if (operacion === "+") {
    resultado = numero1 + numero2
} else if (operacion === "-") {
    resultado = numero1 - numero2
} else if (operacion === "*") {
    resultado = numero1 * numero2
} else if (operacion === "/") {
    resultado = numero1 / numero2
}

alert(resultado)