var loginController = angular.module('loginApp', []);
loginController.controller('loginController', function ($scope){
    
    $scope.loginUser = function(){
         var user = $scope.loginUserInput;
         var email = $scope.loginEmailInput;
    var senha = $scope.loginPasswordInput;
                                                        
    firebase.auth().signInWithEmailAndPassword(email, senha).then(function(res){
        
        window.location = 'mainUser.html';
        
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
        if(errorCode === 'auth/user-not-found'){
            $scope.errorMsg = 'Usuário não encontrado.';
            $scope.$apply();
        }else if(errorCode === 'auth/wrong-password'){
            $scope.errorMsg = 'Senha incorreta.';
            $scope.$apply();
        }else if(errorCode === 'auth/user-disabled'){
            $scope.errorMsg = 'O usuário foi desabilitado pelo admnistrador.';
            $scope.$apply();
        }
        console.log(error);
        
}); 
        };
});

firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        alert("Entrando...");
        window.location = 'mainUser.html';
    }else{
        
    }
})