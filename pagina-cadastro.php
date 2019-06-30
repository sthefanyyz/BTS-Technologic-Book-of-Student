<!DOCTYPE html>
 <html>
 <head>
     <meta charset="UTF-8"/>
     <title>Document</title>
 </head>
 <body>
     <!-- Conteúdo -->
 </body>

	<?php 
 
			$email = $_POST['email'];
			$senha = MD5($_POST['senha']);
			<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
			<script>
			  // Initialize Firebase
			  var config = {
			    apiKey: "AIzaSyD6OSxW8Xxjb7sc8xO5Ixjy_TMRAcf5Lr8",
			    authDomain: "bts-project-0022.firebaseapp.com",
			    databaseURL: "https://bts-project-0022.firebaseio.com",
			    projectId: "bts-project-0022",
			    storageBucket: "",
			    messagingSenderId: "145024386436"
			  };
			  firebase.initializeApp(config);


			</script>
			$logarray = $array['email'];
 
  		if($email == "" || $email == null){
   			 echo"<script language='javascript' type='text/javascript'>alert('O campo E-mail deve ser preenchido');window.location.href='cadastro.html';</script>";
 
    	}else{
	      if($logarray == $login){
 
        echo"<script language='javascript' type='text/javascript'>alert('Esse E-mail já existe');window.location.href='cadastro.html';</script>";
        die();
 
     		 }<!--else{
        		$query = "INSERT INTO usuarios (login,senha) VALUES ('$login','$senha')";
        		$insert = mysql_query($query,$connect);
         
        if($insert){
          echo"<script language='javascript' type='text/javascript'>alert('Usuário cadastrado com sucesso!');window.location.href='login.html'</script>";

       		 }else{
          echo"<script language='javascript' type='text/javascript'>alert('Não foi possível cadastrar esse usuário');window.location.href='cadastro.html'</script>";
        }
      }
    }-->
?>

 </html>
