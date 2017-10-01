//*Interface: stacks
var Stack = function() {
    this.storage = "";
    this.firstVal = "";
    this.lastVal = "";
    this.midStack = "";
    this.sizeStack = 0;
};

Stack.prototype.push = function(val){
    this.sizeStack++;
    if(this.storage.length === 0){
        this.storage = this.storage += val;
        this.firstVal = val;
    }
    else if(this.size() > 2){
        this.storage = this.storage += val;
        this.midStack += this.lastVal.length.toString();
        this.lastVal = val;
    }
    else {
        this.lastVal = val;
        this.storage = this.storage += val;
    }
}

Stack.prototype.pop = function() {
    if(this.size() <= 0){
        return "ERROR";
    }
    else if(this.size() == 1){
        this.storage = '';
        this.sizeStack--;
        let tempVal = this.firstVal;
        this.firstVal = '';
        return tempVal;
    }
    else if(this.size() > 2){
        let tempVal = this.lastVal;
        this.storage = this.storage.slice(0, this.storage.length - this.lastVal.length);
        this.lastVal = this.storage.slice(this.storage.length - Number.parseInt(this.midStack.charAt(this.midStack.length - 1)), this.storage.length);
        this.midStack = this.midStack.slice(0, this.midStack.length - 1);
        this.sizeStack--;
        return tempVal;
    }   
    else { 
        let tempVal = this.lastVal;
        this.storage = this.storage.slice(0, this.storage.length - this.lastVal.lenth);
        this.sizeStack--;
        this.lastVal = "";
        return tempVal;
    }
}

Stack.prototype.size = function() {
    return this.sizeStack;
}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");

myWeeklyMenu.push("Salad");

myWeeklyMenu.push("Chicken");

console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
myWeeklyMenu.push("Flakes");
console.log(myWeeklyMenu.size());
myWeeklyMenu.push("Grun");
console.log(myWeeklyMenu.size());
myWeeklyMenu.push("Skar");
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
myWeeklyMenu.push("Meatss");
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
myWeeklyMenu.push("Ball");
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu.pop());
/*Outline of stack:
var Stack = function() {
    this.storage = "";
};

Stack.prototype.push = function(val){

}

Stack.prototype.pop = function() {

}

Stack.prototype.size = function() {

}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
*/