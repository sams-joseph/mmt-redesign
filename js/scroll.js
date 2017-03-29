(($) => {
  const $window = $(window);
  const $hero = $('.container');

  $window.scroll(function() {
      const scrollTop = $window.scrollTop();
      $hero.css({
        'transform': 'translateY(-' + scrollTop / 6 + 'px)'
      });
  });
})(jQuery);
