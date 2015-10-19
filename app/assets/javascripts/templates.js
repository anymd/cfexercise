$(document).ready(function(){

  var data = $('#templates').data('templates')
  var initial_count = 8
  
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

  $('.more').click(function(){
    $(this).hide();
    $('.extra-template').show();
  });

  $("#message_text").on('change keyup paste', function() {
    reset(); length = $(this).val().length;

    if (length == 0 || length > 140) { buttonStatus(true); }
    if (length > 140) { messageError('Your message must be 140 characters or fewer'); }

  });

  function reset() {
    buttonStatus(false);
    messageError('');
    $('#message-response').hide();
  }

  function buttonStatus(state) {
    $('.send').prop('disabled', state);
    if (state) {
      $(".send").addClass('disabled');
    } else {
      $(".send").removeClass('disabled');
    }
  }

  function messageError(str) {
    $('#message_error').text(str)
  }

});



