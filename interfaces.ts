class AdvancedArithmetic {
    divisorSum(n: number) {
		throw "NotImplementedError";
	}
}

class Calculator extends AdvancedArithmetic{
	divisorSum(n: number): number{
        let suma = 0;
        for(let i = 1; i <= n; i++){
            if(n % i == 0) suma += i;
		}
        return suma;
	}
}
        
export class Day19 {
	execute(){
		const n: number = 6;
		const my_calculator = new Calculator();
		const s = my_calculator.divisorSum(n);
		console.log("I implemented: AdvancedArithmetic");
		console.log(s);
	}

	description(){
		return {
			day: 19,
			title: "Interfaces."
		};
	}
}