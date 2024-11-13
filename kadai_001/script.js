$(function(){
  // ボタンアニメーション
  $('.button-animation').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5
    }, 300);
  });
  $('.button-animation').on('mouseout', function () {
    $(this).animate({
      opacity: 1
    }, 300);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    swipe: false,
  });

  // スクロール
  $(window).scroll(function(){

    let scrollvalue = $(document).scrollTop();

    if (scrollvalue >= 100) {
     $('#back-btn').css('display', 'inline');
    } else {
     $('#back-btn').css('display', 'none');
    }
  });

  // ページのスクロールをなめらかにする
  $(function(){
    // ページ内リンクがクリックされたとき
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();
      let target = $($(this).attr('href'));
      if(target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
    // トップに戻るボタンがクリックされたとき
    $('#back-btn').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 10
      }, 1000);
    });
  });

  // セクションをフェードインさせる
  $(function() {
    $(window).scroll(function(){
      $('.fade-section').each(function(){
        let sectionTop = $(this).offset().top;
        let scrollPos = $(window).scrollTop();
        let windowHeight = $(window).height();

        if(scrollPos + windowHeight > sectionTop + 200) {
          $(this).addClass('fade-in');
        }
      });
    });
    $(window).trigger('scroll');
  })

  // モーダルの表示
  $(function(){
    // サムネイル画像がクリックされたとき
    $('.thumbnail').on('click', function(){
      let imgSrc = $(this).attr('src');
      $('#modal-img').attr('src', imgSrc);
      $('#modal').fadeIn();
    });
    // 閉じるボタンがクリックされたとき
    $('#close').click(function(){
      $('#modal').fadeOut();
    });
  });
});