<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Find the most trendy cloathes across the globe round the clock"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VMart Registration</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="icon" href="/img/Paomedia-Small-N-Flat-Shop.ico"/>
    <link type="text/css" rel="stylesheet" href="/css/header.css"/>
    <link type="text/css" rel="stylesheet" href="/css/forms.css"/>
</head>
<body> 
    <div class="head">
        <img id="logo_head" src="/img/vmart-logo.png"/>
    </div>   

    <div class="form_container">
        <div class="form_head">
            Create Account
        </div>
        <br>
        <form action="register" method="POST">
            <label class="form"><b>Your name</b></label><br>
            <input class="form_ed" type="text" maxlength="50" name="name" id="" required><br><br>
            <label class="form"><b>Email</b></label><br>
            <input class="form_ed" type="email" maxlength="64" name="email" id="" required><br><br>
            <label class="form"><b>Password</b></label><br>
            <input class="form_ed" type="password" maxlength="1024" name="password" id="" placeholder="At least 6 characters" required><br><br>
            <label class="form"><b>Re-enter Password</b></label><br>
            <input class="form_ed" maxlength="1024" type="password" name="repassword" id="" required><br><br>
            <input class="form_btn" type="submit" value="Continue">
        </form><br><br>
        <label>Already have an account? <a class="emphasis_link" href="/temp_display.jsp">Sign in</a></label>
    </div>
    
</body>
</html>