'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'slickCarousel']);


/* Config */
phonecatApp.config([
    '$routeProvider', '$locationProvider',
    function ($routeProvide, $locationProvider) {
        $routeProvide
            .when('/home', {
                templateUrl: 'src/templates/home.html',
                controller: 'PhoneListCtrl'
            })
            .when('/', {
                templateUrl: 'src/templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'src/templates/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'src/templates/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'src/templates/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
phonecatApp.filter('checkmark', function () {
    return function (input) {

    }
})

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.title = 'Телефоны';

    $http.get('src/phones/phones.json').success(function (data, status, headers, config) {
        $scope.phones = data;
    });


    $scope.disableClick = function () {
        var result = document.getElementsByClassName("nav__list");
        var wrappedResult = angular.element(result);
        var windowWidth = angular.element(window);
        wrappedResult.slideToggle(500);

        windowWidth.bind('resize', function () {
            if (windowWidth.width() > 500) {
                wrappedResult.removeAttr('style');
            }
        });

    }

}]);
phonecatApp.controller('MainCtrl', ['$rootScope', '$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 4000,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        }
    };
    $scope.slickConfig = {
        enabled: true,
    }
    $scope.toggleSlick = function () {
        $scope.slickConfig.enabled = !$scope.slickConfig.enabled;
    }
    $scope.items = [
        {
            imgSrc: 'src/img/carousel/2016-Apple-Macbook-Pro.jpg',
            label: 'label 1'
        },
        {
            imgSrc: 'src/img/carousel/performance_large.jpg',
            label: 'label 2'
        },
        {
            imgSrc: 'http://images.apple.com/v/home/dd/images/gallery/iphone_alt_large.jpg',
            label: 'label 3'
        }
    ];
  /*  $scope.images = [{
        url: 'src/img/carousel/2016-Apple-Macbook-Pro.jpg'
    }, {
        url: 'src/img/carousel/performance_large.jpg'
    }, {
        url: 'http://images.apple.com/v/home/dd/images/gallery/iphone_alt_large.jpg'
    }];*/
}]);

phonecatApp.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    var url = 'src/phones/about/' + $routeParams.phoneId + '.json';
    $http.get(url).success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);
