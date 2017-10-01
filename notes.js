function Building(floors) {
    //the what - our constructor function, this is what we ask for object
    //what does it have?
    //what new does: this = {};
    this.what = "building";
    this.floors = floors; //per instance
    //PROPERTIES
    //at the end it returns this: return this;
}

myHouse = new Building(3);
{what: "building", floors: 3} //creates an object that has two properties, the 'what' and the floors

//! Methods for all instances

Building.prototype.countFloors = function() {
    console.log('I have', this.floors, 'floors');
}

//if we put this INSIDE the constructor function, we would be creating new methods
//every time we created a new instance
//EVERY Time we call a function its going to run the body of the function, if we had millions of buildings/objects,
//you don't want millions of the countFloors functions

//* factory creating objects, they all have a "trusty telephone line" to countFloors methods

//pattern for data structure:
function Tree(apples) {
    //what does it have?
}
//have our data structure, some properties, and a function to the prototype
Tree.prototype.addNode = function(){}
//! THe results of the shared method depend on the unique instance values which are created at call
//! time in each function's scope
//subclass and inheritance not covered....
//if you don't need to dynamically set a property if it is a constant