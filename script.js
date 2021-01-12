/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere. It has produced an array of 
their Oxygen levels.

To be safe to land on, a planet needs to have an Oxygen level between 19.5% and 23.5%.

Write a function that finds the first safe oxygen level in each array - Oxygen between 19.5% and 23.5%
*/

const oxygenLevelsVirgo = [
	'24.2%',
	'11.3%',
	'19.9%',
	'23.1%',
	'29.3%',
	'20.2%',
];
const oxygenLevelsUrsa = ['30.8%', '22.5%', '18.8%', '19.5%', '20.2%', '31.6%'];

const oxygenSafeLevels = (arr) => {
	let res = [];
	arr.forEach((level) => {
		if (parseFloat(level) < 23.5 && parseFloat(level) > 19.5) {
			return res.push(level);
		}
	});
	return `The first safe level of oxygen is ${
		res[0]
	} all safe levels are ${res.join(', ')}`;
};

console.log(oxygenSafeLevels(oxygenLevelsVirgo));

/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

*/

let bushBerryColours1 = ['pink', 'pink', 'pink', 'neon', 'pink', 'transparent'];
let bushBerryColours2 = ['pink', 'pink', 'pink', 'pink'];

const checkBushes = (arr) => {
	if (arr.every((bush) => bush == 'pink')) {
		return `This planet is safe`;
	} else {
		return `This planet is not safe`;
	}
};

console.log(checkBushes(bushBerryColours2));
