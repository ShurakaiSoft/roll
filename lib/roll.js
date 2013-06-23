/**
 * node module for random numbers with a "dice like" interface.
 */

// Return a number from 1 to diceSize (inclusive)
function _roll(diceSize) {
	if (diceSize > 0) {
		diceSize = Math.floor(diceSize);
		return Math.floor(Math.random() * diceSize) + 1; 
	} else {
		return 0;
	}
}

module.exports = {
		dX: function (x) { return _roll(x); },
		d2: function () { return _roll(2); },
		d3: function () { return _roll(3); },
		d4: function () { return _roll(4); },
		d6: function () { return _roll(6); },
		d8: function () { return _roll(8); },
		d10: function () { return _roll(10); },
		d12: function () { return _roll(12); },
		d20: function () { return _roll(20); },
		d100: function () { return _roll(100); }
};