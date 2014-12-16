var a=require('./a.js');
var dir=process.argv[2];
var ext=process.argv[3];
a(dir,ext,function(err,list){
if(err)
return console.error("Error !:",err);
list.forEach(function(name)
{ console.log(name);});
});
