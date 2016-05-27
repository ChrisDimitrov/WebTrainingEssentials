/**
 * Test some OOP and stuff.
 */

WebEssentials.createNS("WebEssentials.Objects");

WebEssentials.Objects = (function () {
    var Vehicle = (function () {
        function Vehicle(make, model, year) {
            var make = make;
            var model = model;
            var year = year;

            Vehicle.prototype.start = function () {
                alert("Vrooooom");
            }

            Vehicle.prototype.getMake = function () {
                return make;
            }

            Vehicle.prototype.getModel = function () {
                return model;
            }

            Vehicle.prototype.getYear = function () {
                return year;
            }

            Vehicle.prototype.toString = function () {
                return make + " " + model;
            }
        }
        return Vehicle;
    })();

    var Car = (function (parent) {
        Car.prototype = new Vehicle();
        Car.prototype.constructor = Car;

        function Car(make, model, year) {
            parent.call(this, make, model, year);
            this.wheelQuantity = 4;
        }
        return Car;
    })(Vehicle);

    function testInheritance() {
        var car1 = new Car("BMW", "335i", 2012);
        make = car1.getMake();
        model = car1.getModel();
        year = car1.getYear();

        // All variables should be undefined.
        var vehicle1 = new Vehicle("Audi", "A3", "2008");
        make = vehicle1.make;
        model = vehicle1.model;
        year = vehicle1.year;
    }

    var Student = function Student(name, age) {
        var name = name;
        var age = age;

        Student.prototype.getName = function () {
            return name;
        }

        Student.prototype.getAge = function () {
            return age;
        }
    }

    function testEncapsulation() {
        debugger;
        var student = new Student("Gosho", 21);
        var name = student.name;
        var age = student.age;

        var s = this.name;
    }

    return {
        testEncapsulation: testEncapsulation
    }
})();
