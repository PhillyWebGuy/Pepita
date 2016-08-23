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
        };
    }

    if (!instance) {
        instance = init();
    }

    return instance;

}