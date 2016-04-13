
var Calculator = (function () {

   /**
    * Wire the events corresponding to the number button.
    */
    function wireButtonEvents() {
        wireNumberButtonEvents();
        wireFunctionButtonEvents();
    }

    function wireNumberButtonEvents() {
        $("#number0").off("click").on("click", buttonClickHandler);
        $("#number1").off("click").on("click", buttonClickHandler);
        $("#number2").off("click").on("click", buttonClickHandler);
        $("#number3").off("click").on("click", buttonClickHandler);
        $("#number4").off("click").on("click", buttonClickHandler);
        $("#number5").off("click").on("click", buttonClickHandler);
        $("#number6").off("click").on("click", buttonClickHandler);
        $("#number7").off("click").on("click", buttonClickHandler);
        $("#number8").off("click").on("click", buttonClickHandler);
        $("#number9").off("click").on("click", buttonClickHandler);
    }

    function wireFunctionButtonEvents() {

    }

    function buttonClickHandler(e) {
        var value = e.value;
        var number = parseInput(value);

        document.getElementById("input").innerText += number;
    }

    function functionClickHandler(e) {

    }

    function parseInput(input) {
        return Number.parseFloat(input);
    }

    return {

    }

})();

