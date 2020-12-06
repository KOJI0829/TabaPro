$(function(){    
  var mvHeight = $('.mv').outerHeight();  
  // scroll
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < mvHeight -50){
      $('.nav').removeClass('black');
      $('.site-logo-black').hide();
      $('.site-logo').show();
    }else {
      $('.nav').addClass('black');
      $('.site-logo').hide();
      $('.site-logo-black').show();
    } 
  });

  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  
});