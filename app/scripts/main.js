const colours = $('.entry');
let current = 0;
let next, offset;

$(colours[current]).addClass('active');

$(window).on('scroll', function() {
  offset = $(window).scrollTop() + $(window).height() * 0.4;
  next = Math.floor(offset / $(window).height());

  if (next !== current) {
    console.log('current: ', current);
    current = next;
    colours.removeClass('active');
    $(colours[current]).addClass('active');
  }
});
