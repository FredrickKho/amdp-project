function daftar(){
    var nama=document.getElementsById("name").value;
    var email=document.getElementsById("email").value;
    if (nama==null || nama==""){
        alert("Nama tidak boleh kosong");
    }else if(email==null || email==""){
        alert("Email tidak boleh kosong");
    }
}

document.getElementById("contact").onclick=function(){
    location.href="/Contact/contact.html";
};
document.getElementById("family").onclick=function(){
    location.href="/Product/family.html";
};


