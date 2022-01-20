function validate() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("message").value;
    let password = document.getElementById("pass").value;
    let age = document.getElementById("age").value;
    let text;
    if(name.length < 5){
        text = "please enter valid name";
        alert(text);
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "please enter valid phone number";
        alert(text);
        return false;
    }
    if(email.indexOf("@") = -1 || email.length < 6){
        text = "please enter valid email";
        alert(text);
        return false;
    }
    if(password.length < 6){
        text = "please enter valid password";
        alert(text);
        return false;
    }
    if(comment.length <= 140){
        text = "please enter more than 140 character";
        alert(text);
        return false;
    }
    if(age < 18 ){
        text = "please enter valid age";
        alert(text);
        return false;
    }
    alert("form submitted successfully");
    return true;
}

