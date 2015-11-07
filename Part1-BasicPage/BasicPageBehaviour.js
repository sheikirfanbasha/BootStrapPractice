var app = angular.module("myApp", []);
app.controller("myCtrl", handler);

function handler($scope){
	$scope.isSignInFormVisible = false;
	$scope.isSignUnFormVisible = true;
	$scope.toggleSignInForm = function(){
		$scope.isSignInFormVisible = !$scope.isSignInFormVisible;
		if($scope.isSignInFormVisible){
			$scope.isSignUpFormVisible = false;
		}
	}
	$scope.toggleSignUpForm = function(){
		$scope.isSignUpFormVisible = !$scope.isSignUpFormVisible;
		if($scope.isSignUpFormVisible){
			$scope.isSignInFormVisible = false;
		}
	}
}