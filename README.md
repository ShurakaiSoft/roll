# roll

## Objective

Roll is a wrapper for generating random numbers with a "dice like" API


## Usage

Include the module.

    var roll = require('roll');
    
Then roll the dice...

    var result = roll.d6(); // returns a number between 1 and 6
    
It includes wrappers for all common die as used in RPG's 

    roll.d4();		// 1..4
    roll.d6();		// 1..6
    roll.d8();		// 1..8
    roll.d10();		// 1..10 (not 0..9)
    roll.d12();		// 1..12
    roll.d20();		// 1..20
    
Along with a couple of others

	roll.d2();		// 1..2	coin toss
	roll.d3();		// 1..3
	roll.d100()		// 1..100 for percentages.
	
And if you're desired die doesn't exist, try

    roll.dX(31);	// 1..31	
