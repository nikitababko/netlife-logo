(function () {
  function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
      position: 'relative',
      display: 'inline-block',
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find('.text-js');
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = '';
    thhis.text('|');
    setTimeout(function () {
      thhis.css('opacity', 1);
      thhis.prev().removeAttr('style');
      thhis.text('');
      for (var i = 0; i < amntOfChars; i++) {
        (function (i, char) {
          setTimeout(function () {
            newString += char;
            thhis.text(newString);
          }, i * typingSpeed);
        })(i + 1, text[i]);
      }
    }, 1500);
  }

  $(document).ready(function () {
    autoType('.type-js', 500);
  });
})();

// SVG show
$('.maze').zPath({
  draw: 'terminusDelayed',
  delay: 20,
  shuffle: false,
  drawTime: 1000,
});
var _draw = '';
var _delay = 30;
var _speed = 1000;
var _shuffle = false;

$('.draw, .delay, .speed, .shuffle').change(function () {
  //$('.maze').zPath({action:'destroy'});
  _draw = $('.draw').val();
  _delay = $('.delay').val();
  _speed = $('.speed').val();
  _shuffle = $('.shuffle').is(':checked');
  updateMaze(_draw, _delay, _speed, _shuffle);
});
function updateMaze(a, b, c, d) {
  console.log(a, b, c, d);
  $('.maze').zPath({ action: 'destroy' });

  var obj = {
    action: 'start',
    draw: '' + a,
    delay: Number(b),
    drawTime: Number(c),
    shuffle: Boolean(d),
  };
  $('.maze').zPath(obj);
}
