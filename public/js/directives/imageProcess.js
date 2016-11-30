"use strict"
// originally fork from http://jsfiddle.net/vYdBt/121/
// from this SO answer http://stackoverflow.com/a/11552460/376680
// this only does center cropping at this time

angular.module('sampleApp')
  .directive('croppedImage', function () {
      return {
          restrict: "E",
          replace: true,
          template: "<div class='center-cropped'></div>",
          scope:{imgsrc : '='},
          link: function(scope, element, attrs) {

              var width = attrs.width;
              var height = attrs.height;
              element.css('width', width + "px");
              element.css('height', height + "px");
              element.css('backgroundPosition', 'center center');
              element.css('backgroundRepeat', 'no-repeat');
              element.css('backgroundImage', "url('" + scope.imgsrc + "')");
              element.css('background-size: ', "cover");

          }
      }
  });
