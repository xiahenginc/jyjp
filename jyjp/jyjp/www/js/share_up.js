function changeDown(nid,dom){
//初始化trim()
if(!String.prototype.trim){
String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,'');
}
}
$.ajax({
url: "share_down.jsp",
type: "post",
cache: true,
async:false,
data:{"nid":nid},
error: function (data){
alert("服务器正忙，请稍后重试！");
},
success: function(data){
if(data.trim()=="ok"){
$("#upimg"+nid).attr("src","images/good.png");
$("#up"+nid).attr("onClick","changeType("+nid+",this)");
}else{
alert("服务器正忙，请稍后再试!");
}
}
});	

$.ajax({
url: "share_cou.jsp",
type: "post",
cache: true,
async:false,
data:{"nid":nid},
success: function(data){
$("#num"+nid).html(data);
}
});	
}





function changeType(nid,dom){
//初始化trim()
if(!String.prototype.trim){
String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,'');
}
}
$.ajax({
url: "share_up.jsp",
type: "post",
cache: true,
async:false,
data:{"nid":nid},
error: function (data){
alert("服务器正忙，请稍后重试！");
},
success: function(data){
if(data.trim()=="ok"){
$("#upimg"+nid).attr("src","images/good_1.png");
$("#up"+nid).attr("onClick","changeDown("+nid+",this)");
}else{
alert("服务器正忙，请稍后再试!");
}
}
});	

$.ajax({
url: "share_cou.jsp",
type: "post",
cache: true,
async:false,
data:{"nid":nid},
success: function(data){
$("#num"+nid).html(data);
}
});	
}