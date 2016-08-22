/*
Methods inherited by each child of Pepita. Should contain methods
related to functioning of framework.
 */
function Helpers(options) {

    var instance;
    options = options || {};

    function init() {
        return {
            getOptions: function (container) {
                return !$(container).attr("data-options") ? false : JSON.parse($(container).attr("data-options"));
            }
        }
    }

    if (!instance) {
        instance = init();
    }

    return instance;

};

/*
Generic AJAX and related JSON methods.
 */
function Comm(options) {

    var instance;
    options = options || {};

    function init() {
        return {
            post: function () {
                console.log('post');
            }
        }
    }

    if (!instance) {
        instance = init();
    }

    return instance;
};

/*
Regex library
 */
function Regex(options) {

    var instance;
    options = options || {};

    function init() {
        return {
            validZipCode: function () {
                console.log('valid zip code');
                return true;
            }
        }
    }

    if (!instance) {
        instance = init();
    }

    return instance;

};

/*
Utilities.
 */
function Util(options) {

    var instance;
    options = options || {};

    function init() {
        return {
            regex: {
                validZipCode: function () {
                    console.log('valid zip code');
                }
            }
        }
    }

    if (!instance) {
        instance = init();
    }

    return instance;

};

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
    var $objects = $("[data-pepita]"),
        container,
        widget;

    $.each($("[data-pepita]"), function (index) {
        /* The value of the data-pepita attribute is the name of an object
         * you will be making a child of the window.Pepita namespace */
        container = "[data-pepita='" + $(this).attr("data-pepita") + "']";
        widget = $(this).attr("data-pepita");
        window.Pepita[widget] = window[widget](container);
        if(Pepita.debug === true) {
            console.log(widget + " loaded!");
        }
    });

    if(Pepita.debug === true) {
        Pepita.viewPepita();
    }

});