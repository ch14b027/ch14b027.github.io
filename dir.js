var fs=require('fs');var a;
var str=new RegExp('.'+process.argv[3]);
a=fs.readdir(process.argv[2],function(err,list)
{if(err) throw err;
list.forEach(function (name)
{if(str.test(name))
console.log(name);})});
