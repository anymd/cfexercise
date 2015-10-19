$(document).ready(function(){

  function reset() {
    disableElement(false,'.send');
    messageError('');
    $('#message-response').hide();
  }

  function messageError(str) {
    $('#message_error').text(str)
  }

  function disableElement(state,selector) {
    $(selector).prop('disabled', state);
    if (state) {
      $(selector).addClass('disabled');
    } else {
      $(selector).removeClass('disabled');
    }
  }

  // grab json
  var data = $('#templates').data('templates')
  var initial_count = 8
  
  // render templates
  $.each(data, function(index,val) {
    var extra = '';
    if (index > initial_count - 1) { extra = "extra-template" }

    var image = '<img src="images/' + val.image + '">'
    var name = '<div class="name">' + val.name + '</div>'

    $('#grid').append(
      '<li class=' + extra + '><div class="template">' + image + name + '</div></li>'
    );
  });
  $('.extra-template').hide();

  // show more templates
  $('.more').click(function(){
    $(this).hide();
    $('.extra-template').show();
  });

  // handle button state
  $("#message_text").on('change keyup paste', function() {
    reset(); length = $(this).val().length;

    if (length == 0 || length > 140) { disableElement(true,'.send'); }
    if (length > 140) { messageError('Your message must be 140 characters or fewer'); }

  });

  // placeholder show and hide
  $('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
  }).blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });    

});



