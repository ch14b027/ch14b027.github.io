var net=require('net');
var d=new Date();
var server=net.createServer(function(socket)
{ var y=d.getFullYear(),
m=d.getMonth()+1,
dt=d.getDate(),
h=d.getHours(),
mi=d.getMinutes();
var data=y+'-'+m+'-'+dt+' '+'0'+h+':'+mi;
socket.write(data,'utf8');
socket.write('\n');
socket.end();});
server.listen(process.argv[2]);
