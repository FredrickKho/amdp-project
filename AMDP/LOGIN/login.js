function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email===null || email===""){
        alert("Email tidak boleh kosong!");
    }else if(password===null || password===""){
        alert("Password tidak boleh kosong!");
    }else if(email.indexOf("@")===-1){
        alert("Invalid Email");
    }else if(email.indexOf(".com")===-1){
        alert("Invalid Email");
    }else{
        alert("Berhasil Login!");
        location.reload();
    }
}
