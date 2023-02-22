let visor = document.querySelector(".visor")
let num1 = 0
let num2 = 0
let operador = ''
let operacao = ''
let digitos = ''
let resultado = ''

function processaTecla(numero) {
  console.log(numero)
  digitos += numero
  visor.innerHTML = digitos
  console.log(digitos)
}

function adicao() {
	num1 = digitos
	digitos = ''
	operador = '+'
	visor.innerHTML += '+'
}

function subtracao() {
	num1 = digitos
	digitos = ''
	operador = '-'
	visor.innerHTML += '-'
}

function multiplica() {
	num1 = digitos
	digitos = ''
	operador = 'x'
	visor.innerHTML += 'X'
}

function divisao() {
	num1 = digitos
	digitos = ''
	operador = '/'
	visor.innerHTML += '/'
}

function porcentagem() {
	num1 = digitos
	digitos = ''
	operador = '%'
	visor.innerHTML += '%'
}

function elevado2() {
	num1 = digitos
	digitos = ''
	resultado = parseFloat(num1) * parseFloat(num1)
	visor.innerHTML = resultado
	digitos = resultado
}

function raizQuadrada() {
	num1 = digitos
	digitos = ''
	resultado = Math.sqrt(parseFloat(num1))
	visor.innerHTML = resultado
	digitos = resultado
}

function raizCubica() {
	num1 = digitos
	digitos = ''
	resultado = Math.cbrt(parseFloat(num1))
	visor.innerHTML = resultado
	digitos = resultado
}

function vezesCem() {
	num1 = digitos
	digitos = ''
	resultado = num1 * 100
	visor.innerHTML = resultado
	digitos = resultado
}

function vezesMil() {
	num1 = digitos
	digitos = ''
	resultado = num1 * 1000
	visor.innerHTML = resultado
	digitos = resultado
}

function pi() {
  digitos = 3.14159265359
	visor.innerHTML = 3.14159265359
}

function calcular() {
	num2 = digitos
	if(operador === '+') {
		resultado = parseFloat(num1) + parseFloat(num2)
		visor.innerHTML = resultado
		digitos = resultado
	} else if(operador === '-') {
		  resultado = parseFloat(num1) - parseFloat(num2)
		  visor.innerHTML = resultado
		  digitos = resultado
	} else if(operador === 'x') {
		  resultado = parseFloat(num1) * parseFloat(num2)
		  visor.innerHTML = resultado
		  digitos = resultado
	} else if(operador === '/') {
		  resultado = parseFloat(num1) / parseFloat(num2)
		  visor.innerHTML = resultado
		  digitos = resultado
	} else if(operador === '%') {
		  resultado = (parseFloat(num1) * parseFloat(num2)) / 100
		  visor.innerHTML = resultado
		  digitos = resultado
	}
}

function limpa() {
	num1 = ''
	num2 = ''
	resultado = ''
	operador = ''
	digitos = ''
	visor.innerHTML = ''
}

function apaga() {
	digitos = ''
	visor.innerHTML = digitos
}