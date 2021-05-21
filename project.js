$(document).ready(function(){
    var webskilltab=document.getElementById("webskilltab");
    var webskill=document.getElementById("webskill");
    var desktopskilltab=document.getElementById("desktopskilltab");
    var desktopskill=document.getElementById("desktopskill");
    var othersskillstab=document.getElementById("othersskilltab");
    var othersskill=document.getElementById("othersskill");
    console.log("working");
    webskill.onclick=()=>{
        webskilltab.classList.remove('hide');
        desktopskilltab.classList.add('hide');
        othersskillstab.classList.add('hide');
        webskill.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        desktopskill.style.backgroundColor='transparent';
        othersskill.style.backgroundColor='transparent';
    };
    desktopskill.onclick=()=>{
        desktopskilltab.classList.remove('hide');
        webskilltab.classList.add('hide');
        othersskillstab.classList.add('hide');
        webskill.style.backgroundColor='transparent';
        desktopskill.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        othersskill.style.backgroundColor='transparent';
    };
    othersskill.onclick=()=>{
        othersskillstab.classList.remove('hide');
        webskilltab.classList.add('hide');
        desktopskilltab.classList.add('hide');
        othersskill.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        webskill.style.backgroundColor='transparent';
        desktopskill.style.backgroundColor='transparent';
    };
});
