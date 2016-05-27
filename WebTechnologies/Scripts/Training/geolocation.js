/// <reference path="web-essentials.js" />
/*
 * Test the Geolocation API.
 */

WebEssentials.createNS("WebEssentials.Geolocation");

WebEssentials.Geolocation = (function () {
    function init() {
        $("#get-location-button").off("click").on("click", getLocation);
    }

    function getLocation() {
        if (supportsGeoLocation()) {
            navigator.geolocation.getCurrentPosition(getPossitionSuccessCallback, getPossitionErrorCallback);
        }
        else {
            alert("Geolocation is not supported.");
        }
    }

    function getSpeed() {
        if (supportsGeoLocation()) {
            var coordinates = getLocation();
            var speed = coordinates.speed;

            $("#speed").html(speed);
        }
    }

    function getPossitionSuccessCallback(position) {
        $("#latitude").html(position.coords.latitude);
        $("#longitude").html(position.coords.longitude);

        getSpeed();
    }

    function getPossitionErrorCallback(position) {
        alert("Cannot obtain current location.");
    }

    function supportsGeoLocation() {
        return "geolocation" in navigator;
    }

    return {
        init: init
    }
})();