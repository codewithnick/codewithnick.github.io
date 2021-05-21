window.onload=()=>{
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
    };
    desktopskill.onclick=()=>{
        desktopskilltab.classList.remove('hide');
        webskilltab.classList.add('hide');
        othersskillstab.classList.add('hide');
    };
    othersskill.onclick=()=>{
        othersskillstab.classList.remove('hide');
        webskilltab.classList.add('hide');
        desktopskilltab.classList.add('hide');
    };
};
