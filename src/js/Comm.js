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
        };
    }

    if (!instance) {
        instance = init();
    }

    return instance;
}