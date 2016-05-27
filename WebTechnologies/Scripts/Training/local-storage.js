/// <reference path="web-essentials.js" />
/*
 * Test local storage.
 */

WebEssentials.createNS("WebEssentials.LocalStorage");

WebEssentials.LocalStorage = (function () {
    function init() {
        if (isLocalStorageSupported()) {
            $("#storage-store").off("click").on("click", storeToLocalStorage);
            $("#storage-read").off("click").on("click", readFromLocalStorage);
            $("#storage-clear").off("click").on("click", clearStorage);
        }
        else {
            alert("Web Storage is not supported by your browser.");
        }
    }

    function storeToLocalStorage() {
        var key = $("#key").val();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var age = $("#age").val();

        // Do not store empty values.
        if (key == "" || firstName == "" || lastName == "" || age == "") {
            return;
        }

        var userData = { firstName: firstName, lastName: lastName, age: age };
        var value = JSON.stringify(userData);

        localStorage.setItem(key, value);
    }

    function readFromLocalStorage() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);

            var data = JSON.parse(value);

            if (data)
                alert("My name is " + data["firstName"] + " and I'm " + data["age"] + " years old.");
            else
                alert("Storage is empty.");
        }
    }

    function clearStorage() {
        localStorage.clear();
    }

    function isLocalStorageSupported() {
        return 'localStorage' in window;    
    }

    return {
        init: init
    }
})();
