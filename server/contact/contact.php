<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// create email body and send it
$to = "mare.sergiu@gmail.com";
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  "Here are the details:\n \nName: $name \n ".
              "Email: $email_address\n Message \n $message";
              "Phone: $phone\n Message \n $phone";
$headers = "From: info@maresergiu.co.uk\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

header("Location: http://www.maresergiu.co.uk/#contact-me"); /* Redirect browser */
exit();
?>