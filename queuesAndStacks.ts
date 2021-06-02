/*
Day 18: https://www.hackerrank.com/challenges/30-queues-stacks/problem
Title: Queues and Stacks

¿Can you determine if a given string, , is a palindrome?
*/

class Solution {
	stack: string[];
	queue: string[];

    constructor(){
        this.stack = [];
        this.queue = [];
    }
    
    pushCharacter(char: string) {
        this.stack.push(char);
    }
    
    enqueueCharacter(char: string) {
        this.queue.push(char);
    }
    
    popCharacter() {
        return this.stack.pop();
    }
    
    dequeueCharacter() {
        return this.queue.shift();
    }
}

export class Day18 {
	execute(){
		// read the string s
		var s = 'racecar';
		var len=s.length;
		// create the Solution class object p
		var obj=new Solution();
		//push/enqueue all the characters of string s to stack
		for(var i=0;i<len;i++){
			obj.pushCharacter(s.charAt(i));
			obj.enqueueCharacter(s.charAt(i));
		}
	
		var isPalindrome=true;
		/*
		pop the top character from stack
		dequeue the first character from queue
		compare both the characters
		
		*/

		for(var i=0;i<len/2;i++){
			if(obj.popCharacter()!=obj.dequeueCharacter()){
				isPalindrome=false;
				break;
			}
		}

		//finally print whether string s is palindrome or not

		if(isPalindrome)
			console.log("The word, "+s+", is a palindrome.");    
		else
			console.log("The word, "+s+", is not a palindrome.");
	}

	description(){
		return {
			day: 18,
			title: "Queues and Stacks."
		};
	}
}

