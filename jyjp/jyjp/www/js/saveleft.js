
	
	$(document).ready(function($){
		$("#nav_header > li").click(function(){
			var val=$(this).attr("bid");
			$.cookie("grwnavstatus", val); //,{expires:1}
		});
		$(".item").click(function(){
			var val=$(this).attr("bid");
			$.cookie("grwnavstatus", val);
		});
		//×ó²à³õÊ¼»¯
		initLeft();
	});
	
	function initLeft(){
		var currStatus=$.cookie("grwnavstatus");
		//alert(currStatus);
		if(currStatus!=null&&typeof(currStatus)=="string"){
			var hasInit=false;
			$("#nav_header > li").each(function(i){
				var navbid=$(this).attr("bid");
				if(navbid==currStatus){
					$("#nav_header > li").removeClass("active");
					$(this).addClass("active");
					hasInit=true;
				}
			});
			if(!hasInit){
				$("#nav_header > li").eq(0).addClass("active");
			}
		}
	}