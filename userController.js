mainController.controller('userController', function($scope){
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      $('#userNameInput').val(user.displayName);
      $('#userEmailInput').val(user.email);
      
      if(user.photoURL === null){
          $scope.userImgSource = 'user.png';
      }else{
          $scope.userImgSource = user.photoURL;
      }
      $scope.$apply();

      
      
  } else {
    // No user is signed in.
      window.location = 'Entrar.html';
  }
});
     
    uploadProfileImg = function(userId,nameUser,emailUser){
        var user = firebase.auth().currentUser;
        var file = ($('#arquivo'))[0].files[0];
        if(!file){   
            console.log('Não há arquivos.');
        }else{
             var storageRef = storage.ref('/userProfileImgs/' + file.name);
            var uploadTask = storageRef.put(file);
            uploadTask.on('state_changed', function(snapshot){
            }, function(error){
                console.log(error);
            }, function(){
                console.log('Arquivo Registrado no Firebase');
                 var downloadURL = uploadTask.snapshot.downloadURL;
                console.log(downloadURL);

                    user.updateProfile({
                        photoURL: downloadURL
                    });
                alert("Imagem salva com sucesso.");
                    window.location.reload(true);
            });
        }
       
    };
    
    //img
    
    function enviar_imagem(input){
                    if(input.files && input.files[0]){
                        var reader = new FileReader();
                        reader.onload = function(e){
                            $('#imgPerfil').attr('src', e.target.result);
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $("#arquivo").change(function(){
                    enviar_imagem(this);
                })
    

    
    
    
    $scope.updateUser = function(){
        var nameUser = angular.element('#userNameInput').val();
   var emailUser = angular.element('#userEmailInput').val();
        var passwordUser= angular.element('#userPasswordInput').val();
        console.log(nameUser);
        var user = firebase.auth().currentUser;
        
        user.updateProfile({
            displayName: nameUser,
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
            uploadProfileImg();
            user.updatePassword(newPassword).then(function(){
                user.updatePassword(newPassword).then(function() {

            })
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
        }).catch(function(error) {
            // An error happened.
        });
        
    }
    
    $scope.updateEmail = function(){
        var nameUser = angular.element('#userNameInput').val();
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: nameUser,
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
  // Update successful.
        }).catch(function(error) {
            // An error happened.
        });
        
    }
    
    
    $scope.userLogout = function(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            window.location = 'Entrar.html';
        }).catch(function(error) {
  // An error happened.
        });
    }
});