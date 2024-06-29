var player = {
	//currentTab: "numberTab",
	//theNumberTab: "Upgrades",
	theNumber: new Decimal(0),
	numberGain: new Decimal(1),
	numberUpg: { 
		numberUpgrade1Bought: new Decimal(0),
		numberUpgrade1Price: new Decimal(25),
		numberUpgrade2Bought: new Decimal(0),
		numberUpgrade2Price: Decimal.pow(new Decimal(25),new Decimal(4)),
	},
	sineWaves: {
		sinetick: 250,
		sinusoidalwave1N: new Decimal(0),
		sinusoidalwave2N: new Decimal(0),
		sinusoidalwave3N: new Decimal(0),
		boughtsw1: new Decimal(0),
		boughtsw2: new Decimal(0),
		boughtsw3: new Decimal(0),
		sinemultbase: new Decimal(2),
		sinusoidalwave1Mult: new Decimal(1),
		sinusoidalwave2Mult: new Decimal(1),
		sinusoidalwave3Mult: new Decimal(1),
		sinusoidalwave1Price: new Decimal(1e2),
		sinusoidalwave2Price: new Decimal(1e4),
		sinusoidalwave3Price: new Decimal(1e16),
	},
	numUpgrades: {
		bought1: new Decimal(0),
		bought2: new Decimal(0),
	},
	resetting: false
}
function displayCurrency(name) {
	if (name == "theNumber") {document.getElementById(name).innerHTML = "The number is currently equal to " + format(player.theNumber)  + "."}
	if (name == "numberGainOnClick") {document.getElementById(name).innerHTML = "You increment your number by " + format(player.numberGain) + " per click."}
}
function increaseNumberOnClick() {
	player.theNumber = player.theNumber.add(player.numberGain) //bad
}
function buyNumberUpgrade(num) {
	if (num == 1) {
		if (player.theNumber.gte(player.numberUpg.numberUpgrade1Price)) {
			player.theNumber = player.theNumber.sub(player.numberUpg.numberUpgrade1Price)
			player.numberGain = player.numberGain.mul(1.5)
			player.numUpgrades.bought1 = player.numUpgrades.bought1.add(new Decimal("1"))
			player.numberUpg.numberUpgrade1Price = player.numberUpg.numberUpgrade1Price.mul(2)
			document.getElementById("numUpg1Bought").innerHTML = "You have bought this upgrade "+ format(player.numUpgrades.bought1)+ " times. Effect: x"+format(new Decimal(1.5).pow(player.numUpgrades.bought1))
			document.getElementById("NumUpg1").innerHTML = "Multiply your Number Gain on click by 1.5. <br>Decrements your number by " + format(player.numberUpg.numberUpgrade1Price) + "."
		} else {
			//confirm("You need to increment your number by " + format(player.numberUpg.numberUpgrade1Price.sub(player.theNumber)) + " or more to buy this upgrade.")
			//confirm is smelly
		}
	} else {
		confirm("how the hell did you do this i haven't even added that button yet")
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
			player.sineWaves.boughtsw1 = player.sineWaves.boughtsw1.add(new Decimal("1"))
			if ((player.sineWaves.boughtsw1.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave1Price = player.sineWaves.sinusoidalwave1Price.mul(new Decimal("5"))
				player.sineWaves.sinusoidalwave1Mult = player.sineWaves.sinusoidalwave1Mult.mul(player.sineWaves.sinemultbase)
			}
			document.getElementById("sineWave1counter").innerHTML = "You have " + format(player.sineWaves.sinusoidalwave1N) + " Sine waves. Mult: x" + format(player.sineWaves.sinusoidalwave1Mult)
			document.getElementById("SineWave1").innerHTML = "Buy one Regular Sine wave that increments the number. <br>Decrements your number by " + format(player.sineWaves.sinusoidalwave1Price) + "."
		} else {
			//confirm("You need to increment your number by " + format(player.sineWaves.sinusoidalwave1Price.sub(player.theNumber)) + " or more to buy this upgrade.")
		}
	} else if (num == 2) {
		if (player.theNumber.gte(player.sineWaves.sinusoidalwave2Price)) {
			player.theNumber = player.theNumber.sub(player.sineWaves.sinusoidalwave2Price)
			player.sineWaves.sinusoidalwave2N = player.sineWaves.sinusoidalwave2N.add(new Decimal("1"))
			player.sineWaves.boughtsw2 = player.sineWaves.boughtsw2.add(new Decimal("1"))
			if ((player.sineWaves.boughtsw2.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave2Price = player.sineWaves.sinusoidalwave2Price.mul(new Decimal("10"))
				player.sineWaves.sinusoidalwave2Mult = player.sineWaves.sinusoidalwave2Mult.mul(player.sineWaves.sinemultbase)
			}
			document.getElementById("sineWave2counter").innerHTML = "You have " + format(player.sineWaves.sinusoidalwave2N) + " Squared Sine waves. Mult: x" + format(player.sineWaves.sinusoidalwave2Mult)
			document.getElementById("SineWave2").innerHTML = "Buy one Squared Sine wave that increments the Regular Sine waves. <br>Decrements your number by " + format(player.sineWaves.sinusoidalwave2Price) + "."
		} else {
			//confirm("You need to increment your number by " + format(player.sineWaves.sinusoidalwave2Price.sub(player.theNumber)) + " or more to buy this upgrade.")
		}
	} else {
		if (player.theNumber.gte(player.sineWaves.sinusoidalwave3Price)) {
			player.theNumber = player.theNumber.sub(player.sineWaves.sinusoidalwave3Price)
			player.sineWaves.sinusoidalwave3N = player.sineWaves.sinusoidalwave3N.add(new Decimal("1"))
			player.sineWaves.boughtsw3 = player.sineWaves.boughtsw3.add(new Decimal("1"))
			if ((player.sineWaves.boughtsw3.mod(new Decimal("3")).eq(new Decimal("0")))) {
				player.sineWaves.sinusoidalwave3Price = player.sineWaves.sinusoidalwave3Price.mul(new Decimal("15"))
				player.sineWaves.sinusoidalwave3Mult = player.sineWaves.sinusoidalwave3Mult.mul(player.sineWaves.sinemultbase)
			}
			document.getElementById("SineWave3").innerHTML = "Buy one Cubed Sine wave that increments the Squared Sine waves. <br>Decrements your number by " + format(player.sineWaves.sinusoidalwave3Price) + "."
			document.getElementById("sineWave3counter").innerHTML = "You have " + format(player.sineWaves.sinusoidalwave3N) + " Cubed Sine waves. Mult: x" + format(player.sineWaves.sinusoidalwave3Mult)
		} else {
			//confirm("You need to increment your number by " + format(player.sineWaves.sinusoidalwave3Price.sub(player.theNumber)) + " or more to buy this upgrade.")
		}
	}
		//} else if (num == 2) {
			//confirm("blah2")
		//} else {
			//confirm("Something went wrong!")
		//}
}
function displayTab(tabName) {
	var allTabs = document.getElementsByClassName("tab")
	for (var i = 0; i < allTabs.length; i++) {
		var checkingTab = allTabs.item(i);
		if (checkingTab.id == tabName) {
			checkingTab.style.display = "block";
		} else {
			checkingTab.style.display = "none";
		}
	}
}
function displayNumTab(tabName) {
	var allTabs = document.getElementsByClassName("numTab") //mm i love reusing code and changing barely anything
	for (var i = 0; i < allTabs.length; i++) {
		var checkingTab = allTabs.item(i);
		if (checkingTab.id == tabName) {
			checkingTab.style.display = "block";
		} else {
			checkingTab.style.display = "none";
		}
	}
}
function updateValue(val) { //DEFINITELY A BETTER WAY TO DO THIS, THIS IS GARBAGE!!!
	if (val == 1) {
		player.theNumber = player.theNumber.add(player.sineWaves.sinusoidalwave1N.mul(player.sineWaves.sinusoidalwave1Mult))
	} else if (val == 2) { //i really need to learn switch statements
		document.getElementById("sineWave1counter").innerHTML = "You have " + format(player.sineWaves.sinusoidalwave1N) + " Sine waves. Mult: x" + format(player.sineWaves.sinusoidalwave1Mult)
		player.sineWaves.sinusoidalwave1N = player.sineWaves.sinusoidalwave1N.add(player.sineWaves.sinusoidalwave2N.mul(player.sineWaves.sinusoidalwave2Mult))
	} else {
		document.getElementById("sineWave2counter").innerHTML = "You have " + format(player.sineWaves.sinusoidalwave2N) + " Squared Sine waves. Mult: x" + format(player.sineWaves.sinusoidalwave2Mult)
		player.sineWaves.sinusoidalwave2N = player.sineWaves.sinusoidalwave2N.add(player.sineWaves.sinusoidalwave3N.mul(player.sineWaves.sinusoidalwave3Mult))
	}
}
window.addEventListener('load', function () {
  displayTab('numberTab')
  	console.log(format(new Decimal(1e16)))
})
var updatingLoop = window.setInterval(function() {
  displayCurrency("theNumber")
  displayCurrency("numberGainOnClick")
}, 0.001)
var sineWaveLoop = window.setInterval(function() {
  updateValue(1)
  updateValue(2)
  updateValue(3)
}, player.sineWaves.sinetick)