/// <reference path="web-essentials.js" />

/* Test the FileSystem API */

WebEssentials.createNS("WebEssentials.FileSystem");

WebEssentials.FileSystem = (function () {
    var fileName = null;
    var fileEntry = null;
    var fileWriter = null;
    var fileOpenSuccess = null;

    // ---PUBLIC METHODS---

    function init() {
        requestFileSystem();

        $("#file-open").off("click", openFile).on("click", openFile);
        $("#file-write").off("click", write).on("click", write);
        $("#file-read").off("click", read).on("click", read);
    }

    function openFile() {
        var name = $("#file-name").val();
        var size = $("#file-size").val();

        this.fileName = name;
        window.requestFileSystem(window.TEMPORARY, size, getFile, openFileSuccessCallback);

        if (this.fileOpenSuccess) {
            return fileEntry;
        }
    }

    function write() {
        var data = $("#file-data").val();
        writeToFile(data);
    }

    function read() {
        var data = readFromFile(fileEntry);
        alert("Data read: " + data.toString());
    }

    // ---PRIVATE METHODS---

    function requestFileSystem() {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    }

    function getFile(fileSystem) {
        fileSystem.root.getFile(fileName, { create: true }, openFileSuccessCallback, openFileErrorCallback);
    }

    function openFileErrorCallback(error) {
        this.fileOpenSuccess = false;
        alert("Failed to open file." + "\n" + "Message: " + error.message);
    }

    function openFileSuccessCallback(file) {
        this.fileOpenSuccess = true;
        this.fileEntry = file;

        alert("File successfully opened.");
    }

    function writeToFile(data) {
        fileWriter = fileWriter || fileEntry.createWriter(writeToFile, handleError);

        fileWriter.onwriteend = function () { alert('Success'); };
        fileWriter.onerror = function () { alert('Failed'); };
        fileWriter.seek(fileWriter.length);

        fileWriter.write(new Blob([data], { type: 'text/plain' }));
    }

    function readFromFile(file) {
        var fileReader = new FileReader();

        fileReader.onloadend = function () { alert(this.result); };
        fileReader.onerror = function () { alert('Failed'); };

        return fileReader.readAsText(file);
    }

    return {
        init: init,
        openFile: openFile,
        write: write,
        read: read
    }
})();