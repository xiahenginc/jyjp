//(function(){
$(function(){
	var canSubmit_tmp = true;
	var canSubmit = true;
	var canConfirm = true;
	var parentId = "";
	var bindaction = "blur";
	var holderDom = "<font></font>";
	var spacing = "&nbsp;&nbsp;&nbsp;";
	var actions = [];
	var defaultjson = {};
	var msgstyle = "html";
	var currAction="";
	var nextConfirm=true;

	$.fn.SubmitConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);
		var opts = settings.opts;
		var tag = choosetag(settings);

		$(this).bind("submit",
		function() {
			canSubmit = true;
			try {
				if (typeof(opts) != "undefined" && opts != null && opts.length > 0) {
					for (var i = 0; i < opts.length; i++) {
						var $currdom = $(tag + opts[i]);
						var id = $currdom.attr("id");
						
						var canbreak=false;
						for (var j = 0; j < actions.length; j++) {
							var obj = actions[j];
							if (id == obj["id"]) {
								var currMethod = obj["action"];
								if (typeof(currMethod) == 'string') {
									runAction($currdom, currMethod);
									if(typeof(nextConfirm)=='boolean' && !nextConfirm){
										canbreak=true;
										canSubmit_tmp = false;
										break;
									}
								}
							}
						}
						if (canSubmit_tmp == false) {
							canSubmit = false;
						}
						if(canbreak){
							canConfirm=true;
							break;
						}
					}
				} else {
					canSubmit = false;
				}
			} catch(e) {
				canSubmit = false;
			}
			if(canSubmit){
				try{
					var can_submit_tmp=settings.success();
					if(typeof(can_submit_tmp)=="boolean"&&!can_submit_tmp){
						return false;
					}
				}catch(e){}
			}else{
				try{
					settings.error();
				}catch(e){}
			}
			return canSubmit;
		});
	}

	$.fn.BtnSubmitConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);
		var opts = settings.opts;
		var tag = choosetag(settings);
		var formid = settings.form;

		$(this).bind("click",
		function() {
			canSubmit = true;
			try {
				if (typeof(opts) != "undefined" && opts != null && opts.length > 0) {
					for (var i = 0; i < opts.length; i++) {
						var $currdom = $(tag + opts[i]);
						var id = $currdom.attr("id");
						
						var canbreak=false;
						for (var j = 0; j < actions.length; j++) {
							var obj = actions[j];
							if (id == obj["id"]) {
								var currMethod = obj["action"];
								if (typeof(currMethod) == 'string') {
									runAction($currdom, currMethod);
									if(!nextConfirm){
										canbreak=true;
										canSubmit_tmp = false;
										break;
									}
								}
							}
						}
						if (canSubmit_tmp == false) {
							canSubmit = false;
						}
						if(canbreak){
							canConfirm=true;
							break;
						}
					}
				} else {
					canSubmit = false;
				}
			} catch(e) {
				canSubmit = false;
			}
			if(canSubmit){
				try{
					var can_submit_tmp=settings.success();
					if(!can_submit_tmp){
						return false;
					}
				}catch(e){}
				$(tag + formid).submit();
			}else{
				try{
					settings.error();
				}catch(e){}
			}
		});
	}

	$.fn.RequiryConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);

		var currAction = getCurrAction(settings);
		saveActionByControl($(this).attr("id"), currAction);

		$(this).bind(currAction,
		function() {
			var canreturn=repeater(this, "RequiryConfirm");
			if(!canreturn){
				return false;
			}
			var username = $(this).val();

			if (username == null || $.trim(username) == "") {
				showMessage(settings, this, "RequiryConfirm");
			} else {
				hideMessage(settings, this);
			}
		});
	}

	$.fn.AjaxConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);

		var currAction = getCurrAction(settings);
		saveActionByControl($(this).attr("id"), currAction);

		$(this).bind(currAction,
		function() {
			var canreturn = repeater(this,"AjaxConfirm");
			if(!canreturn){
				return false;
			}
			var username = $(this).val();
			if(settings.value!=null && typeof(settings.value)=='string'){
				username=settings.value;
			}
			var code_ajax_tmp={"code": encodeURI(encodeURI(username))}
			
			if(settings.data!=null&&typeof(settings.data)!='undefined'){
				code_ajax_tmp=$.extend({},settings.data, code_ajax_tmp);	
			}
			try {
				$.ajax({
					url: settings.url,
					type: "post",
					async: false,
					data: code_ajax_tmp,
					success: function(data) {
						if ($.trim(data)== "ok") {
							hideMessage(settings, this, "AjaxConfirm");
						} else {
							showMessage(settings, this);
						}
					}
				});
			} catch(e) {
				showMessage(settings, this);
			}
		});
	}

	$.fn.EqualsConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);

		var currAction = getCurrAction(settings);
		saveActionByControl($(this).attr("id"), currAction);

		$(this).bind(currAction,
		function() {
			var canreturn=repeater(this,"EqualsConfirm");

			if(!canreturn){
				return false;
			}
			
			var tag = choosetag(settings);
			var val1 = $(this).val();
			var holder = $(tag + settings.holder);
			var val2 = $(tag+settings.compare).val();

			if (val1 == null || val2 == null || typeof(val1) != 'string' || typeof(val2) != 'string' || val1 != val2) {
				showMessage(settings, this, "EqualsConfirm");
			} else {
				hideMessage(settings, this);
			}
		});
	}

	$.fn.CustomConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);

		var currAction = getCurrAction(settings);
		saveActionByControl($(this).attr("id"), currAction);

		$(this).bind(currAction,
		function() {
			var canreturn=repeater(this,"CustomConfirm");
			if(!canreturn){
				return false;
			}
			
			var tag = choosetag(settings);
			var username = $.trim($(this).val());
			var holder = $(tag + settings.holder);
			var reg = settings.regex;

			if (username == null || typeof(username) != 'string' || !reg.test(username)) {
				showMessage(settings, this, "CustomConfirm");
			} else {
				hideMessage(settings, this);
			}
		});
	}

	$.fn.LengthConfirm = function(options) {
		var settings = $.extend({},
		defaultjson, options);

		var currAction = getCurrAction(settings);
		saveActionByControl($(this).attr("id"), currAction);
		$(this).bind(currAction,
		function() {
			var canreturn=repeater(this,"LengthConfirm");
			if(!canreturn){
				return false;
			}
			
			var tag = choosetag(settings);
			var username = $(this).val();
			var holder = $(tag + settings.holder);

			try {
				var len1 = settings.length[0];
				var len2 = settings.length[1];
				if (username != null && typeof(username) == "string" && (username.length < len1 || username.length > len2)) {
					showMessage(settings, this, "LengthConfirm");
				} else {
					hideMessage(settings, this);
				}
			} catch(e) {
				showMessage(settings, this);
			}
		});
	}

	/* 初始化方法，暂未实现 */
	function validateinit(options) {
		var settings = options;
		bindaction = settings.bindaction;
		holderDom = settings.holder;
		spacing = settings.spacing;
	}

	/* 公共方法 */
	function saveActionByControl(currid, curraction) {
		var hasAction=false;
		for(var i=0;i<actions.length;i++){
			var obj=actions[i];
			if(currid==obj["id"]&&obj["action"]==curraction){
				hasAction=true;
			}
		}
		if(!hasAction){
			actions.push({
				id: currid,
				action: curraction
			});			
		}
	}

	function choosetag(settings) {
		var tag = "#";
		if (typeof(settings.tag) == "string") {
			if (settings.tag == "#" || settings.tag == ".") {
				tag = settings.tag;
			}
		}
		return tag;
	}

	function showMessage(settings, dom, action) {
		var tag = choosetag(settings);
		var holder = $(tag + settings.holder);
		var insDom = getDom(settings);
		holder.html(spacing);
		holder.append(insDom.html(settings.message));
		canSubmit_tmp = false;
		canConfirm = false;
		parentId = $(dom).attr("id");
		currAction=action;
		try {
			nextConfirm=settings.error();
		} catch(e) {
			nextConfirm=false;
		}
//		if(nextConfirm){
//			holder.html(spacing);
//			holder.append(insDom.html(settings.message));
//			canSubmit_tmp = false;
//			canConfirm = false;
//			parentId = $(dom).attr("id");
//			currAction=action;
//		}
	}

	function hideMessage(settings, dom) {
		var tag = choosetag(settings);
		var holder = $(tag + settings.holder);
		holder.html("");
		canSubmit_tmp = true;
		canConfirm = true;
		try {
			nextConfirm=settings.success();
		} catch(e) {
			nextConfirm=false;
		}
	}

	function getDom(settings) {
		var tmpDom = $(holderDom);
		if (typeof(settings.classes) != "undefined") {
			tmpDom.addClass(settings.classes);
		}
		if (typeof(settings.style) != "undefined" && typeof(settings.style) == "object") {
			tmpDom.css(settings.style);
		}
		return tmpDom;
	}

	function getCurrAction(settings) {
		var currAction = bindaction;
		try {
			if (typeof(settings.action) == 'string') {
				currAction = settings.action;
			}
		} catch(e) {

		}
		return currAction;
	}
	
	function repeater(dom,action){
		if (canConfirm == false && parentId == $(dom).attr("id") && currAction!="" && currAction != action) {
			canConfirm = true;
			parentId="";
			return false;
		}
		return true;
	}

	function runAction($dom, curraction) {
		if (curraction == 'change') {
			$dom.change();
		}
		if (curraction == 'blur') {
			$dom.blur();
		}
		if (curraction == 'click') {
			$dom.click();
		}
		if (curraction == 'focus') {
			$dom.focus();
		}
		if (curraction == 'keyup') {
			$dom.keyup();
		}
		if (curraction == 'keydown') {
			$dom.keydown();
		}
		if (curraction == 'dblclick') {
			$dom.dblclick();
		}
	}

		
		})
//})(jQuery)