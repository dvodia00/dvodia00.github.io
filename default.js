// Blockquote hover effect
;(function() {
  var quote = $('blockquote')
  quote.find('a').on('mouseover', function() {
    quote.addClass('innerhover')
  }).on('mouseout', function() {
    quote.removeClass('innerhover')
  })
})()