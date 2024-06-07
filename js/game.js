var player = {
	theNumber: new Decimal(0),
	numberGain: new Decimal(1),
	numberUpg: { 
		numberUpgrade1Bought: new Decimal(0),
		numberUpgrade1Price: new Decimal(1e2),
		numberUpgrade2Bought: new Decimal(0),
		numberUpgrade2Price: new Decimal(1e8),
	},
	sineWaves: {
		sinusoidalwave1: new Decimal(0),
		sinusoidalwave2: new Decimal(0),
		sinusoidalwave3: new Decimal(0),
	},
	resetting: false
}
function displayCurrency(name) {
	if (name = "theNumber") document.getElementById(name).innerHTML = "The Number: " + player.theNumber 
}
function increaseNumberOnClick() {
	player.theNumber = player.theNumber.add(player.numberGain)
}
function buyNumberUpgrade(number) {
	if (number = 1) confirm("blah1")
	if (number = 2) confirm("blah2")
	if (number = 3) confirm("blaherror")
}
function announceToPlayer(message) {
	confirm(message)
}
var updatingLoop = window.setInterval(function() {
  displayCurrency("theNumber")
}, 0.1)