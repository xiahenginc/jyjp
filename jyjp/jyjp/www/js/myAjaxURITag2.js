
    //容器
	var settings={holder:"listone",tags:".ajaxuri"};
	
	var isrun=true; //防止多个对象异步提交

	$(document).ready(function(){
		$("*[class*='ajaxuri']").click(function(){
			showloading();
			try{
				var url=$(this).attr("uri");
				if(url==null || url=="" || typeof(url)!='string'){
					url=$(this).attr("href");
				}
				GetList(url);
				return false;
			}catch(e){
				hideloading();	
			}												   
		});				   
	})
	
    function GetList(url) {
		if(!isrun){
			return;
		}
		isrun=false;
        $.ajax({
            url: url,
            dataType: "html",
            type: "post",
			cache: true,
            data: {},
            error: function (data) {
                alert("Access failure！");
				isrun=true;
				hideloading();
				return false;
            },
            success: function (data) {
                var strHtml = data;
                $("#"+settings.holder).append(strHtml);
				hideloading();
				isrun=true;
            }
        });
    }
	
	function showloading(){
		$("#loadingp").hide(1);
		$("#loadinga").show(1);
	}
	
	function hideloading(){
		$("#loadinga").hide(1);
		var uri=$("#loadingp").attr('uri');
		var maxpage=$("#loadingp").attr('maxpage');
		var uriQuer=uri.substring(0,uri.indexOf("toPage=")+7);
		var page=uri.substring(uri.indexOf("toPage=")+7,uri.length);
		var currPage=parseInt(page)+1;
		
		if(currPage>maxpage){
			$("#loadingover").show(1);
		}else{
			$("#loadingp").attr('uri',uriQuer+currPage);
			$("#loadingp").show(1);
		}
	}