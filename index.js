
anime({
    targets: '#FIRE path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 250,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });
