angular.module("MyApp", ["firebase"])
	.controller("MyController", function($scope, $firebase){
		var issuesRef = new Firebase("https://lizardsarecool.firebaseio.com");

		$scope.issues = $firebase(issuesRef);

		$scope.addOne = function(){
			issuesRef.push( {title:$scope.title, body:$scope.body} );







			
		};
	});