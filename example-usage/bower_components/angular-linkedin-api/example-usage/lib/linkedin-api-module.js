
var linkedinServices = angular.module('linkedinServices',[]);


linkedinServices.
    factory('linkedinService', function($modal, $rootScope){
        return {
            //basic profile
            getProfile : function (callback){
                IN.API.Profile("me")
                .fields("firstName", "lastName", "industry", "pictureUrl")
                .result(function (result){
                    $rootScope.$apply(function() {
                        callback(null, result.values[0]);
                    });
                })
                .error(function error(error) {
                        callback(error,null)
                    });
            },

            searchPeople : function(firstName, callback) {
                IN.API.PeopleSearch()
                .fields("firstName", "lastName", "distance")
                .params({"first-name": firstName})
                .result(function (result){
                    $rootScope.$apply(function() {
                        callback(null,result);
                    });
                })
                .error(function error(error) {
                        callback(error,null)
                    });
            },

            searchCompany : function(callback){

                //TODO -- searchCompany method needs to be implemented


            },

            searchJobs : function(callback) {

                //TODO -- searchJobs method needs to be implemented

            },
            //return users connections
            getConnections : function(callback){
                IN.API.Connections("me")
                    .fields("id", "firstName", "lastName", "pictureUrl", "publicProfileUrl")
                    .result(function(result, metadata) {
                        $rootScope.$apply(function() {
                            callback(null,result);
                        });

                    })
                    //in case there is an error
                    .error(function error(e) {
                        callback(e,null)
                    });
            },
            //send message to selected user on linkedin
            sendMessage : function(userId,message,subject, callback){
                var BODY = {
                    "recipients":{
                        "values":[{
                            "person":{
                                "_path":"/people/"+userId
                            }
                        }]
                    },
                    "subject": subject,
                    "body":message
                };
                IN.API.Raw("/people/~/mailbox")
                    .method("POST")
                    .body(JSON.stringify(BODY))
                    .result(function (result){
                        $rootScope.$apply(function() {
                            callback(null, result);
                        });
                    })
                    //in case there is an error
                    .error(function error(e) {
                        callback(e,null)
                    });
            },
            //get skills of logged user
            getSkills : function(callback){
                IN.API.Profile("me")
                    .fields(["skills"])
                    .result(function(result) {
                        $rootScope.$apply(function() {
                            callback(null, result);
                        });
                    })
                    .error(function(err){
                        callback(err, null);
                    });
            },
            //returns true if user is authorized
            isAuthorized : function(){
                return IN.User.isAuthorized();
            },
            logout : function(){
                return IN.User.logout();
            }

        }
    });
