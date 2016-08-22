# Pepita
Another JavaScript micro-framework. "Pepita" is Spanish for "little pumpkin seed" and is the nickname I have given my youngest daughter.

The purpose of this 'framework' is to provide a light-weight framework when no particular framework is required with a project.

This micro-framework will help you with the following:

    - Standardize how you instantiate widget objects
    - Standardize namespacing
    - Standardize how you instantiate helper objects
    - Help you build re-usable libraries that may be used in future projects
    - Help you abstract your code so it will be available for future use


Table Of Contents
-----------------
- [Installation](#installation)
- [How it works](#how-it-works)
- [Classes](#classes)
- [Markup](#markup)
- [Sub-classes](#sub-classes)
- [Helper Objects](#helper-objects)
- [To-Do](#to-do)

Installation
------------

In a terminal window:

```
git clone https://github.com/PhillyWebGuy/Pepita.git Pepita
cd Pepita
npm install
gulp
```

Gulp will create a dist directory. Create a web server instance and point at the root of that folder, then open the index.html in a web browser.

How it works
------------

The code which instantiates this micro-framework is contained in src/js/pepita.js and looks like this:

```
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
```

The code does the following:

    - It searches for DOM elements with the data-pepita property.
    - For each such DOM element, it obtains the value of the property
    - Based upon the value of the data-pepita property, it tries to instantiate an object by than name and passes the DOM element as an argument

That is it.

Markup
------------

With the "menu" widget, the markup looks as such:

```
<ul class="nav nav-justified" data-pepita="menu" data-options='{"activeClass": "active"}'>
    <li class="active"><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
    <li><a href="#">Link 5</a></li>
    <li><a href="#">Link 6</a></li>
</ul>
```

The data-pepita property contains the name of the object. Also, data-options contains a set of properties formatted as JSON. In
the case of this particular widget, the class name of the active link is provided for the menu object's code.

Classes
------------

The following code is the same menu object. When the object is instantiated in the pepita.js bootstrap code, the widget
obtains potential unique configuration properties from the data-options property of the widget DOM element that was passed
to the widget object upon instantiation.

In this case, the menu object's code is written as a singleton pattern. A singleton pattern can be implemented by creating a
class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing,
it simply returns a reference to that object.

Additionally, this pattern allows us to implement private methods and variables, outside of the object returned by the init() method.

```
var menu = function(container) {

    var instance,
        options = Pepita.Helpers.getOptions(container);

        /*
            Private properties and methods here
        /*

    function init() {

        return {

            /*
                Public properties and methods here
            */

            options: options,

            loadController: (function(){

                var active = options.activeClass ? options.activeClass : "active";

                $(container).find("a").click(function(event){
                    event.preventDefault();
                    $(container).find("li").toggleClass(active, false);
                    $(event.target).parent("li").toggleClass(active, true);
                });
            })
        };

    }

    if (!instance) {
        instance = init();
        instance.loadController();
    }

    return instance;
};
```

Sub-Classes
------------

The "menuAlt" demo example contains an instance where an object is a sub-class of another object. In this example, "menuAlt" is a sub-class of "menu".

```
<ul class="nav nav-justified" data-pepita="menuAlt" data-options='{"activeClass": "active"}'>
    <li class="active"><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
    <li><a href="#">Link 5</a></li>
    <li><a href="#">Link 6</a></li>
</ul>
```

As is the case with the menu markup, we have a data-pepita and a data-options property with corresponding values.

The menuAlt object's code extends the the menu object, and merges new methods and properties into the parent class.

```
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
```

Helper Objects
------------

The Pepita object maybe be extended to include helper objects as children. In the current vesion, as a proof-of-concept, there is a Helpers, Regex, Util, and Comm class included
that will be expanded over time.

```
Pepita.Regex.validZipCode()
```

To-Do
------------

Current Roadmap includes:

    - Soliciting feed-back from the public
    - Unit Tests
    - More demos





