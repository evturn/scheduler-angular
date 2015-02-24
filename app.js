angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {

	var ref = new Firebase("https://scheduler-angular.firebaseio.com/days");  
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();

  syncObject.$bindTo($scope, 'days');

 
});