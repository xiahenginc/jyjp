/* suning.com 1428676300387 */function initEvent(){topc(),logon(),register(),logonOff(),cart(),userEvent(),$("#suningapp").click(function(){downloadApp()})}function topc(){$("#suningtopc").click(function(){var o=$(this).attr("res-cd");document.cookie="terminal_flag=0;domain="+(o?o:".suning.com")+";path=/";var n=$(this).attr("res-url");window.location.href=n?n:"http://www.suning.com/?utm_source=suning&utm_medium=pc"})}function logon(){$("#footerLogin").click(function(){window.location.href="https://passport.suning.com/ids/login?service=https://aq.suning.com/asc/auth?targetUrl=http://m.suning.com&loginTheme=wap_new"})}function register(){$("#footerRegister").click(function(){window.location.href="http://m.suning.com/wap/register/getRegister.do"})}function logonOff(){$("#footerLogout").click(function(){window.location.href="https://ssl.suning.com/emall/Logoff?storeId=10052&synPassportFlg=true&URL=http://m.suning.com/accountcenter/logoff.do?targetURL=http://m.suning.com"})}function cart(){$("#shopCartTip").click(function(){window.location.href="http://m.suning.com/cart1/gateway/cart1View.do"})}function userEvent(){$("#footerUserName").click(function(){window.location.href="http://m.suning.com/accountcenter/private/getAccountCenter.do"})}function getLogonInfo(){probeAuthStatus(function(){checkLogonStatus()},function(){})}function checkLogonStatus(){$.ajax({url:"/private/getLogonInfo.do",cache:!1,async:!1,dataType:"json",error:function(){},success:function(o){var n=o.logonId;if(n.length>10){var t=n.substring(0,10)+"...";$("#footerUserName").find("span").text(t)}else $("#footerUserName").find("span").text(n);$("#footerLogin").hide(),$("#footerRegister").hide(),$("#shopCartTip").hide(),$("#footerUserName").show(),$("#footerLogout").show()}})}function downloadApp(){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var o=new Date;window.setTimeout(function(){var n=new Date;if(5e3>n-o){if(navigator.userAgent.match(/MicroMessenger/i))return void(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129");window.location="https://itunes.apple.com/cn/app/id424598114?l=en&mt=8"}else window.close()},25),window.location="com.suning.SuningEbuy://"}else if(navigator.userAgent.match(/android/i)){if(navigator.userAgent.match(/MicroMessenger/i))return void(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129");window.location="http://mapp.suning.com/a.php?s=qrcode/offline&f=ygznwpdt&pack=com.suning.mobile.ebuy"}}function openApp(){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var o=new Date;window.setTimeout(function(){var n=new Date;if(5e3>n-o){if(navigator.userAgent.match(/MicroMessenger/i))return void(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129");window.location="https://itunes.apple.com/cn/app/id424598114?l=en&mt=8"}else window.close()},25),window.location="com.suning.SuningEbuy://"}else if(navigator.userAgent.match(/android/i)){if(navigator.userAgent.match(/MicroMessenger/i))return void(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129");window.location="suning://m.suning.com/index"}}function checkMergeCart(){probeAuthStatus(function(){var o=$.cookie("mergeFlag");("undefined"==typeof o||"1"!=o)&&mergeCart()},function(){})}function mergeCart(){var o={storeId:"10052",isMerge:"1",supportPackage:"1",supportAccePack:"0",supportSunPack:"0",supportCheck:"1",supportCShop:"1",supportCShopCheck:"1",supportGroupbuy:"1",mpsChannel:"5",channel:"5"};$.ajax({type:"GET",url:"http://www.suning.com/webapp/wcs/stores/servlet/SNMobileShoppingCartQuery",cache:!1,async:!1,dataType:"jsonp",data:o,jsonp:"callback",success:function(o){refreshLocalCart(o)},complete:function(){}})}function refreshLocalCart(o){var n={cartJson:JSON.stringify(o),mergeFlag:"1"};$.ajax({url:"/cart1/refreshLocalCart.do",type:"POST",data:n,cache:!1,async:!1,success:function(){},complete:function(){var o=$.cookie("totalProdQtyv3"),n=$("#cartnum");n.html("undefined"==typeof o||0==o||"undefined"==typeof n?"":o>=100?"<span class='count' ><em class='count-em'>99<i>+</i></em></span>":"<span class='count'><em>"+o+"</em></span>")}})}var passport_config={base:"/",loginTheme:"wap_new"};$(function(){getLogonInfo(),initEvent(),checkMergeCart()});