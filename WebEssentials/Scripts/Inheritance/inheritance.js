test('Vehicle Inheritance Test', function () {
    expect(2);

    var v = new Vehicle(2012, 'Toyota', 'Rav4');
    var actual = v.getInfo();
    var expected = '2012 Toyota Rav4';

    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);

    var actual = v.startEngine();
    var expected = 'Vroom';

    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

var Vehicle = (function Vehicle(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;

    Vehicle.prototype.getInfo = function () {
        return this.year + ' ' + this.make + ' ' + this.model;
    };
    Vehicle.prototype.startEngine = function () {
        return 'Vroom';
    };

    return Vehicle;
})();