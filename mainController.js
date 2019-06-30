var mainController = angular.module('mainApp',[]);

mainController.controller('mainController',function($scope){
    
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      console.log('Usuario Logado');
  } else {
    // No user is signed in.
      window.location = 'Entrar.html';
  }
});