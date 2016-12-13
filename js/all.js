$(document).ready(function(){
  /* keydown lock enter issue */
   $(document).keypress(function(e) {
    if(e.which === 13){
     $('.menu-ondo').hide();
    }
});

  /* click"確認"button 新增input內容 */
  $('#press').click(function(e){
    e.preventDefault();
    $('.menu > span').hide();
    var inputText = $('input[name=text-todo]').val();
    if(inputText === ''){
      alert('不得為空白，請重新輸入')
    } else {
      $('.menu, .menu-ondo').append('<li>'+ inputText + '</li>');
      $('.menu-ondo').hide();
    }
  })

  /* 刪除事件並將已刪除內容於已完成顯示 */
  $(this).on('click', '.menu li', function(event) {
    $(this).hide();
    $('.menu-ondo').show();
  });
  
   $(this).on('click','.menu-ondo li',function(){
   $(this).hide();
 });
})
