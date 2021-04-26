$(document).ready(function() {

  $("h1").hide();
  $("p").hide();

  $('.four').click(function() {
    $('.four').toggleClass('ono4');
      $("p").show();
      $("h1").show();
    $('.circ4').toggleClass('hidden');
  });
  $('.five').click(function() {
    $('.five').toggleClass('ono5');
      $("p").show();
      $("h1").show();
    $('.circ5').toggleClass('hidden');
  });
  $('.three').click(function() {
    $('.three').toggleClass('ono3');
      $("p").show();
      $("h1").show();
    $('.circ3').toggleClass('hidden');
  });
  $('.two').click(function() {
    $('.two').toggleClass('ono2');
      $("p").show();
      $("h1").show();
    $('.circ2').toggleClass('hidden');
  });
  $('.one').click(function() {
    $('.one').toggleClass('ono1');
      $("p").show();
      $("h1").show();
    $('.circ1').toggleClass('hidden');
  });
});

    // run function on resize of the window


//     function onmouseover() {
//       $('.four').toggleClass('.circ4')
//     }
//     // run function on scroll of the window
//     $(window).scroll(function() {
//       scroll();
//     });
//
// });
//
// $('.boxbox').mouseleave(function() {
//   $("p").show();
//   $("h1").show();
// });
//
//
function onmouseover() {
  $("p").show();
  $("h1").show();
}
//
// function scroll() {
//   $('.square').removeClass('purple');
// }
