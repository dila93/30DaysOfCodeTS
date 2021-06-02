import { Day18 } from './queuesAndStacks';
import { Day19 } from './interfaces';
import { Day20 } from './sorting';
import { Day21 } from './generics';

mainTitle();

loadDaySolution(new Day18());
loadDaySolution(new Day19());
loadDaySolution(new Day20());
loadDaySolution(new Day21());

function mainTitle() {
	console.log("HACKER RANK");
	console.log("30 Days of Code.");
	console.log("-----------------");
};

function loadDaySolution(challenge: any) {
	console.log("Day ", challenge.description().day, ", ", challenge.description().title);
	console.log("Solution: \n");
	challenge.execute();
	console.log("-----------------");
}