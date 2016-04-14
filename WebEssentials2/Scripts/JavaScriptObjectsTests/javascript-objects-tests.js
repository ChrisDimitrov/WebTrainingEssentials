/*
 * Test JavaScript objects.
 */

/**
 * Create two simple objects.
 */
test("Object creation", function () {
    expect(2);

    var car1 = getVehicle(2000, 'Ford', 'Fusion');
    var car2 = getVehicle(2010, 'BMW', 'Z4');

    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();

    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);

    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();

    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

test("Function Test", function () {
    expect(2);
    getVehicle(2000, 'Ford', 'Fusion');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = getInfo();
    equal(actual, expected, 'Expected value: ' + expected +
    ' Actual value: ' + actual);
    expected = 2000;
    actual = year;
    equal(actual, expected, 'Expected value: ' + expected +
    ' Actual value: ' + actual);
});

function getVehicle(theYear, theMake, theModel) {
    var vehicle = new Object();
    vehicle.year = theYear;
    vehicle.make = theMake;
    vehicle.model = theModel;
    vehicle.getInfo = function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    };
    return vehicle;
}