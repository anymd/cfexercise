//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(document).ready(function(){
  $('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
  }).blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });  
});