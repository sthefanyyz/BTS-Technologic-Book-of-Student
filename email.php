<?php

if(isset($_POST['email'] && !empty($_POST['email']))){
    
    
     $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
  $mensagem = addslashes($_POST['msg']);
        $to= "sthefanysarabts@gmail.com";
    $subject = "Contato BTS Web";
    $body = "Nome: ".$nome. "\r\n"
            "Email: ".$email. "\r\n"
            "Mensagem: ".$msg;
    
    $header = "From: sthefanydrawings@gmail.com"."\r\n"
        ."Reply-to:".$email."\r\n"
        ."X=Mailer: PHP/".phpversion();
    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("O Email não pôde ser enviado");
    }
    
}
    
?>