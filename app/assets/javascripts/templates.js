$(document).ready(function(){

  var templates = $('#templates').data('templates')

  $.each(templates, function(index,val) {

    var extra = '';
    if (index > 7) {
      extra = "extra-template"
    } 

    $('#grid').append(
      '<li class=' + extra + '><div class="template">' +
        '<img src="assets/' + val.url + '">' +
        '<div class="name">' + val.name + '</div></div>' +
      '</li>'
    );

  });

  $('.more').click(function(){
    $(this).hide();
    $('.extra-template').css('display','inline-block');
  });

  $("#message_text").on('change keyup paste', function() {
    $('.send').prop('disabled', false);
    $('#message-response').hide();

    if (($(this).val().length == 0) || ($(this).val().length > 140)) {
      $('.send').prop('disabled', true);
    }

    if ($(this).val().length > 140) {
      $('#message_error').text('Your message must be 140 characters or fewer');
    }
    else {
      $('#message_error').text('');
    }

    if ($('.send').prop('disabled') == true) {
      $( ".send" ).addClass('disabled'); 
    } else {
      $( ".send" ).removeClass('disabled'); 
    }

  });

  $('.send-another-message').click(function(){
    $('#message_text').val('')
    $('#success_message').hide();
    $('#new_message').show();
  });

  $('.extra-template').hide();

  $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
            .attr('placeholder','');
  }).blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });  

});



