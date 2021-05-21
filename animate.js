$(document).ready(function(){
   (function makeDiv(){
      // vary size for fun
      forcircle();
      forDisc();
      forSquare();
      forcircle();
      forDisc();
      forSquare();
      
  })();
  elements=document.getElementsByClassName("progress");
  
  $(window).scroll(function () {
    if($(window).scrollTop() >300) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.add("animation_load");  
      }
      
    }
    else {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.remove("animation_load");
      }
      
      
    }
  });
});
function forDisc(){
   var divsize = ((Math.random()*50) + 25).toFixed();
      var color = 'lightgrey';
      $newdiv = $('<div id="disc" class="shape"><div/>').css({
          'width':divsize+'px',
          'height':divsize+'px',
      });
  
      // make position sensitive to size and document's width
      var posx = (Math.random() * ($('#block').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('#block').height() - divsize)).toFixed();
      myArray1=['left','up','side']
      var rand = myArray1[(Math.random() * myArray1.length) | 0]
      $newdiv.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px',
          'display':'none',
          'animation': rand+' 3s linear',
          'opacity':Math.random()
      }).appendTo( '#block' ).fadeIn(100).delay(1000).fadeOut(500, function(){
        $(this).remove();
        forDisc(); 
      }); 
}
function forcircle(){
   var divsize = ((Math.random()*50) + 25).toFixed();
      var color = 'lightgrey';
      $newdiv = $('<div id="circle" class="shape"><div/>').css({
          'width':divsize+'px',
          'height':divsize+'px',
          'background-color': color,
      });
  
      // make position sensitive to size and document's width
      var posx = (Math.random() * ($('#block').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('#block').height() - divsize)).toFixed();
      
      myArray1=['left','up','side']
      var rand = myArray1[(Math.random() * myArray1.length) | 0]
      $newdiv.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px',
          'display':'none',
          'animation': rand+' 3s linear',
          'opacity':Math.random()
      }).appendTo( '#block' ).fadeIn(100).delay(1000).fadeOut(500, function(){
        $(this).remove();
        forcircle(); 
      }); 
}
function forSquare(){
   var divsize = ((Math.random()*50) + 25).toFixed();
      var color = 'lightgrey';
      $newdiv = $('<div class="shape"><div/>').css({
          'width':divsize+'px',
          'height':divsize+'px',
          'background-color': color,
      });
  
      // make position sensitive to size and document's width
      var posx = (Math.random() * ($('#block').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('#block').height() - divsize)).toFixed();
      
      myArray1=['left','up','side']
      var rand = myArray1[(Math.random() * myArray1.length) | 0]
      $newdiv.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px',
          'display':'none',
          'animation': rand+' 3s linear',
          'opacity':Math.random()
      }).appendTo( '#block' ).fadeIn(100).delay(1000).fadeOut(500, function(){
        $(this).remove();
        forSquare(); 
      }); 
}












