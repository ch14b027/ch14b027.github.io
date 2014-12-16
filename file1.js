var fs=require('fs');var res;
var str=fs.readFile(process.argv[2],'utf8',function(err,data)
{if(err) throw err;
res=data.split("\n").length-1;
console.log(res);});


