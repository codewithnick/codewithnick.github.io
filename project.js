$(document).ready(function(){
    var webskilltab=document.getElementById("webskilltab");
    var webskill=document.getElementById("webskill");
    var desktopskilltab=document.getElementById("desktopskilltab");
    var desktopskill=document.getElementById("desktopskill");
    var othersskillstab=document.getElementById("othersskilltab");
    var othersskill=document.getElementById("othersskill");
    
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



    var webproject=document.getElementById("webproject");
    var webprojecttab=document.getElementById("webprojecttab");
    var desktopprojecttab=document.getElementById("desktopprojecttab");
    var desktopproject=document.getElementById("desktopproject");
    var othersproject=document.getElementById("othersproject");
    var othersprojecttab=document.getElementById("othersprojecttab");
    webproject.onclick=()=>{
        webprojecttab.classList.remove('hide');
        desktopprojecttab.classList.add('hide');
        othersprojecttab.classList.add('hide');
        webproject.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        desktopproject.style.backgroundColor='transparent';
        othersproject.style.backgroundColor='transparent';
    };
    desktopproject.onclick=()=>{
        desktopprojecttab.classList.remove('hide');
        webprojecttab.classList.add('hide');
        othersprojecttab.classList.add('hide');
        desktopproject.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        webproject.style.backgroundColor='transparent';
        othersproject.style.backgroundColor='transparent';
    };
    othersproject.onclick=()=>{
        othersprojecttab.classList.remove('hide');
        desktopprojecttab.classList.add('hide');
        webprojecttab.classList.add('hide');
        othersproject.style.backgroundColor='rgba(118, 120, 237, 0.4)';
        desktopproject.style.backgroundColor='transparent';
        webproject.style.backgroundColor='transparent';
    };
});
