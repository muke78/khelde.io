<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$proyect = $_POST['proyect'];
$message = $_POST['message'];

$email_from = 'erickm.gonzalez.rivera@gmail.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n" .
    "User Email: $visitor_email.\n" .
    "Proyect: $proyect.\n" .
    "User Message: $message.\n";
$to = $visitor_email;
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to . $email_subject, $email_body, $headers);
