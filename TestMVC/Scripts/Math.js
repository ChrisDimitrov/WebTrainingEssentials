/*
 * A class that represents a math library.
 */
(function Math() {
    Math.prototype.add = function (num1, num2) {
        return num1 + num2;
    }

    Math.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    }

    Math.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    }

    Math.prototype.divide = function (num1, num2) {
        return num1 / num2;
    }
})();