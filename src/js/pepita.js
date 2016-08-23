var Util = Util || {};
var Regex = Regex || {};
var Comm = Comm || {};
var Helpers = Helpers || {};

var Pepita = (function () {

    var instance;

    function init() {

        /* Private methods and properties */

        var version = "Version 0.9";

        return {

            /* Public methods and properties */

            Util: new Util(),

            Regex: new Regex(),

            Comm: new Comm(),

            Helpers: new Helpers(),

            debug: true,

            viewPepita: function () {
                console.dir(this);
            },

            printVersion: function () {
                return version;
            }
        };

    }

    if (!instance) {
        instance = init();
    }

    return instance;

})();


$(function () {

    /* Look for every instance of data-pepita in the DOM */
    /* It is assumed each time this occurs, it is a container for a widget */
    var containerElement,
        widgetObj;

    $.each($("[data-pepita]"), function (index) {
        /* The value of the data-pepita attribute is the name of an object
         * you will be making a child of the window.Pepita namespace */
        containerElement = "[data-pepita='" + $(this).attr("data-pepita") + "']";
        widgetObj = $(this).attr("data-pepita");
        window.Pepita[widgetObj] = new window[widgetObj](containerElement);
        if(Pepita.debug === true) {
            console.log("Object '" + widgetObj + "' loaded!");
        }
    });

    if(Pepita.debug === true) {
        Pepita.viewPepita();
    }

});