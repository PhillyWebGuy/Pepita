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
        };
    }

    if (!instance) {
        instance = init();
    }

    return instance;

}