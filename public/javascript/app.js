$(document).ready(function(){
    // add prettyprint class to all <pre><code></code></pre> blocks
    var prettify = false;
    $("pre code").parent().each(function() {
      $(this).addClass('prettyprint');
      prettify = true;
    });

    // if code blocks were found, bring in the prettifier ...
    if ( prettify ) {
      $.getScript("/javascript/prettify.js", function() { prettyPrint() });
    }
});


$("h1").fitText(0.8, { minFontSize: '20px', maxFontSize: '70px' });

$(window).on("resize", function () {
    width = parseInt($('#calc').css('width'));
    scale = width/552;
    $(".itch-wrapper iframe").css('transform-origin', '0 0')
                             .css('transform', 'scale('+scale+')');
    $(".itch-wrapper").css('height', (167*scale)+'px');
}).resize();

// gauges
var _gauges = _gauges || [];
(function() {
  var t   = document.createElement('script');
  t.type  = 'text/javascript';
  t.async = true;
  t.id    = 'gauges-tracker';
  t.setAttribute('data-site-id', '511ea2a0108d7b5f2e000057');
  t.src = '//secure.gaug.es/track.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
})();
