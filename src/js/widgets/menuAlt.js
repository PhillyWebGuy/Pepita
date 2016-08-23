/* global Pepita, menu */

var menuAlt = function(container) {

    var instance,
        options = Pepita.Helpers.getOptions(container);

    function init() {
        return $.extend({}, menu(container), {
            demo: function(){
                console.log("menuAlt Loaded");
            }
        });
    }

    if (!instance) {
        instance = init();
        instance.demo();
    }

    return instance;
};



