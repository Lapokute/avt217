$(document).ready(function() {
  $('.help2').toggleClass('hidden');
  $('.help3').toggleClass('hidden');
  $('.help4').toggleClass('hidden');
  $('.help5').toggleClass('hidden');
  $('.help6').toggleClass('hidden');
  $('.help7').toggleClass('hidden');
  $('.help8').toggleClass('hidden');
  // $('.boxbox').hover(function() {
  //   $("img").toggleClass('hidden');
  //   $('.bob').toggleClass('hidden');
  // });
carousel();
});
function carousel() {}
    var i = 1;
    $(window).click(function() {
      // console.log(i);
      if (i == 1) {
        $('.help').addClass('hidden');
        $('.help2').removeClass('hidden');
        i = i + 1;
        // console.log('first click');
      } else if (i == 2 ) {
        $('.help2').addClass('hidden');
        $('.help3').removeClass('hidden');
        i = i + 1;
        // console.log('second click');
      } else if (i == 3 ) {
        $('.help3').addClass('hidden');
        $('.help4').removeClass('hidden');
        i = i + 1;
      } else if (i == 4 ) {
        $('.help4').addClass('hidden');
        $('.help5').removeClass('hidden');
        i = i + 1;
      } else if (i == 5 ) {
        $('.help5').addClass('hidden');
        $('.help6').removeClass('hidden');
        i = i + 1;
      } else if (i == 6 ) {
        $('.help6').addClass('hidden');
        $('.help7').removeClass('hidden');
        i = i + 1;
      } else if (i == 7 ) {
        $('.help7').addClass('hidden');
        $('.help8').removeClass('hidden');
        i = i + 1;
      } else {
        $('.help8').addClass('hidden');
        $('.help').removeClass('hidden');
        i = 1;
      }
    });
