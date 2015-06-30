

    $(function(){
        /* 分类点击状态 */
        $(".has-droplist").hover(function(){
            $(".has-droplistcot").show();
        },function(){
            $(".has-droplistcot").hide();
        });


        /* 二级菜单 */
        $(".js-meun").hover(function(){
            $("#mcshow").show();
        },function(){
            $("#mcshow").hide();
        });
    });


	/* 返回顶部 */
	$(function(){
       /* $("#top-con").hide();*/
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#top-con").fadeIn();
                }
                else
                {
                    $("#top-con").fadeOut();
                }
            });
            
            //当点击跳转链接后，回到页面顶部位置
            $("#top-con").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
        });
    }); 



    /* 首页二级菜单 */
    (function($){
        $.fn.hoverForIE6=function(option){
            var s=$.extend({current:"hover",delay:10},option||{});
            $.each(this,function(){
                var timer1=null,timer2=null,flag=false;
                $(this).bind("mouseover",function(){
                    if (flag){
                        clearTimeout(timer2);
                    }else{
                        var _this=$(this);
                        timer1=setTimeout(function(){
                            _this.addClass(s.current);
                            flag=true;
                        },s.delay);
                    }
                }).bind("mouseout",function(){
                    if (flag){
                        var _this=$(this);timer2=setTimeout(function(){
                            _this.removeClass(s.current);
                            flag=false;
                        },s.delay);
                    }else{
                        clearTimeout(timer1);
                    }
                })
            })
        }
    })(jQuery);

    $(".allsort").hoverForIE6({current:"allsorthover",delay:100});
    $(".item").hoverForIE6({delay:100});