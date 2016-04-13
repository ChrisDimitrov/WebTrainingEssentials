WebEssentials.createNamespace("WebEssentials.Calculator");

WebEssentials.Calculator = (function () {
    var inputBoxId = "input-box";
    var inputBoxIdjQuery = "#input-box";

    var outputBoxId = "output-box";
    var outputBoxIdjQuery = "#output-box";

    var bufferResult = 0;

   /**
    * Wire the events corresponding to the buttons.
    */
    function wireButtonEvents() {
        wireNumberButtonEvents();
        wireFunctionButtonEvents();
    }

    /**
     * Wire num keypad button events.
     */
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

    /*
     * Wire functional keypad button events.
     */
    function wireFunctionButtonEvents() {
        $("#addition").off("click").on("click", functionClickHandler);
        $("#subtraction").off("click").on("click", functionClickHandler);
        $("#multiplication").off("click").on("click", functionClickHandler);
        $("#division").off("click").on("click", functionClickHandler);
        $("#clear-button").off("click").on("click", functionClickHandler);
    }

    function buttonClickHandler(e) {
        var value = this.value;
        var number = parseInput(value);

        document.getElementById(inputBoxId).value += number;
    }

    function functionClickHandler(e) {
        switch (this.id) {
            case 'clear-button':
                {
                    $(inputBoxIdjQuery).val("");
                }
            case 'addition':
                {

                }
        }
    }

    function parseInput(input) {
        return Number.parseFloat(input);
    }

    return {
        wireButtonEvents: wireButtonEvents
    }

})();

