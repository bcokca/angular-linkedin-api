/*
 *  Angular Linkedin API module
 *
 *  Version: 0.0.1
 *
 *  Author: Burhan COKCA, burhancokca.com
 *
 *  Angular linkedin module is an interface to linkedin javascript apis for angular
 *
 *

 This code is released under the MIT Licence - http://opensource.org/licenses/MIT

 Copyright (c) 2013 Burhan COKCA

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */






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
                        callback(null, result);
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
