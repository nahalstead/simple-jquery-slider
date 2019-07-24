window.onload=function(){
      
// find elements
var main = function() {
  $('.next').add('.slide').click(function() {
    var currentSlide = $('.active');
    var nextSlide = currentSlide.next();
    
    if (nextSlide.length == 0) {
    nextSlide = $('.slide').first();
    }
    
    currentSlide.fadeOut(100).removeClass('active');
    nextSlide.fadeIn(100).addClass('active');
  });
  $('.prev').click(function() {
    var currentSlide = $('.active');
    var prevSlide = currentSlide.prev();
    
    if (prevSlide.length == 0) {
    prevSlide = $('.slide').last();
    }
    
    currentSlide.fadeOut(100).removeClass('active');
    prevSlide.fadeIn(100).addClass('active');
  });
};  
$(document).ready(main);

function getWidth(){
  var e = null;
  e = document.getElementsByClassName("image");
  var imageWidth = $('.image').get(0).naturalWidth;
  var imageHeight = $('.image').get(0).naturalHeight;
  var t = $('.image').get(0).naturalWidth;
  var n = $('.image').get(0).naturalHeight;
  var i = window.innerWidth / n;
  var r = (window.innerHeight - 91) / t;  
  return r < i ? r / i * 100+"%": "100";
  }

$(document).ready(function() {
  $('.image').css("max-width",getWidth()
  )
});
$(window).resize(function(){$(".image").css("max-width",getWidth())});


}
