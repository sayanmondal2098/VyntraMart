<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <form action="reg_user" method="POST">
        <input type="text" name="name" id="" placeholder="Your name">
        <input type="email" name="email" id="" placeholder="Enter Email">
        <input type="password" name="password" id="" placeholder="Enter Password">
        <input type="password" name="repassword" id="" placeholder="Enter Same Password">
        <input type="submit" value="submit">
    </form>
</body>
</html>