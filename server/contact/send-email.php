<?php 
$formData = $_REQUEST["formData"];
$name = $formData["name"];
$emailAddress = $formData["email"];
$phone = $formData["phone"];
$message = $formData["message"];

// create email body and send it
$to = "contact@maresergiu.co.uk";
$emailSubject = "Form submited by: $name";
$emailBody = "You have received a new message. \n\n".
              "Here are the details:\n\n".
              "Name: $name \n\n".
              "Email: $emailAddress \n\n".
              "Phone: $phone \n\n".
              "Message: $message \n\n";
$headers = "From: $to";	

// send the email
(mail($to,$emailSubject,$emailBody,$headers)); 

echo 'ok';

exit();
?>