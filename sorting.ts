/*
	Given an array, , of size  distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following  lines:

	Array is sorted in numSwaps swaps.
	where  is the number of swaps that took place.
		First Element: firstElement
	where  is the first element in the sorted array.
		Last Element: lastElement
	where  is the last element in the sorted array.

	Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during
 */

class Sort{
	firstElement: number;
	lastElement: number;
	numSwaps: number;

	constructor(){
		this.firstElement = 0;
		this.lastElement = 0;
		this.numSwaps = 0;
	}

	bubbleSort(arr: number[], n: number){
		this.numSwaps = 0;
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n - 1; j++) {
				const leftNumber = arr[j];
				const rightNumber =  arr[j + 1];
				if (this.isLeftGreatherThanRight(leftNumber, rightNumber)) {
					arr = this.swapArrayPositions(arr, j);
					this.numSwaps++;
				}
			}

			this.firstElement = arr[0];
			this.lastElement = arr[arr.length-1];
			
			if (this.numSwaps == 0) {
				break;
			}
		}
	}

	swapArrayPositions(arr: number[], currentIndex: number){
		let temp = arr[currentIndex];
		arr[currentIndex] = arr[currentIndex + 1];
		arr[currentIndex + 1] = temp;
		return arr;
	}

	isLeftGreatherThanRight(leftNumber: number, rightNumber: number){
		return (leftNumber > rightNumber);
	}

	getSwaps(){
		return this.numSwaps;
	}

	getFirstElement(){
		return this.firstElement
	}

	getLastElement(){
		return this.lastElement;
	}

}

export class Day20 {
	execute(){
		let arrayOfNumbers = [3, 2, 1];
		let arrayLength = arrayOfNumbers.length
		let sorting = new Sort();
		sorting.bubbleSort(arrayOfNumbers, arrayLength);
		console.log("Array is sorted in", sorting.getSwaps(), "swaps.");
		console.log("First Element:", sorting.getFirstElement());
		console.log("Last Element:", sorting.getLastElement());
	}

	description(){
		return {
			day: 20,
			title: "Sorting."
		};
	}
}
