var registerController = angular.module('registerApp', []);
registerController.controller('registerController', function ($scope) {
    $scope.registradorUser = function () {
      
        var usuario = $scope.usuarioRegistrador;
        var email = $scope.emailRegistrador;
        var senha = $scope.senhaRegistrador;
        
      console.log(usuario, email,senha);


	  firebase.auth().createUserWithEmailAndPassword(email, senha).then(function (res) {
	  	// registro correto
        alert("Cadastro efetuado com sucesso");
	  	window.location='Entrar.html';

	  }).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
          console.log(error);
          
          if(errorCode === 'auth/weak-password'){
              $scope.errorMsg = 'Sua senha deve possuir 6 ou mais caracteres.';
          $scope.$apply();
          } else if(errorCode === 'auth/email-already-in-use'){
              $scope.errorMsg = 'Este email já está em uso.';
          $scope.$apply();
          }
         
          
	});
    };
});
