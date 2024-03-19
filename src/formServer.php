<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
   
    $to = "pshubomi@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array("message" => "Form submitted successfully"));
    } else {
        echo json_encode(array("error" => "Failed to submit form"));
    }
} else {

    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
}
?>
