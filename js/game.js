var player = {
	theNumber: new Decimal(0),
	numberGain: new Decimal(1),
	numberUpg: { 
		numberUpgrade1Bought: new Decimal(0),
		numberUpgrade1Price: new Decimal(25),
		numberUpgrade2Bought: new Decimal(0),
		numberUpgrade2Price: Decimal.pow(new Decimal(25),new Decimal(4)),
	},
	sineWaves: {
		sinetick: 100,
		sinusoidalwave1N: new Decimal(0),
		sinusoidalwave2N: new Decimal(0),
		sinusoidalwave3N: new Decimal(0),
		sinusoidalwave1Mult: new Decimal(1),
		sinusoidalwave2Mult: new Decimal(1),
		sinusoidalwave3Mult: new Decimal(1),
		sinusoidalwave1Price: new Decimal(1e2),
		sinusoidalwave2Price: new Decimal(1e4),
		sinusoidalwave3Price: new Decimal(1e6),
	},
	resetting: false
}
function displayCurrency(name) {
	if (name == "theNumber") {document.getElementById(name).innerHTML = "The number is currently equal to " + player.theNumber  + "."}
	if (name == "numberGainOnClick") {document.getElementById(name).innerHTML = "You increment your number by " + player.numberGain  + " per click."}
}
function increaseNumberOnClick() {
	player.theNumber = player.theNumber.add(player.numberGain)
}
function buyNumberUpgrade(num) {
	if (num == 1) {
		if (player.theNumber.gte(player.numberUpg.numberUpgrade1Price)) {
			player.theNumber = player.theNumber.sub(player.numberUpg.numberUpgrade1Price)
			player.numberGain = player.numberGain.mul(1.5)
			player.numberUpg.numberUpgrade1Price = player.numberUpg.numberUpgrade1Price.mul(2)
			document.getElementById("NumUpg1").innerHTML = "Multiply your Number Gain by 1.5. <br>Decrements your number by " + player.numberUpg.numberUpgrade1Price + "."
		} else {
			confirm("You need to increment your number by " + player.numberUpg.numberUpgrade1Price.sub(player.theNumber) + " or more to buy this upgrade.")
		}
	}
		//} else if (num == 2) {
			//confirm("blah2")
		//} else {
			//confirm("Something went wrong!")
		//}
}
function buySineWave(num) {
	if (num == 1) {
		if (player.theNumber.gte(player.sineWaves.sinusoidalwave1Price)) {
			player.theNumber = player.theNumber.sub(player.sineWaves.sinusoidalwave1Price)
			player.sineWaves.sinusoidalwave1N = player.sineWaves.sinusoidalwave1N.add(new Decimal("1"))
			if ((player.sineWaves.sinusoidalwave1N.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave1Price = player.sineWaves.sinusoidalwave1Price.mul(new Decimal("5"))
				player.sineWaves.sinusoidalwave1Mult = player.sineWaves.sinusoidalwave1Mult.mul(new Decimal("2"))
			}
			document.getElementById("SineWave1").innerHTML = "Buy one Regular Sine wave that increments the number. <br>Decrements your number by " + player.sineWaves.sinusoidalwave1Price + "."
		} else {
			confirm("You need to increment your number by " + player.sineWaves.sinusoidalwave1Price.sub(player.theNumber) + " or more to buy this upgrade.")
		}
	} else if (num == 2) {
		if (player.theNumber.gte(player.sineWaves.sinusoidalwave2Price)) {
			player.theNumber = player.theNumber.sub(player.sineWaves.sinusoidalwave2Price)
			player.sineWaves.sinusoidalwave2N = player.sineWaves.sinusoidalwave2N.add(new Decimal("1"))
			if ((player.sineWaves.sinusoidalwave2N.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave2Price = player.sineWaves.sinusoidalwave2Price.mul(new Decimal("10"))
				player.sineWaves.sinusoidalwave2Mult = player.sineWaves.sinusoidalwave2Mult.mul(new Decimal("2"))
			}
			document.getElementById("SineWave2").innerHTML = "Buy one Squared Sine wave that increments the Regular Sine waves. <br>Decrements your number by " + player.sineWaves.sinusoidalwave2Price + "."
		} else {
			confirm("You need to increment your number by " + player.sineWaves.sinusoidalwave2Price.sub(player.theNumber) + " or more to buy this upgrade.")
		}
	} else {
		if (player.theNumber.gte(player.sineWaves.sinusoidalwave3Price)) {
			player.theNumber = player.theNumber.sub(player.sineWaves.sinusoidalwave3Price)
			player.sineWaves.sinusoidalwave3N = player.sineWaves.sinusoidalwave3N.add(new Decimal("1"))
			if ((player.sineWaves.sinusoidalwave3N.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave3Price = player.sineWaves.sinusoidalwave3Price.mul(new Decimal("15"))
				player.sineWaves.sinusoidalwave3Mult = player.sineWaves.sinusoidalwave3Mult.mul(new Decimal("2"))
			}
			document.getElementById("SineWave3").innerHTML = "Buy one Cubed Sine wave that increments the Squared Sine waves. <br>Decrements your number by " + player.sineWaves.sinusoidalwave2Price + "."
		} else {
			confirm("You need to increment your number by " + player.sineWaves.sinusoidalwave3Price.sub(player.theNumber) + " or more to buy this upgrade.")
		}
	}
		//} else if (num == 2) {
			//confirm("blah2")
		//} else {
			//confirm("Something went wrong!")
		//}
}
function announceToPlayer(message) {
	confirm(message)
}
function updateValue(val) { //DEFINITELY A BETTER WAY TO DO THIS, THIS IS GARBAGE!!!
	if (val == 1) {
		player.theNumber = player.theNumber.add(player.sineWaves.sinusoidalwave1N.mul(player.sineWaves.sinusoidalwave1Mult))
	} else if (val == 2) {
		player.sineWaves.sinusoidalwave1N = player.sineWaves.sinusoidalwave1N.add(player.sineWaves.sinusoidalwave2N.mul(player.sineWaves.sinusoidalwave2Mult))
	} else {
		player.sineWaves.sinusoidalwave2N = player.sineWaves.sinusoidalwave2N.add(player.sineWaves.sinusoidalwave3N.mul(player.sineWaves.sinusoidalwave3Mult))
	}
}
var updatingLoop = window.setInterval(function() {
  displayCurrency("theNumber")
  displayCurrency("numberGainOnClick")
}, 0.1)
var sineWaveLoop = window.setInterval(function() {
  updateValue(1)
  updateValue(2)
  updateValue(3)
}, player.sineWaves.sinetick)