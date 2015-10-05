'use strict';

angular.module('drop-menu', [])
    .provider('dmConfig', function () {

        var defaults = {
                options: {}
            },
            userOptions = {};

        return {
            setConfig : function (options) {
                userOptions.options = options;
            },
            $get: function () {
                return {
                    options: angular.extend({}, defaults.options, userOptions.options)
                }
            }
        }
    })
    .directive("dmClickToggle", ['$document', 'dmConfig', function($document, dmConfig) {
        return function(scope, element, attrs) {
            var className = attrs.dmClickToggle || dmConfig.options.dropMenuActiveClass,
                clickState = false;

            element.on('click', function (event) {
                clickState = !clickState;
                event.stopPropagation();
                if (clickState) {
                    element.addClass(className);
                } else {
                    element.removeClass(className);
                }
            });

            $document.on('click', removeClass);

            scope.$on('$destroy', function() {
                $document.off('click', removeClass);
            });

            function removeClass() {
                clickState = false;
                element.removeClass(className);
            }
        };
    }])
    .directive("dmHoverToggle", ['$document', '$timeout', 'dmConfig', function($document, $timeout, dmConfig) {
        return function(scope, element, attrs) {
            var className = attrs.dmHoverToggle || dmConfig.options.dropMenuHoverClass,
                hoveredState = false;

            element.on('mouseenter', function () {
                hoveredState = true;
                element.addClass(className);
            });

            element.on('mouseleave', function removeClass() {
                hoveredState = false;
                $timeout(function () {
                    if (!hoveredState) {
                        element.removeClass(className);
                    }
                }, 500);
            });
        };
    }]);
