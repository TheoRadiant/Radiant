<?php


$name = $_POST["firstname"];
$lname = $_POST["lastname"];
$email ='theo200045@gmail.com';
$emailfrom = $_POST["email"];
$country = $_POST['country'];

$message = $_POST["Message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.sendgrid.net";
$mail->SMTPSecure = "ssl";
$mail->Port = 465;

$mail->Username = "apikey";
$mail->Password = "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";

$mail->setFrom($email, $name,$lname);
$mail->addAddress("theo200045@gmail.com");

$mail->Subject = 'New Form Submission';

$mail->Body = "Name: " . $name . "\n"
    . "Last Name: " . $lname . "\n"
    . "Email: " . $emailfrom . "\n"
    . "Country: " . $country . "\n"
    . "Message: " . $message;
    
 
$mail->send();









    ?>