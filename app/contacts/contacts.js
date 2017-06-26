'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase('https://mycontacts-6dead.firebaseio.com/contacts');
  $scope.contacts = $FirebaseArray(ref);

  $scope.addFormShow = false;

  $scope.showAddForm = function(){
    $scope.addFormShow = true;
  }
}]);
