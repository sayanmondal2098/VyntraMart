function validation()
{
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var repassword=document.getElementById("repassword");

    var flag=true;
    if(name.value=="")
    {
        var err_name=document.getElementById("err_name");
        err_name.style.display='block';
        err_name.innerHTML="Enter your name";
        flag=false;
    }
    if(email.value=="")
    {
        var err_email=document.getElementById("err_email");
        err_email.style.display='block';
        err_email.innerHTML="Enter your email";
        flag=false;
    }
    if(password.value=="")
    {
        var err_password=document.getElementById("err_password");
        err_password.style.display='block';
        err_password.innerHTML="Enter your password";
        flag=false;
    }
    else if(password.value.length<6)
    {
        var err_password=document.getElementById("err_password");
        err_password.style.display='block';
        err_password.innerHTML="At least 6 characters required";
        flag=false;
    }
    if(repassword.value!=password.value)
    {
        var err_repassword=document.getElementById("err_repassword");
        err_repassword.style.display='block';
        err_repassword.innerHTML="Password did not match";
        flag=false;
    }
    return flag;
}

function txt_tracker(ele)
{
    document.getElementById("err_"+ele.id).style.display='none';
}