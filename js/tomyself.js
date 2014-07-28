$(function() {
  var pathname = window.location.pathname;
  var reg      = /^\/\d{2,5}\/\d{2,3}\/\d{2,3}/;
  var body     = $('body');
  var head = $('.post-content > h3');
  if (body.height() >= document.body.scrollHeight) {
    $('.site-footer').css({
      'position': 'fixed',
      'left': 0,
      'right': 0,
      'bottom': 0
    });
    $('.site-main').css('marginBottom', '50px');
  }
  if (reg.test(pathname) && head && head.length != 0) {
    var ol   = document.createElement('ol');
    ol.className = 'post-anchor';
    var li   = '';
    head.each(function(index, ele) {
      var node = '<li><a href="#' + $(ele).attr('id') + '">' + (index + 1) + '. ' +  $(ele).text() + '</a></li>';
      li += node;
    });
    var ol = $(ol).append(li);
    $('.site-main').append(ol);
  }
});