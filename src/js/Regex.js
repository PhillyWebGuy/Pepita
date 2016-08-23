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
        };
    }

    if (!instance) {
        instance = init();
    }

    return instance;

}