/* suning.com 1428676300387 */!function(t,e){function i(t){return"[object Object]"===Object.prototype.toString.call(t)}function n(t){return i(t)?t=Object.create(t):void 0}var s=window,o=e;t.require=function(t,e){return arguments.length>1?SUI.Use(t,e):o[t]},t.load={mod:{},opts:{baseUrl:"script/"},config:function(t){i(t)&&(this.opts=t)},define:function(t,e){this.mod[t]="function"==typeof e?e():e},require:function(t,e){var i,n=[],s=this;if(t.constructor===Array?t.forEach(function(t){n.push(t)}):t.constructor===String&&(n=t=[t]),!s.mod[t])for(var o=0,a=n.length;a>o;o++){var r=n[o].split("/");r=r[r.length-1];var c=i;c=document.createElement("script"),c.src=s.opts.baseUrl+n[o]+".js",c.type="text/javascript",document.querySelector("head").appendChild(c),c.onload=function(){e&&e.call(e,s.mod[r])}}}},t.exports=function(e,i){for(var n=e.split("."),s=t.pub={},o=0,a=n.length;a>o;o++)"undefined"==typeof s[n[o]]&&(s[n[o]]={}),o==a-1&&(s[n[o]]=i),s=s[n[o]]},t.Use=function(e,i){return t.UI[e](i)},t.UI={},t=n(t),s.SUI=t}(window.SUI=window.SUI||{},{position:{getHeight:function(){var t=document.documentElement.offsetHeight||document.body.offsetHeight;return window.innerHeight>t&&(t=window.innerHeight),t},scrollTop:function(){return document.documentElement.scrollTop||document.body.scrollTop}},checkDevice:{isMobile:function(){return navigator.userAgent.match(/Win/i)||navigator.userAgent.match(/MacIntel/i)||navigator.userAgent.match(/Linux/i)?!1:!0}},remove:function(){return this.parentNode.removeChild(this)},tmpl2:function(t,e){var i="$"+ +new Date,n=function(t){var e,s=[i],o=[[]];for(e in t)s.push(e),o.push(t[e]);return new Function(s,n.$).apply(t,o).join("")};return n.$=n.$||i+".push('"+t.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join(i+".push('").split("\r").join("\\'")+"');return "+i,e?n(e):n},main:{selectBind:function(){$(".sn-show-optiton").each(function(){var t=$(this),e=t.next(".sn-show-option-box");t.click(function(){t.find(".show-option-view").toggleClass("showview"),e.toggle()}),e.find(".block").on("click",function(){$(this).addClass("sn-btn-c").removeClass("sn-btn-b").siblings().removeClass("sn-btn-c").addClass("sn-btn-b"),e.hide(),t.find(".show-option-view").removeClass("showview")})}),document.querySelectorAll(".sn-select")&&Array.prototype.slice.call(document.querySelectorAll(".sn-select")).forEach(function(t){t.querySelector("select")&&t.querySelector("select").addEventListener("change",function(){var e=this.selectedIndex;t.querySelector(".select-view").innerHTML=this.options[e].text||this.options[e].value},!1)})}}}),function(t){function e(){i&&clearTimeout(i),i=null,o={}}var i,n,s,o={};t(function(){t(document.body).on("touchstart",function(e){n=Date.now(),s=n-(o.last||n);var e=e.originalEvent;o.el=t(e.touches[0].target),s>0&&250>=s&&(o.isDoubleTap=!0),o.last=n}).on("touchmove",function(t){var t=t.originalEvent;e()}).on("touchend",function(){"last"in o&&(i=setTimeout(function(){o.el.trigger("tap"),o.isDoubleTap&&(o.el.trigger("doubleTap"),o={})},10))}).on("touchcancel",e)}),["doubleTap","tap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(jQuery),function(){SUI.UI.init=function(){return{init:function(){SUI.require("main").selectBind()},hidebar:function(){}}.init()}}(),SUI.UI.HTMLTemplate=function(t){var e=t.para||{},i=[t.string].join("");if(e){for(var n in e){var s=new RegExp("\\$\\{"+n+"\\}","g");i=i.replace(s,e[n])}return i}return i},SUI.UI.AlertBox=function(t){function e(t){this.opts=t||{},this.title=this.opts.title||"",this.msg=this.opts.msg||"",this.confirmMsg=this.opts.confirmMsg||"确定",this.cancelMsg=this.opts.cancelMsg||"取消",this.type=this.opts.type||"default",this.hasMask=this.opts.hasMask===!1?!1:!0,this.uid=this.opts.uid||"#alertBox",this.confirm=this.opts.confirm||function(){},this.cancel=this.opts.cancel||function(){},this.callBack=this.opts.callBack||function(){},this._event=SUI.require("checkDevice").isMobile()?"tap":"click"}e.prototype={init:function(){var t=this;switch(t.type){case"default":var e='<div id="alertBox" class="alertBox"><div class="msg">${msg}</div><div class="layout wbox"><div class="btn-cancel sn-btn-b wbox-flex block mr10"><a href="javascript:void(0)"><span>'+this.cancelMsg+'</span></a></div><div class="btn-confirm sn-btn-c wbox-flex block"><a href="javascript:void(0)"><span>'+this.confirmMsg+"</span></a></div></div></div>";break;case"alert":var e='<div id="alertBox" class="alertBox"><div class="msg">${msg}</div><div class="layout wbox"><div class="btn-confirm sn-btn-c wbox-flex block"><a href="javascript:void(0)">'+this.confirmMsg+"</a></div></div></div>";break;case"mini":var e='<div id="alertBox" class="alertBox alertBoxBlack"><div class="msg">${msg}</div></div>'}var i=SUI.Use("HTMLTemplate",{string:e,para:{msg:t.msg}});t.render(i)},render:function(t){var e=this,i=document.querySelector("body");!document.querySelector(e.uid)&&i.insertAdjacentHTML("beforeend",t),"function"==typeof e.callBack&&e.callBack(),e.hasMask&&e.mask(i),e.setPos(document.querySelector(e.uid))},mask:function(t){var e=document.createElement("div");e.id="tempMask";var i=SUI.require("position").getHeight();t.appendChild(e),document.querySelector("#tempMask").style.cssText=";height:"+i+"px;width:"+document.documentElement.offsetWidth+"px;"},setPos:function(t){var e=this,i=SUI.require("position").scrollTop();return t.style.cssText=";top:"+(i+window.innerHeight/2-t.offsetHeight/2)+"px;left:"+(document.documentElement.offsetWidth/2-t.offsetWidth/2)+"px;display:block;","mini"==e.type?(document.querySelector("#tempMask").style.opacity=0,void setTimeout(function(){$("#tempMask").remove(),$("#alertBox").remove()},2e3)):void e.addEvent(t)},addEvent:function(t){var e=this;$(t.querySelector(".btn-confirm")).on("click",function(i){e.confirm(t),e.reset(t),i.preventDefault()}),"alert"!=e.type&&$(t.querySelector(".btn-cancel")).on("click",function(i){e.cancel(t),e.reset(t),i.preventDefault()})},reset:function(t){document.querySelector("#tempMask")&&SUI.require("remove").call(document.querySelector("#tempMask")),SUI.require("remove").call(t),"mini"!=this.type&&this.die(t)},die:function(t){$(t.querySelector(".btn-confirm")).off("click"),"alert"!=self.type&&$(t.querySelector(".btn-cancel")).off("click")}},new e(t).init()},SUI.UI.ProCounter=function(t){var e={uid:".sn-count",min:1,max:99};$.extend(e,t);var i=$(e.uid),n=i.find(".input-count"),s=i.find(".add"),o=i.find(".min"),a=isNaN(n.val())?parseInt(n.val()):e.min,r=e.min,c=e.max,l=SUI.require("checkDevice").isMobile()?"tap":"click";n.val(parseInt(n.val())>0?parseInt(n.val()):r),n.keyup(function(){a=$(this).val(),parseInt($(this).val())>c?($(this).val(c),s.addClass("cover"),o.removeClass("cover")):isNaN($(this).val())||1==parseInt($(this).val())||parseInt($(this).val())<=r?(this.value=this.value.replace(/\D/g,""),$(this).val(r),a=r,o.addClass("cover"),s.removeClass("cover")):(s.removeClass("cover"),o.removeClass("cover"))}),n.focus(function(){a=n.val(),this.type="number",n.val("")}),n.on("change keyup blur",function(){this.type="text",c=parseInt($("#djtLimitBuyNum").val())||99,"5"==$("#priceType").val()&&parseInt($(this).val())>parseInt($("#djhLimitBuyNum").val())&&(SUI.Use("AlertBox",{type:"mini",msg:"您最多可购买"+$("#djhLimitBuyNum").val()+"件"}),$(this).val($("#djhLimitBuyNum").val())),"4"==$("#priceType").val()&&parseInt($(this).val())>parseInt($("#djhLimitBuyNum").val())&&(SUI.Use("AlertBox",{type:"mini",msg:"您最多可购买"+$("#djhLimitBuyNum").val()+"件"}),$(this).val($("#djhLimitBuyNum").val())),parseInt($(this).val())!=$(this).val()&&""!=$(this).val()&&$(this).val(parseInt($(this).val())),a=$(this).val()}),n.blur(function(){parseInt($(this).val())>c&&$(this).val(c),""==$(this).val()||parseInt($(this).val())<r?$(this).val(1):a>c?(a=c,$(this).val(c)):$(this).val(a)}),o.on(l,function(){a=parseInt(n.val()),a--,r>=a?(n.val(r),a=r,o.addClass("cover")):a>c&&(a=c),s.removeClass("cover"),n.val(a)}),s.on(l,function(){c=parseInt($("#djtLimitBuyNum").val())||99,a++,a>c&&(a=c,s.addClass("cover")),o.removeClass("cover"),"5"==$("#priceType").val()&&a>parseInt($("#djhLimitBuyNum").val())&&(SUI.Use("AlertBox",{type:"mini",msg:"您最多可购买"+$("#djhLimitBuyNum").val()+"件"}),a=parseInt($("#djhLimitBuyNum").val())),"4"==$("#priceType").val()&&a>parseInt($("#djhCommNum").val())&&(SUI.Use("AlertBox",{type:"mini",msg:"大聚惠仅剩"+$("#djhCommNum").val()+"件"}),a=parseInt($("#djhCommNum").val()),0==a&&(a=r)),"4"==$("#priceType").val()&&a>parseInt($("#djhLimitBuyNum").val())&&(SUI.Use("AlertBox",{type:"mini",msg:"您最多可购买"+$("#djhLimitBuyNum").val()+"件"}),a=parseInt($("#djhLimitBuyNum").val())),n.val(a)})},SUI.UI.timer=function(t){function e(t){this.opts=t||{},this.obj=this.opts.obj,this.nowTime=this.opts.nowTime,this.startTime=this.opts.startTime,this.endTime=this.opts.endTime,this.speed=this.opts.speed||1e3,this.startText=""==this.opts.startText?"":this.opts.startText||"即将开始：",this.endText=""==this.opts.endText?"":this.opts.endText||"距结束：",this.finishText=this.opts.finishText||"抢购已结束!",this.startCallBack=this.opts.startCallBack||"",this.endCallBack=this.opts.endCallBack||"",this.finishCallBack=this.opts.finishCallBack||""}e.prototype={init:function(){this.timer(),this.run()},timer:function(){var t=this,e=[],i=this.nowTime;t.startTime&&t.startTime>i?(e=t.parse(t.startTime-i),t.obj[0].innerHTML=this.startText+("00"==e[3]?"":e[3]+"天")+e[2]+"小时"+e[1]+"分"+e[0]+"秒",t.startCallBack&&t.startCallBack()):t.endTime&&t.endTime>i?(e=t.parse(t.endTime-i),t.obj[0].innerHTML=this.endText+("00"==e[3]?"":e[3]+"天")+e[2]+"小时"+e[1]+"分"+e[0]+"秒",t.endCallBack&&t.endCallBack()):(t.obj[0].innerHTML=this.finishText,t.finishCallBack&&t.finishCallBack()),this.nowTime=parseInt(this.nowTime)+1e3},parse:function(t){var e=this,i=t/e.speed;return e.second=Math.floor(i%60),e.minute=Math.floor(i/60%60),e.hour=Math.floor(i/60/60%24),e.day=Math.floor(i/60/60/24),e.second<10&&(e.second="0"+e.second),e.minute<10&&(e.minute="0"+e.minute),e.hour<10&&(e.hour="0"+e.hour),e.day<10&&(e.day="0"+e.day),[e.second,e.minute,e.hour,e.day]},run:function(){var t=this;setInterval(function(){t.timer()},1e3)}},new e(t).init()},$(function(){SUI.Use("init")});