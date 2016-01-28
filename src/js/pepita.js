var Pepita = function () {

    var instance;
    var self = this;

    function init() {

        // Private methods and variables
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "Im also private";

        var privateRandomNumber = Math.random();

        return {

            // Public methods and variables
            publicMethod: function () {
                console.log("The public can see me!");
            },

            publicProperty: "I am also public",

            getRandomNumber: function () {
                return privateRandomNumber;
            },

            extend: function (ns_string) {
                var parts = ns_string.split('.'),
                    parent = self,
                    pl, i;

                /*if (parts[0] === "myApp") {
                    parts = parts.slice(1);
                }*/

                pl = parts.length;
                for (i = 0; i < pl; i++) {
                    //create a property if it doesnt exist
                    if (typeof parent[parts[i]] === 'undefined') {
                        parent[parts[i]] = {};
                    }

                    parent = parent[parts[i]];
                }

                return parent;
            }

        };

    }

    if (!instance) {
        console.log('!instance');
        instance = init();
    }

    return instance;

};

window['IC'] = new Pepita();
window['IC'].extend("Utils");

console.dir(window['IC']);


/*extend: function (ns, ns_string) {
 var parts = ns_string.split('.'),
 parent = ns,
 pl, i;

 if (parts[0] === "myApp") {
 parts = parts.slice(1);
 }

 pl = parts.length;
 for (i = 0; i < pl; i++) {
 //create a property if it doesnt exist
 if (typeof parent[parts[i]] === 'undefined') {
 parent[parts[i]] = {};
 }

 parent = parent[parts[i]];
 }

 return parent;
 }
 */



















