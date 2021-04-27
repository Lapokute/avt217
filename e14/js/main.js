$(document).ready(function() {

  $("h1").hide();
  $("p").hide();

  $('.circ4').click(function() {
    $('.four').toggleClass('ono4');
      $("p#vps").show();
      $("h1#jp").show();
    $('.circ4').toggleClass('hidden');
  });
  $('.circ5').click(function() {
    $('.five').toggleClass('ono5');
      $("p#macross").show();
      $("h1#youarenow").show();
    $('.circ5').toggleClass('hidden');
  });
  $('.circ3').click(function() {
    $('.three').toggleClass('ono3');
      $("p#psy").show();
      $("h1#dont").show();
    $('.circ3').toggleClass('hidden');
  });
  $('.circ2').click(function() {
    $('.two').toggleClass('ono2');
      $("p#yung").show();
      $("h1#wlcome").show();
    $('.circ2').toggleClass('hidden');
  });
  $('.circ1').click(function() {
    $('.one').toggleClass('ono1');
      $("p#sasa").show();
      $("h1#tiger").show();
    $('.circ1').toggleClass('hidden');
  });
  hover();
  swatch();
});

function hover() {
  $('.one').on({"mouseleave": function(){
    $('.ono1').toggleClass('oono1');
    },
  });
  $('.two').on({"mouseleave": function(){
    $('.ono2').toggleClass('oono2');
    },
  });
  $('.three').on({"mouseleave": function(){
    $('.ono3').toggleClass('oono3');
    },
  });
  $('.four').on({"mouseleave": function(){
    $('.ono4').toggleClass('oono4');
    },
  });
  $('.five').on({"mouseleave": function(){
    $('.ono5').toggleClass('oono5');
    },
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
