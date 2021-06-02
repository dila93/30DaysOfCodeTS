class Generic <T> {
    printArray = <T>(arr: T[]) => {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

export class Day21 {
	execute(){
		let n = 3
		let arr1 = [1, 2, 3];
		let generic = new Generic();
		generic.printArray(arr1);
		
		n = 2;
		let arr2 = ["Hello", "World"];
		generic = new Generic();
		generic.printArray(arr2);
	}

	description(){
		return {
			day: 21,
			title: "Generics."
		};
	}
}    