var planController = angular.module('planApp', []);

planController.controller('planController', function($scope){
    
    $scope.criarPlan = function(){
        
        var planName = angular.element('#planNameInput').val();
    var planDesc = angular.element('#planDescInput').val();
    
    console.log('Nome:' + planName + 'Descricao:' + planDesc);
   
         
    };
    
});
     

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log('Logado');
    }else{
        window.location='login.html';
    }
});
    
