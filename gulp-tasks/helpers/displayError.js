'use strict';

module.exports = function (plugins, error) {
    var log = plugins.util.log;

    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n", ''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if (error.fileName) {
        errorString += ' in ' + error.fileName;
    }

    if (error.lineNumber) {
        errorString += ' on line ' + error.lineNumber;
    }

    log(errorString);
};
