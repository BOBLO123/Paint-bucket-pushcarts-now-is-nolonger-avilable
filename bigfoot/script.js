function loadBigFoot() {
  document.getElementById('bigFoot').src = 'bigfoot.png'
}

function moveBigFoot() {
  alert('Congratulations, you found Bigfoot!')
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 893
  var y = Math.random() * 572

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
