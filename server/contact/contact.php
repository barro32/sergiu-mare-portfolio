<?php
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// create email body and send it
$to = "contact@maresergiu.co.uk";
$email_subject = "Form submited by: $name";
$email_body = "You have received a new message. \n\n".
              "Here are the details:\n\n".
              "Name: $name \n\n".
              "Email: $email_address \n\n".
              "Phone: $phone \n\n".
              "Message: $message \n\n";
$headers = "From: $to";	

// send the email
(mail($to,$email_subject,$email_body,$headers)); 

// redirect browser
header("Location: https://www.maresergiu.co.uk/#contact-me"); 
exit();
?>