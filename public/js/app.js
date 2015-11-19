var app = angular.module("myApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
            url: '',
            views: {
              'header': {
                templateUrl: 'header.html'
              },
              'content': {
                templateUrl: 'resume.html'
              },
              'footer': {
                templateUrl: 'footer.html'
              }
            }
            // templateUrl: 'resume.html'
    })

    .state('history', {
            url: '/history',
            views: {
              'header': {
                templateUrl: 'header.html'
              },
              'content': {
                templateUrl: 'history.html'
              }
            }
    })

    .state('home.portfolio', {
            url: '/portfolio',
            views: {
              'content@': {
                  templateUrl: 'portfolio.html'
              }
            }
    })

    .state('home.portfolio.list', {
            url: '/:id',
            templateUrl: 'portfolio-partial.html',
            controller: 'portfolioController'
    })


});

$(function(){
  $(".element").typed({
    strings: ["Search for Katie Ok.", "Kimchi ^1000 4life."],
    typeSpeed: 20
  });
  $("#typed").typed({
        stringsElement: $('#typed-strings')
    });
  $('button').click(function() {
    $('.menu').toggle('slide');
    // $('.guide-container').css('width', 345);
  });
});
