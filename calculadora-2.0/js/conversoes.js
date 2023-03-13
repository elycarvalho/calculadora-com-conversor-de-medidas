const menuConv = document.querySelector('.menu-conversoes')
const visorConv = document.querySelector('.visor-conv')
let medida = document.querySelector('.medida')
let convertido = 0

function pesMetros(ordem) {
	if(ordem === 'pm') {
		convertido = medida.value * 0.3048
        visorConv.innerHTML = convertido.toFixed(8) + ' metros'
	}
	if(ordem === 'mp') {
		convertido = medida.value * 3.28084
        visorConv.innerHTML = convertido.toFixed(8) + ' pés'
	}
}

function milhasKilometros(ordem) {
   if(ordem === 'mk') {
   	  convertido = medida.value * 1.60934
   	  visorConv.innerHTML = convertido.toFixed(8) + ' milhas'
   }
   if(ordem === 'km') {
   	  convertido = medida.value * 0.621371
   	  visorConv.innerHTML = convertido.toFixed(8) + ' km'
   }
}

function polegadasCm(ordem) {
   if(ordem === 'pc') {
   	  convertido = medida.value * 2.54
   	  visorConv.innerHTML = convertido.toFixed(8) + ' cm'
   }
   if(ordem === 'cp') {
   	  convertido = medida.value * 0.393701
   	  visorConv.innerHTML = convertido.toFixed(8) + ' poleg.'
   }
}

function librasKg(ordem) {
   if(ordem === 'kl') {
   	  convertido = medida.value * 2.20462
   	  visorConv.innerHTML = convertido.toFixed(8) + ' libras'
   }
   if(ordem === 'lk') {
   	  convertido = medida.value * 0.453592
   	  visorConv.innerHTML = convertido.toFixed(8) + ' kg'
   }
}

function fahrenheitCelsius(ordem) {
   if(ordem === 'fc') {
   	  convertido = (medida.value - 32) / 1.8
   	  visorConv.innerHTML = convertido.toFixed(8) + '°C'
   }
   if(ordem === 'cf') {
   	  convertido = 1.8 * medida.value + 32
   	  visorConv.innerHTML = convertido.toFixed(8) + '°F'
   }
}

function menuConversoes() {
	menuConv.style.display = 'flex'
}

function fechaMenuConv() {
	visor.innerHTML = 0
	menuConv.style.display = 'none'
}