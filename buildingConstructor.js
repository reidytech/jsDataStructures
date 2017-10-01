function DilapidatedHouse(propertyValue, neighbors, behavior, siding, roof) {
    this.propertyValue = propertyValue;
    this.neighbors = neighbors;
    this.siding = siding;
    this.roof = roof;
    this.behavior = behavior;
    this.outlook = '' + this.propertyValue * .2 + ' property value in five years.';
    this.neighborhood = this.neighbors + ' like to ' + this.behavior + '. ';
}

DilapidatedHouse.prototype.condition = function(drippings){
    this.exterior = 'Your lovely home has a beautiful ' + this.siding + ' exterior. \n';
    this.drippings = drippings;
    this.interior = 'Your steadfast ' + this.roof + ' gives way to a wonderful ' + this.drippings + ' leaking into your bedroom every night.' + '\n';
    return this.exterior + this.interior;
}

DilapidatedHouse.prototype.wonderful = function(mood) {
    this.mood = mood;
    this.pleasant = 'No wonder you are ' +this. mood + ' every day. \n';
    this.brightside = 'Your home has an astounding ' + this.outlook + '\n';
    this.furthermore = this.neighborhood + 'Furthermore, your house has a ' + this.outlook + ' Congratulations!';
    return this.pleasant + this.brightside + this.furthermore;
}

var parker = new DilapidatedHouse(5000, 'The Murrays', 'burn their trash every night', 'cement', 'paper-thin roof');
console.log(parker.condition('milky-white fluid') + parker.wonderful('angry'));
var highland = new DilapidatedHouse(-4000, 'The Whittens', 'throw block parties, naked.', 'paper matchete', 'cardboard');
console.log(highland.condition('fecal matter') + highland.wonderful('infuriated'));