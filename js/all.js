$(document).ready(function(){

  $('#press').click(function(e){
    e.preventDefault();
     if ($('input').val() === '') {
      alert('Add new task please..');
    } else {
      $('.menu').prepend('<li><input type="checkbox" class="check"> ' + $('input').val() + ' <button class="rmvBtn">x</button></li>');
      $('input').val('');
    }
  })

  /* */
  $(document).on('click', '.check', function() {
    if(this.checked){
     $(this).closest('li').addClass('word-ease'); 
   } else {
    $(this).closest('li').removeClass('word-ease'); 
   }
      });

  /*  */
  $(document).on('click','.rmvBtn',function(){
    $(this).closest('li').remove();
  })
   
})
