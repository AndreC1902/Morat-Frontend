// Música
$(document).ready(function() {
    var audio = new Audio();
    var currentButton;
    
    $('.play-btn').on('click', function() {
      if (currentButton) {
        currentButton.find('.pause-btn').hide();
        currentButton.find('.play-btn').show();
      }
      currentButton = $(this).parent();
      var src = $(this).data('src');
      audio.src = src;
      audio.play();
      $(this).hide();
      $(this).siblings('.pause-btn').show();
    });
  
    $('.pause-btn').on('click', function() {
      audio.pause();
      $(this).hide();
      $(this).siblings('.play-btn').show();
    });
    
    audio.addEventListener('canplaythrough', function() {
      $('.play-btn').prop('disabled', false);
    });
    // Cambiar el botón a play al finalizar la canción
    $('audio').on('ended', function() {
        playBtn.removeClass('fa-pause').addClass('fa-play');
    });
});