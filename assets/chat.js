function chat(event) {
  if(event.keyCode===13){
    var text = $('#chat').val();
    $('#chat').val('');
    if(text != '') send(text,0);
  }
};

$(document).on('click touchend', '.msg.from_chat', function(){
  var text = $(this).text();
  send(text, 1);
});

$(document).on('click touchend', '.msg.from_loop', function(){
  var text = $(this).text();
  send(text, 2);
});

function pista(event, pasta) {
  if(event.keyCode===13){
    
    var divmsg = '#chat' + pasta;  
      
    var text = $(divmsg).val();
    $(divmsg).val('');
    if(text != '') send(text,0);
  }
};
