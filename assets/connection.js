var uri      = SERVER;
var ws       = new WebSocket(uri);

var id = 0;
var folder = 0;
var record;
var load_flag = 1;

function send(data, touch){
  if(!touch) touch=0;
  ws.send(JSON.stringify({text: data, touch: touch}));
}

ws.onmessage = function(message) {
  var data = JSON.parse(message.data);
  system_commands(data);
};

ws.onopen = function(message) {
  send('/samples');
};

function loaded(){
  if(load_flag){
    ws.onmessage = function(message) {
      var data = JSON.parse(message.data);
      if(!system_commands(data)) {
        if(!data.touch) {
          var p = $('<p />',{class: 'msg from_chat', text: data.text});
          $('#messages').prepend(p);
          if(!simple_commands(data.text.toLowerCase())) {
            var text = data.text.split('');
            
            
          }
        } else {
          if(data.touch==1){
            
            
          }
        }
      }
      if(!record) $('#messages p:nth-child(100)').remove();
    };

    $('#main').show(500);
    $('#loading').hide(500);
    load_flag = 0;
  }
}

