window.onload=function animate(){

   setanim();
   setInterval(function() {for ( i = 1; i <=40; i++) {document.getElementById(i).style.opacity=Math.random();}}, 1000)
   /*document.getElementById("graph").addEventListener("onload",()=>{
      const elemen=document.getElementsByClassName("progress")
      this.console.log(elemen)
      for (let i = 0; i <elemen.length; i++) {
         this.console.log(elemen[i])
         elemen[i].style.animation="ease barfill 1 ";   
      }
      
   })
   */
}

function setanim(){
    evencounter="bottom";
    oddcounter="right"
    var myArray1 = ['bottom', 'up','bottomright','upright','upleft','bottomleft']; 
   for ( i = 1; i <=40; i++) {
                var rand = myArray1[(Math.random() * myArray1.length) | 0]
            document.getElementById(i).style.animation=rand+" 2s ease-in-out infinite";
            rand=Math.random()*8+1;
            document.getElementById(i).style.animationDelay=rand+"s";
            
   }
   
}
