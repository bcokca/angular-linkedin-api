# Angular LinkedIn

Angular interface to the LinkedIn API

[![LinkedIn](http://developer.linkedin.com/sites/default/files/LinkedIn_Logo60px.png)](http://developer.linkedin.com)

This library provides a pure Angular interface to the LinkedIn **Profile**, **Group**, **Company**, **Jobs**, **Search**, **Share**, **Network** and **Invitation** REST APIs.


## Installation


You can install **angular-linkedin** via bower:

    $ bower install angular-linkedin-api
    
    
Add linkedinService as dependency

    var myApp = angular.module('myApp', ['linkedinServices']).config
    
Then inject it from your controller
    
    myApp.controller('AppCtrl', function AppCtrl($scope, linkedinService)){}
    

Now its time to get connection list within controller by using linkedinService

    linkedinService.getConnections(function(error, result){
        if(error){
            console.log('error',error);
        }else{
            console.log(result);
            $scope.connections = result;
        }

    });
    
All methods returns two parameter as callback. First one is error object and second one is response of the api.
If there is no error then the error parameter will be null.


## Profile API



## Connections API

## Search API

## Group API

## Company API

## Job API

## Share API

## Network API

## Invitation API

## Throttle Limits

LinkedIn API keys are throttled by default. You should take a look at the [Throttle Limits Documentation](http://developer.linkedin.com/documents/throttle-limits) to get more information about it.
