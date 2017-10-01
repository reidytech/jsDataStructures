//! Learn data structures -> make sure you can do all these things
//TODO: Learn data structure concept: - draw it - create the api/operation methods
//TODO: Build the data structure: -pseudocode the implementation -code the data structure constructor
//TODO: Utilize the data structure: -put the data structure to work -pair with an algorithm if needed
//TODO: Understand data structure: -what is the time complexity? -how can you optimize?

//! Stacks - Last item in, first item out, push, pop, elementary data structure
//! Stack is an array, but with only push and pop, if there was not shift and unshift, an array would be a stack

//*Code and call stack

var makeEggs = function(style, n) {
    var completedEgg;
    if(style !== "boiled") {
        var crackedEggs = crackEggs(n);
        if(style!== "scrambled") {
            completedEgg = fryEgg(crackedEggs, style);
        }
        else {
            var preppedEggs = whipEggs(crackedEggs);
            completedEgg = fryEgg(preppedEggs);
        }
    }
    return completedEgg;
}

makeEggs('scrambled', 3);
makeBacon('crispy', 2);

//call function, gets pushed onto call stack, and jump inside, stack frame - way to trace how to get back from where it left off
//call stack size exceeded - infinited loop, as you are filling in call stack, if you do infinite loop, it will exceed the browser's memory capabilities
//a stack frame IS, it's an instance of a function inside - think of a stack as an array, a stack would be one index of the array
//not multiple stack frames at once...but maybe, js is singlethreaded, but it depends on environment, there are webworkers, ways to make it not single threaded

//*1. COnstructor function - storage
//*2.Methods -push(value) //adds value to the front, returns size of stack (stackframes, count stack frames)
//* -pop() //removes value from front, returns value
//*size() //returns size of stack as an integer

/*_____________
/*             ]
/*             ] 7
/*_____________]
/*_____________
/*             ]
/*             ] 6
/*_____________]
/*_____________
/*             ]
/*             ] 5
/*_____________]
/*_____________
/*             ]
/*             ] 4
/*_____________]
/*_____________
/*             ]
/* openCab()   ] 3 //once done, maybe returns something, pop it off
/*_____________]
/*_____________
/*             ]
/* getBowl()   ] 2 //pop it off (returns something)
/*_____________]
/*_____________
/*             ]
/* crackEggs() ] 1 //once done, pop it off
/*_____________]
/*_____________
/*             ]
/* makeEggs()  ] 0 //once done, pop it off
/*_____________]*/