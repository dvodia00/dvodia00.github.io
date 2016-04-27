;(function() {
  var size, width = 1024, step = 128, out = '', style = document.createElement('style')
  for (size = 16; size < 32; size++) {
    out += '@media (min-width: ' + width +'px) and (min-height: ' + (width * 0.5) +'px) {'
    out += ' body { font-size: ' + size + 'px; }'
    out += ' } '
    width += step
  }
  style.innerHTML = out
  document.getElementsByTagName('head')[0].appendChild(style)
})()