# Angular LinkedIn API

Angular interface to the LinkedIn API

[![LinkedIn](http://developer.linkedin.com/sites/default/files/LinkedIn_Logo60px.png)](http://developer.linkedin.com)

This library provides a pure Angular interface to the LinkedIn **Profile**, **Group**, **Company**, **Jobs**, **Search**, **Share**, **Network** and **Invitation** REST APIs.


###[DEMO APPLICATION](http://angular-linkedin-api.aws.af.cm/#/login)

## Installation


You can install **angular-linkedin-api** via bower:

    $ bower install angular-linkedin-api
    
    
Add linkedinService as dependency

    var myApp = angular.module('myApp', ['linkedinServices']).config
    
Then inject it from your controller
    
    myApp.controller('AppCtrl', function AppCtrl($scope, linkedinService)){}
    
    
All api methods return two parameter as callback. First one is error object and second one is response object of the api.
If there is no error then the error parameter will be null.


## Profile API

The Profile API returns a member's LinkedIn profile. You can use this call to return one of two versions of a user's profile which are public profile and standart profile. For more information, check out the documentation.


    linkedinService.getProfile(function(err, profile){
        if(err){
            console.log('error occurred', error);
        }else{
            $rootScope.user = result;
            
        }
    });
    
    
Here is the sample result 
    
    {
        "_key": "~",
        "firstName": "Burhan",
        "industry": "Computer Software",
        "lastName": "COKCA",
        "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_rmBXqluXihhyeRSr-wQBq1OQ3LPpej2r"
    }



## Connections API
The Connections API returns a list of 1st degree connections for a user who has granted access to their account

    linkedinService.getConnections(function(error, result){
        if(error){
            console.log('error occurred',error);
        }else{
            $scope.connections = result;
        }

    });
    
    
Sample response


    {
          "firstName": "Roberto",
          "id": "V9Zwje8VDW",
          "lastName": "Montagna",
          "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_Tw3KHVRBxo1ndvWof7TfHMaNxu5qL9Ho_EzfHMpe87lXVt0EDSAyQJeQlXLIQAd68eimFOmiOYEH",
          "publicProfileUrl": "http://www.linkedin.com/in/robertomontagna"
    },
    {
          "firstName": "François de",
          "id": "Y3fJ4zOwvf",
          "lastName": "Chezelles - Oracle ADF, WebCenter, JSF",
          "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_m8msvUEy5Tqwco4xukaWvJVYW_iWBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxRuT8vi",
          "publicProfileUrl": "http://www.linkedin.com/in/oracleadf"
    },



## Search API

## Group API

## Company API

## Job API

## Share API

## Network API

## Invitation API

## Throttle Limits

LinkedIn API keys are throttled by default. You should take a look at the [Throttle Limits Documentation](http://developer.linkedin.com/documents/throttle-limits) to get more information about it.
