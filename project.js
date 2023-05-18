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
        webskill.classList.add('textcolorpurple');
        desktopskill.classList.remove('textcolorpurple');
        othersskill.classList.remove('textcolorpurple');
    };
    desktopskill.onclick=()=>{
        desktopskilltab.classList.remove('hide');
        webskilltab.classList.add('hide');
        othersskillstab.classList.add('hide');
        webskill.classList.remove('textcolorpurple');
        desktopskill.classList.add('textcolorpurple');
        othersskill.classList.remove('textcolorpurple');
    };
    othersskill.onclick=()=>{
        othersskillstab.classList.remove('hide');
        webskilltab.classList.add('hide');
        desktopskilltab.classList.add('hide');
        othersskill.classList.add('textcolorpurple');
        webskill.classList.remove('textcolorpurple');
        desktopskill.classList.remove('textcolorpurple');
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
        webproject.classList.add('textcolorpurple');
        desktopproject.classList.remove('textcolorpurple');
        othersproject.classList.remove('textcolorpurple');
    };
    desktopproject.onclick=()=>{
        desktopprojecttab.classList.remove('hide');
        webprojecttab.classList.add('hide');
        othersprojecttab.classList.add('hide');
        desktopproject.classList.add('textcolorpurple');
        webproject.classList.remove('textcolorpurple');
        othersproject.classList.remove('textcolorpurple');
    };
    othersproject.onclick=()=>{
        othersprojecttab.classList.remove('hide');
        desktopprojecttab.classList.add('hide');
        webprojecttab.classList.add('hide');
        othersproject.classList.add('textcolorpurple');
        desktopproject.classList.remove('textcolorpurple');
        webproject.classList.remove('textcolorpurple');
    };
});
