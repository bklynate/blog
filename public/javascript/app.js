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

    changeStyles();
});

$(window).resize(function() {
  changeStyles();
});

function changeStyles(){
  if($(window).width() < 720) {
    $('article').css('float', 'none');
    $('article').css('width', 'auto');
    $('article').css('padding', '1em');
    $('aside').css('float', 'none');
    $('aside').css('width', 'auto');
    $('aside').css('padding', '1em');   
  } else {
    $('article').css('float', 'right');
    $('article').css('width', '65%');
    $('article').css('padding', '0 1em 0 0');
    $('aside').css('float', 'left');
    $('aside').css('width', '30%');
    $('aside').css('padding', '0 0 0 1em');      
  }
}
