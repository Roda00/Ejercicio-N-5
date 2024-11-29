const valor1 = +prompt("ingresa un valor")
const valor2 = +prompt("ingresa otro valor")

let resultadoinicial = `a = ${valor1} b = ${valor2}`
let resultadointercambiado = `a = ${valor2} b = ${valor1}`

document.write(`Tu resultado inicial es ${resultadoinicial} y tu resultado final es ${resultadointercambiado}`)