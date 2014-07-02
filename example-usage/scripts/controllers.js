myApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $http, linkedinService) {


    $scope.connections = [];

    $scope.getUserProfile = function () {

        linkedinService.getProfile(function(err, result){
            if(err){
                console.log('error occured');
            }else{
                console.log('result', result);
                $rootScope.userprofile = result;
                $location.path("/main");
            }
        });
    };

    //logout and go to login screen
	$scope.logoutLinkedIn = function() {
		linkedinService.logout();

        delete $rootScope.userprofile;

		$rootScope.loggedUser = false;

        $location.path("/login");
	};

    $scope.getConnections = function(){
        linkedinService.getConnections(function(error, result){
            if(error){
                console.log('error',error);
            }else{
                console.log(result);
                $scope.connections = result;
            }

        });
    };

    $scope.sendMessage = function(userID){

        var message = 'this a sample message';
        var subject = 'hi there';
        linkedinService.sendMessage(userID, message, subject, function(error, result){

            if(error){
                console.log('error', error)
            }
            else{
                console.log('message sent successfully', result);
            }

        });

    }


});