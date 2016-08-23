/* global Pepita */

var menu = function (container) {

    var instance,
        options = Pepita ? Pepita.Helpers.getOptions(container) : {};

    function init() {

        return {

            options: options,

            loadController: function () {

                var active = options.activeClass ? options.activeClass : "active";

                $(container).find("a").click(function (event) {
                    event.preventDefault();
                    $(container).find("li").toggleClass(active, false);
                    $(event.target).parent("li").toggleClass(active, true);
                });
            }
        };

    }

    if (!instance) {
        instance = init();
        instance.loadController();
    }

    return instance;
};



