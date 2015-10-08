'use strict';

angular.module('drop-menu', [])
    .provider('dmConfig', function () {

        var defaults = {
                timeout: 500
            },
            userOptions = {};

        return {
            setOptions : function (options) {
                angular.extend(userOptions, options);
            },
            $get: function () {
                return angular.extend({}, defaults, userOptions);
            }
        }
    })
    .directive("dmClickToggle", ['$document', 'dmConfig', function($document, dmConfig) {
        return function(scope, element, attrs) {
            var className = attrs.dmClickToggle || dmConfig.activeClass;

            element.on('click', function (event) {
                event.stopPropagation();
                element.toggleClass(className);
            });

            $document.on('click', removeClass);

            scope.$on('$destroy', function() {
                $document.off('click', removeClass);
            });

            function removeClass() {
                element.removeClass(className);
            }
        };
    }])
    .directive("dmHoverToggle", ['$document', '$timeout', 'dmConfig', function($document, $timeout, dmConfig) {
        return function(scope, element, attrs) {
            var className = attrs.dmHoverToggle || dmConfig.hoverClass,
                timeout = attrs.dmTimeout || dmConfig.timeout,
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
                }, timeout);
            });
        };
    }]);
