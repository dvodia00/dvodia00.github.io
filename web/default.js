// Blockquote hover effect
;(function() {
  var quote = $('blockquote')
  quote.find('a').on('mouseover', function() {
    quote.addClass('innerhover')
  }).on('mouseout', function() {
    quote.removeClass('innerhover')
  })
})()

;(function() {
  if (window.pageYOffset && history.pushState) {
    function easeInOutCubic(t) {
      return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
    }
    
    function scroll(hash) {
      var duration = 500, start = window.pageYOffset, end = $(hash).offset().top, now = Date.now(), frame = window.requestAnimationFrame || function(fn) { window.setTimeout(fn, 15) }
      function step() {
        var position, elapsed = Date.now() - now
        if (elapsed > duration)
          position = end
        else
          position = start + (end - start) * easeInOutCubic(elapsed / duration)
        window.scroll(0, position)
        if (elapsed > duration)
          location.replace(hash)
        else
          frame(step)
      }
      step()
    }
  
    $('a[href^="#"]:not([href="#"])').each(function() {
      $(this).on('click', function(e) {
        e.preventDefault()
        if (location.hash !== this.hash)
          window.history.pushState(null, null, this.hash)
        scroll(this.hash)
      })
    })
  }
})()