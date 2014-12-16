var fs=require('fs');
module.exports=function(dir,ext,callback)
{
var str=new RegExp('.'+ext);
fs.readdir(dir,
function(err,list)
{if(err) return callback(err);
list=list.filter(
function(name)
{return str.test(name);
console.log("\n");});
callback(null,list);
});
}

