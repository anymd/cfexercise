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

  $('.see-more').click(function(){
    $(this).hide();
    $('.extra-template').css('display','inline-block');
  });

  $("#message_text").on('change keyup paste', function() {
    $('.send-button').prop('disabled', false);

    if (($(this).val().length == 0) || ($(this).val().length > 140)) {
      $('.send-button').prop('disabled', true);
    }

    if ($(this).val().length > 140) {
      $('#error').show();
    }
    else {
      $('#error').hide();
    }

  });

  $('.send-another-message').click(function(){
    $('#message_text').val('')
    $('#success_message').hide();
    $('#new_message').show();
  });

  $('.extra-template').hide();

});



