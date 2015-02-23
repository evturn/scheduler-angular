angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {

	var ref = new Firebase("https://scheduler-angular.firebaseio.com/");  
  var fb = $firebase(ref);

});