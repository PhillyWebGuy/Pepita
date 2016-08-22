var menuAlt = function(container) {

    var instance,
        options = options = Pepita.Helpers.getOptions(container);

    function init() {
        return $.extend({}, new menu(container), {
            demo: (function(){
                console.log("menuAlt Loaded");
            })
        });
    }

    if (!instance) {
        instance = init();
    }

    return instance;
};



