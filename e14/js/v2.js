$(document).ready(function() {
  $('.center').toggleClass('hidden');

  $('.one p').click(function() {
      $('.one').toggleClass('ono1');
      $('.one').removeClass('oono1');
      $("p#sasa").hide();
      $("h1#tiger").hide();
      $('.circ1').toggleClass('hidden');
    });
  $('.two p').click(function() {
      $('.two').toggleClass('ono2');
      $('.two').removeClass('oono2');
      $("p#yung").hide();
      $("h1#wlcome").hide();
      $('.circ2').toggleClass('hidden');
    });
  $('.three p').click(function() {
      $('.three').toggleClass('ono3');
      $('.three').removeClass('oono3');
      $("p#psy").hide();
      $("h1#dont").hide();
      $('.circ3').toggleClass('hidden');
    });
  $('.four p').click(function() {
      $('.four').toggleClass('ono4');
      $('.four').removeClass('oono4');
      $("p#vps").hide();
      $("h1#jp").hide();
      $('.circ4').toggleClass('hidden');
    });
  $('.five p').click(function() {
      $('.five').toggleClass('ono5');
      $('.five').removeClass('oono5');
      $("p#macross").hide();
      $("h1#youarenow").hide();
      $('.circ5').toggleClass('hidden');
  });
  hover();
  swatch();
});

function hover() {
  $('.one').mouseleave(function(){
    $('.ono1').toggleClass('oono1');
  });
  $('.two').mouseleave(function(){
    $('.ono2').toggleClass('oono2');
  });
  $('.three').mouseleave(function(){
    $('.ono3').toggleClass('oono3');
  });
  $('.four').mouseleave(function(){
    $('.ono4').toggleClass('oono4');
  });
  $('.five').mouseleave(function(){
    $('.ono5').toggleClass('oono5');
  });
}
function swatch() {
  $("h1").dblclick(function(){
    $('songs').toggleClass('smolsongs');
    $('.one').toggleClass('nono1');
    $("p#vps").hide();
    $("h1#jp").hide();
    $('.two').toggleClass('nono2');
    $("p#macross").hide();
    $("h1#youarenow").hide();
    $('.three').toggleClass('nono3');
    $("p#sasa").hide();
    $("h1#tiger").hide();
    $('.four').toggleClass('nono4');
    $("p#psy").hide();
    $("h1#dont").hide();
    $('.five').toggleClass('nono5');
    $("p#yung").hide();
    $("h1#wlcome").hide();
  });
}
