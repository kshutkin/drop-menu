# drop-menu

### AngularJS 1.x dropmenu helper directives

[Demo](https://rawgit.com/kshutkin/drop-menu/master/index.html)

### How to use

#### (1) Install using bower

    bower install angular-drop-menu --save

#### (2) Include drop-menu.js in your index.html, after including jQuery, jQuery UI and Angular (you can skip this if you use something like wiredep)

```html
<!--next is for default location of the bower_components folder-->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-drop-menu/drag_n_drop.js"></script>
```

#### (3) Add 'drop-menu' to your main module's list of dependencies

```javascript
angular.module('myModuleName', ['drop-menu'])
```

#### CSS

You will need some css to show dropdown or dropup with desired styles and position. You can take one from the [demo](https://rawgit.com/kshutkin/drop-menu/master/index.html) to start.

#### dmConfigProvider

If you want to configure default css classes and timeout you can use dmConfigProvider like this:  

```javascript
angular.module('myModuleName').config(['dmConfigProvider', function (dmConfigProvider) {
    dmConfigProvider.setOptions({
        hoverClass: 'hover',
        activeClass: 'active',
        timeout: 200
    });
}]);
```

#### dm-click-toggle

Adds css class to the element on click removes on click outside the element. 

```html
<button dm-click-toggle="className"></button>
```

#### dm-hover-toggle

Adds css class on hover and removes on mouse leave. Uses dm-timeout attribute to set the remove timeout if this attribute present on the same element.

```html
<button dm-hover-toggle="className" dm-timeout="200"></button>
```