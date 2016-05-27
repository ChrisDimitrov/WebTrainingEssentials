/// <reference path="web-essentials.js" />
/*
 * Test session storage.
 */

WebEssentials.createNS("WebEssentials.SessionStorage");

WebEssentials.SessionStorage = (function () {
    function init() {
        if (isSessionStorageSupported()) {
            $("#session-storage-store").off("click").on("click", storeToSessionStorage);
            $("#session-storage-read").off("click").on("click", readFromSessionStorage);
            $("#session-storage-clear").off("click").on("click", clearStorage);
        }
        else {
            alert("Web Storage is not supported by your browser.");
        }
    }

    function storeToSessionStorage() {
        var key = $("#key-session").val();
        var firstName = $("#first-name-session").val();
        var lastName = $("#last-name-session").val();
        var age = $("#age-session").val();

        // Do not store empty values.
        if (key == "" || firstName == "" || lastName == "" || age == "") {
            return;
        }

        var userData = { firstName: firstName, lastName: lastName, age: age };
        var value = JSON.stringify(userData);

        sessionStorage.setItem(key, value);
    }

    function readFromSessionStorage() {
        for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            var value = sessionStorage.getItem(key);

            var data = JSON.parse(value);

            if (data)
                alert("My name is " + data["firstName"] + " and I'm " + data["age"] + " years old.");
            else
                alert("Storage is empty.");
        }
    }

    function clearStorage() {
        sessionStorage.clear();
    }

    function isSessionStorageSupported() {
        return 'sessionStorage' in window;
    }

    return {
        init: init
    }
})();
