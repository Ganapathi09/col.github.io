function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="chithu" && password=="cs")
    {
        alert("login successfull");
        window.location="success.html";
    }
    else
    {
        alert("login unsuccessfull");

    }
}
    function regis()
    {
        window.location="Register.html";
    }
        
    
