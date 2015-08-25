/*!
 * jQuery X Plugins
 * xiewulong <xiewulong@vip.qq.com>
 * http://xiewulong.github.io/jqueryX
 * https://github.com/xiewulong/jqueryX/blob/master/MIT-License
 * create: 2013/5/16
 * update: 2014/08/26
 * version: 1.0.0
 */

!function(a,b){var c=function(c){var f=c(a),g=c(d),h=function(){};return c.extend({x:"1.0.0",xajax:function(a,b,d,e,f,g){b=b||h,"javascript:;"==a?b(d):c[f||"post"](a,e,b,g||"json")},cookie:function(a,c,e,f,g,h){var i,j,k=new Date;return c===b?(i=d.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)")),i?unescape(i[2]):""):(j=a+"="+escape(c),j+=e?";expires="+k.toGMTString(k.setDate(k.getDate()+e)):"",j+=f?";path="+f:"",j+=g?";domain="+g:"",j+=h?";secure":"",d.cookie=j,void 0)},clip:function(b,d){var e,f=c(b).val(),d=d||h;(e=a.clipboardData)?(e.clearData(),e.setData("text",f),d.call(b,!0)):(b.focus(),b.selectionStart=0,b.selectionEnd=f.length,d.call(b,!1))},loader:function(a,b){function d(){if(c.isFunction(a))a();else if(c.isPlainObject(a))for(var b in a)c.isFunction(a[b])&&a[b]()}return b?d():c(d),a},pop:function(a){function b(){var a=o-n.adjust-k,b=p-n.adjust-l;return{left:a<n.left?a<n.adjust?n.adjust:a:n.left<n.adjust?n.adjust:n.left,top:b<n.top?b<n.adjust?n.adjust:b:n.top<n.adjust?n.adjust:n.top}}function e(a){return{marginLeft:(a?f.scrollLeft():0)-k/2,marginTop:(a?f.scrollTop():0)-l/2}}var i,j,k,l,m,n={html:"",parent:"body",id:"jq_x_pop",close:"",width:0,height:0,position:"fixed",top:0,left:0,bg:!0,bgclose:!0,bgcloser:!0,bgcolor:"#000",opacity:.5,zIndex:100,animation:"",duration:400,adjust:20,drag:"",fn:!1,fnC:!1},o=g.width(),p=g.height();if(c.extend(n,a),n.html){if(c.popClose(n.id),n.bg&&c.popBg({parent:n.parent,id:n.id+"_bg",close:n.bgclose?n.close||n.id+"_c":"",bgcolor:n.bgcolor,fade:n.animation?!0:!1,duration:n.duration,opacity:n.opacity,zIndex:n.zIndex-1}),j="display:inline;position:"+n.position+";z-index:"+n.zIndex+";"+(n.animation&&n.width&&n.height?"display:none;":"")+(n.width?"width:"+n.width+"px;":"")+(n.height?"height:"+n.height+"px;":""),n.$pop=c('<div id="'+n.id+'" class="'+n.id+'" style="'+j+'">'+n.html+"</div>").appendTo(n.parent),k=n.width||n.$pop.width(),l=n.height||n.$pop.height(),m="fixed"==n.position?e():e(1),(n.left||n.top)&&"absolute"==n.position&&(i=b()),n.$pop.css({left:n.left?"fixed"==n.position?n.left:i.left:"50%",marginLeft:n.left?"":m.marginLeft,top:n.top?"fixed"==n.position?n.top:i.top:"50%",marginTop:n.top?"":m.marginTop}),"fixed"==n.position&&c.ie6(function(){var a;n.$pop.css({position:"absolute"}),(a=function(){m=e(1),n.$pop.css({left:n.left?n.left+f.scrollLeft():"50%",marginLeft:n.left?"":m.marginLeft,top:n.top?n.top+f.scrollTop():"50%",marginTop:n.top?"":m.marginTop})})(),f.resize(a).scroll(a)}),n.animation)switch((!n.width||!n.height)&&n.$pop.hide(),n.animation){case"fade":n.$pop.stop().fadeIn(n.duration)}return n.close="."+(n.close||n.id+"_c"),c(n.close).on("click",function(a){(n.fnC||h).call(n.$pop.get(0)),c.popClose(n.id,n.animation),a.stopPropagation()}),!n.bg&&n.bgcloser&&(g.on("click",function(){n.$pop.remove()}),n.$pop.on("click",function(a){a.stopPropagation()})),n.drag&&n.$pop.find(n.drag).mousedown(function(a){var a=a||event,b=a.clientX,c=a.clientY,e=n.$pop,f=parseInt(e.css("marginLeft")),g=parseInt(e.css("marginTop"));return d.onmousemove=function(a){var a=a||event;return e.css({marginLeft:f+a.clientX-b,marginTop:g+a.clientY-c}),!1},d.onmouseup=function(){return d.onmouseup=d.onmousemove=null,!1},!1}),(n.fn||h).call(n.$pop.get(0),{width:o,height:p,adjust:n.adjust}),n.$pop}},popClose:function(a,b,d){function e(a){c(a||this).remove()}var a="."+a,f=a+"_bg",g=a+","+f;switch(b){case"fade":c(g).stop().fadeOut(d||400,e);break;default:e(g)}},popBg:function(a){var b,d,e={parent:"body",id:"jq_x_pop_bg",close:"jq_x_pop_c",bgcolor:"#000",fade:!1,duration:400,opacity:.5,zIndex:99};return c.extend(e,a),b=e.fade?0:e.opacity,d=0==c("."+e.id).size()?c('<div id="'+e.id+'" class="'+e.id+" "+e.close+'" style="position:fixed;width:100%;height:100%;left:0;top:0;background:'+e.bgcolor+";opacity:"+b+";filter:alpha(opacity="+100*b+");z-index:"+e.zIndex+';"></div>').appendTo(e.parent):c("#"+e.id),e.fade&&d.stop().animate({opacity:e.opacity},e.duration),c.ie6(function(){var a;(a=function(){d.css({position:"absolute",height:f.height(),marginTop:f.scrollTop()})})(),f.resize(a).scroll(a)}),d},textSize:function(a,b){var d=null==a.match(/[^ -~]/g)?a.length:a.length+a.match(/[^ -~]/g).length;if(!b)return d;if(!(d>b))return a;for(var e=0,f=a.length;f>=e;e++)if(c.textSize(a.substring(0,e+1))>b)return a.substring(0,e)},ie6:function(a){var b;return(b=e.userAgent.indexOf("MSIE 6.0")>0)&&(a||h)(),b},ltie:function(a,c){var d,f,g,i=e.userAgent;if(-1!=i.indexOf("MSIE"))return a===b&&(a=9),"function"==typeof a&&(c=a,a=9),d=i.indexOf("MSIE"),g=parseInt(i.slice(d+5,d+7)),(f=a>g)&&(c||h)(),f},ie:function(a,c){var d,f=e.userAgent;return"function"==typeof a&&(c=a,a=b),index=f.indexOf("MSIE"),version=parseInt(f.slice(index+5,index+7)),(d=index>0&&(!a||a==version))&&(c||h)(),d}}),c.fn.extend({backtop:function(){var a=c("html, body");return this.each(function(){var a,b=c(this);(a=function(){b[f.scrollTop()?"addClass":"removeClass"]("on")})(),f.on("scroll",a)}).on("click",function(){a.stop().animate({scrollTop:0})})},scrolls:function(a){return this.each(function(){function b(b,c){var b=b||event,d=(c||(b.wheelDelta?b.wheelDelta:40*-b.detail))/2,l=k.position().top+d,o=m.height()-k.height(),p=g.height()||0,q=e.height()-p-(i.height()||0)-f.height();o>l&&(l=o),l>0&&(l=0),k.css({top:l}),f.css({top:l/o*q+p}),j[0>l?"show":"hide"](),(a||h).call(n,l>=o),b.preventDefault?b.preventDefault():event.returnValue=!1}var e,f,g,i,j,k,l,m=c(this),n=this;0==m.find(".scroll").size()&&(l=n.innerHTML,m.html('<div class="scroll_c"></div><div class="scroll"><a href="javascript:;" class="up">▲</a><a href="javascript:;" class="scroller"></a><a href="javascript:;" class="down">▼</a></div><a href="javascript:;" class="gotop"></a>').find(".scroll_c").html(l)),e=m.find(".scroll"),f=e.find(".scroller"),g=e.find(".up"),i=e.find(".down"),j=m.find(".gotop"),k=m.find(".scroll_c"),f.get(0).onmousedown=function(b){var b=b||event,f=c(this),l=b.clientY-f.position().top;return d.onmousemove=function(b){var b=b||event,c=b.clientY-l,d=k.height(),o=e.height()-(i.height()||0)-f.height(),p=g.height()||0;return c>o&&(c=o),p>c&&(c=p),f.css({top:c}),k.css({top:-((c-p)/(o-p))*(d-m.height())}),j[c>0?"show":"hide"](),(a||h).call(n,c>=o),!1},d.onmouseup=function(){return d.onmousemove=d.onmouseup=null,!1},!1},j.on("click",function(){k.css({top:0}),f.css({top:g.height()||0}),touch(this).hide()}),g.on("click",function(a){b(a,120)}),i.on("click",function(a){b(a,-120)}),n.onmouseover=function(){"onmousewheel"in this?this.onmousewheel=b:(this.removeEventListener("DOMMouseScroll",b,!1),this.addEventListener("DOMMouseScroll",b,!1))}}).fixScrolls()},fixScrolls:function(){return this.each(function(){var a=c(this),b=a.find(".scroll"),d=b.find(".scroller"),e=a.height(),f=this.scrollHeight;d.height((b.height()-(b.find(".up").height()||0)-(b.find(".down").height()||0))*e/f),b[f>e?"show":"hide"](),e>=f&&(d.css({top:0}),a.find(".scroll_c").css({top:0}))})},checkAll:function(a,b,d){function e(){var a=!0;return f.each(function(){!this.checked&&(a=!1)}),a}var f=c(a),g=c(this.selector+","+a),b=b||h,d=d||b,i=this;return f.change(function(){var a=e();i.prop("checked",a),d.call(this,a)}),this.change(function(){var a=this.checked;g.prop("checked",a),b.call(this,a)})},checkboxs:function(a,d){return a===b&&(a="on"),"function"==typeof a&&(d=a,a="on"),this.on("click",function(){(d||h).call(this,c(this).toggleClass(a).hasClass(a))})},radios:function(a,d){var e=this;return a===b&&(a="on"),"function"==typeof a&&(d=a,a="on"),this.on("click",function(){e.removeClass(a),c(this).addClass(a),(d||h).call(this)})},selects:function(a){var d,e,f={parent:"",disabled:"disabled",trigger:"",span:"span",p:"p",a:"a",onW:"",onS:"",onA:"",animation:"",duration:100,toggle:!0,fn:!1,fnA:!1},i=this;return c.extend(f,a),d=i.find(f.p),(f.parent?c(f.parent):g).on("click",e=function(){switch(f.animation){case"slide":d.stop().slideUp(f.duration);break;case"fade":d.stop().fadeOut(f.duration);break;default:d.hide()}f.onW&&i.removeClass(f.onW)}),this.each(function(){var a=c(this),d=a.find(f.trigger||f.span),g=a.find(f.span),i=a.find(f.p),j=i.find(f.a);d.off().on("click",function(b){if(!(a.hasClass(f.disabled)||f.toggle&&"none"!==i.css("display"))){switch(e(),f.animation){case"slide":i.stop().slideDown(f.duration);break;case"fade":i.stop().fadeIn(f.duration);break;default:i.show()}f.onW&&a.addClass(f.onW),(f.fn||h).call(a.get(0)),b.stopPropagation()}}),j.off().on("click",function(a){var d=c(this),e=g.get(0).tagName.toUpperCase(),i=(f.fnA||h).call(this);i===!1?a.stopPropagation():(i===b&&(i=d.text()),"INPUT"==e||"TEXTAREA"==e?g.val(i):g.html(i),f.onS&&g.addClass(f.onS),f.onA&&(j.removeClass(f.onA),d.addClass(f.onA)))}),f.onA&&j.each(function(){var a=c(this),b=a.text(),d=g.get(0).tagName.toUpperCase(),e="INPUT"==d||"TEXTAREA"==d?g.val():g.text();e==b&&a.addClass(f.onA)})})},tabs:function(a,d,e,f,g){"function"==typeof d&&(g=d,d="on"),"function"==typeof e&&(g=e,e=b),"function"==typeof f&&(g=f,f=0),!e&&("click"==d||"hover"==d)&&(e=d),f===b&&(f=0);var i,j="hover"==e?"mouseover":"click",k=this;return(i=function(b){var e=c(a);k.removeClass(d).eq(b).addClass(d),e.hide().eq(b).show(),(g||h).call(k.get(b),b,e.get(b))})(f),this.each(function(a){c(this).on(j,function(){i(a)})})},imgLoad:function(a,c){return a===b&&(a="_src"),"function"==typeof a&&(c=a,a="_src"),this.each(function(b){var d=new Image,e=this.src||"",f=this.getAttribute(a),g=this;"IMG"==this.tagName.toUpperCase()&&f&&(d.onload=function(){g.src=this.src,g.setAttribute(a,e),(c||h).call(g,this,b)},d.src=f)})},inputIn:function(a,b){return b&&(a=b[0]+a+b[1]),this.each(function(){var b,c,e,f,g,h,i=d.selection;this.focus(),h=this.value,i?(g=(g=this.getAttribute("_range"))?g.split("|"):[0,0],b=parseInt(g[0]),c=b+parseInt(g[1])):(b=this.selectionStart,c=this.selectionEnd),e=b+a.length,this.value=h.slice(0,b)+a+h.slice(c),this.focus(),i?(this.setAttribute("_range",e+"|0"),f=i.createRange(),f.moveStart("character",e-this.value.length),f.collapse(!0),f.select()):this.setSelectionRange(e,e)})},limit:function(a,b){return this.each(function(){var d=c(this),e=d.val(),f=c.textSize(e)/2;"function"==typeof b?b.call(this,Math.floor(a-f)):f>a&&d.val(c.textSize(e,2*a))})},inputs:function(a){function e(){var a,b=c(this),d=b.val(),e=k.defV&&b.attr(k.defV)||this.defaultValue,f=c.textSize(d)/2;e&&d==e&&g(e)||(a="number"==typeof k.limit?k.limit:b.attr(k.limit)?parseInt(b.attr(k.limit)):140,"function"==typeof k.fn?k.fn.call(this,Math.floor(a-f)):f>a&&b.val(c.textSize(d,2*a)))}function f(){if(d.selection){{var a,b=d.selection.createRange(),e=c(this),f=this.value,g=f.length,h=b.text.length,i=0;c.ie(8)}b.moveStart("character",-g),a=b.text;for(var j=0,k=a.length;k>j&&-1!=f.indexOf(a.slice(-(j+1)));j++);e.attr("_range",j-h+i+"|"+h)}}function g(a){return 0==k.values.length||c.inArray(a,k.values)>=0}var h,i,j,k={parent:"",values:[],defV:"_value",onF:"",onK:"",limit:!1,fn:!1,range:!1,events:!0},l=c.ltie(10);return c.extend(k,a),j=k.range&&c.ie(),h=k.parent?c(k.parent):this,i=k.parent?this.selector:b,h.on("focus",i,function(){var a=c(this),b=k.defV&&a.attr(k.defV)||this.defaultValue;b&&a.val()==b&&g(b)&&a.val(""),a.addClass(k.onF),k.events&&k.limit&&e.call(this)}).on("blur",i,function(){var a=c(this),b=a.val(),d=k.defV&&a.attr(k.defV)||this.defaultValue;(""==b||b==d)&&g(d)&&a.val(d).removeClass(k.onF+" "+k.onK),k.events&&k.limit&&e.call(this)}).on(l?"keyup":"input",i,function(){var a=c(this),b=a.val(),d=k.defV&&a.attr(k.defV)||this.defaultValue;a[""==b||b==d?"removeClass":"addClass"](k.onK),j&&f.call(this),k.limit&&e.call(this)}),k.limit&&(this.each(e),l&&this.on("paste",e)),j&&h.on("mouseup",i,f),this}}),c},d=a.document,e=a.navigator,f=a.jQuery,g=a.define;f&&f().jquery&&c(f),"function"==typeof g&&g.amd&&g(["jquery"],c)}(window);
!function(a,b){var c=($(a),$(document)),d=function(){},e=a.WS||(a.WS={}),f={},g=e.base||(e.base={});g.dates={cn:{days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthsShort:["1","2","3","4","5","6","7","8","9","10","11","12"],today:"今天"}},f["public"]=function(){if($("[data-rel=tooltip]").size()&&$("[data-rel=tooltip]").tooltip(),$(".J_date-pick").size()&&$(".J_date-pick").datetimepicker({format:"YYYY-MM-DD HH:mm",language:"en",pickDate:!0,pickTime:!0,hourStep:1,minuteStep:15,secondStep:30,inputMask:!0}),c.on("change",".J_select",function(){var a=$(this),b=a.val(),c=a.find("option:selected").text(),d=a.parent().siblings().find(".search-query");d.attr("name",b).val("").attr("placeholder","请输入"+c)}).on("click",".J_subBtn",function(){var a=$(".J_search_btn"),b=$(this).siblings(".J_search_text");return b.val($(this).attr("data-status")),a.parents("form").submit(),!1}).on("click",".J_w_pages li:not([class=disabled]), .J_w_page",function(){var a=$(this),b=$("form"),c=b.find("[name=pageNo]"),d=a.find("a").attr("pageNo")||a.parent().prev("input").val(),e=$(".J_w_pages").attr("pageTotal");return isNaN(d)?void alert("请输入有效的数字！"):(1>1*d?d=1:1*d>1*e&&(d=e),void(b&&1==b.length&&(c.length<1&&(c=$('<input type="hidden" name="pageNo"/>'),b.append(c)),c.val(d),b.submit())))}),$(".J_login_input").size()&&$(".J_login_input").each(function(){$(this).on("input",function(){g.verify(this,g.Login(this))})}).on("input",".J_input",function(){var a=$(this),b=a.val().length,c=a.parent("div").next("div.help-block").find("span"),d=a.attr("maxlength");return b>d?!1:void c.text(d-b)}),$(".J_input_verify").size()){for(var a=$(".J_input_verify"),b=a.size(),d=0;b>d;d++)""==a.eq(d).val()&&a[d].setCustomValidity("请输入"+a.eq(d).attr("data-info"));a.each(function(){var a=$(this);a.on("change",function(){g.verify(this,"")})})}},g.verify=function(a,b){a.setCustomValidity(""==a.value?"请输入"+$(a).attr("data-info"):a.validity.patternMismatch===!0?"请输入"+$(a).attr("data-rex"):b)},g.setprompt=function(a,b){g.setCookie("prompt",a),g.setCookie("promptStatus",b)},g.ajaxgo=function(a,b,c,e,f,g){b=b||d,"javascript:;"==a?b(c):$[f||"post"](a,e,b,g||"json")},g.setCookie=function(a,c,d){var e=new Date;c===b&&(d=-1),d&&e.setTime(e.getTime()+24*d*60*60*1e3),document.cookie=a+"="+encodeURIComponent(c)+";"+(d?"expires="+e.toGMTString():"")},g.getCookie=function(a,b){for(var c=document.cookie.split("; "),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return decodeURIComponent(e[b||1])}return""},g.prompt=function(a,b){var c=$('<div class="prompt '+(b||"warning")+'">'+a+"</div>").appendTo("body");c.fadeIn(function(){setTimeout(function(){c.fadeOut(function(){c.remove()})},2e3)})},g.operationalData=function(a,b,c){var d=a.attr("data-ajax"),c=c||"操作成功！";g.confirm(b,function(){g.actionDate(d,c,function(){location.reload()})})},g.confirm=function(a,b){bootbox.confirm({message:a,buttons:{confirm:{label:"确定",className:"btn-primary btn-sm"},cancel:{label:"取消",className:"btn-sm"}},closeButton:!1,callback:function(a){a&&b()}})},f.promptCheck=function(){var a=g.getCookie("prompt"),b=g.getCookie("promptStatus");return a?(g.prompt(a,b),void g.setprompt()):!1},g.nestable=function(a,b,c){a.size()&&a.nestable({maxDepth:b,dragStop:c||d}).find(".dd-handle a").on("mousedown",function(a){a.stopPropagation()})},f.P132_event=function(){if(c.on("click",".J_operation",function(){g.operationalData($(this),"确定处理这笔异常单吗？")}).on("submit",".J_login_form",function(){$("input[type=checkbox]")[0].checked&&g.setCookie("userName",$("input[data-type=loginid]").val(),30)}).on("click",".J_delete",function(){g.operationalData($(this),"确定删除这条接入信息吗？")}),$(".J_login_input").size()&&$(".J_login_input").each(function(){$(this).on("input",function(){g.verify(this,g.Login(this))})}),$("input[data-type=loginid]").size()&&$("input[data-type=loginid]").val(g.getCookie("userName",0)),$(".J_input_ct").size()){for(var a=$(".J_input_ct"),b=a.size(),d=0;b>d;d++)""==a.eq(d).val()&&a[d].setCustomValidity("联系电话和联系邮箱至少有一项必填");a.each(function(){var b=$(this);b.on("change",function(){""==a.eq(0).val()&&""==a.eq(1).val()?(a[0].setCustomValidity("联系电话和联系邮箱至少有一项必填"),a[1].setCustomValidity("联系电话和联系邮箱至少有一项必填")):this.validity.patternMismatch===!0?(a.removeAttr("required"),b.attr("required","required"),a[0].setCustomValidity(""),a[1].setCustomValidity(""),this.setCustomValidity("请输入"+b.attr("data-info"))):(a[0].setCustomValidity(""),a[1].setCustomValidity(""),a.removeAttr("required"))})})}},$.extend(g,$.loader(f))}(window);
!function(a,b){var c=($(a),$(document),a.WS||(a.WS={})),d={},e=c.base||(c.base={});e.regs={s_5_59:/^[^\s]{5,59}$/,s_6_59:/^[^\s]{6,59}$/,s_3_15:/^[^\s]{3,15}$/,s_5_15:/^[^\s]{5,15}$/,s_5_19:/^[^\s]{5,19}$/,s_2_10:/^[^\s]{2,10}$/,s_0_50:/^[^\s]{0,50}$/,s_0_10:/^[^\s]{0,10}$/,s_w_5_15:/^[a-z0-9]{5,15}$/i,w_5_19:/^[a-z0-9]{5,19}$/i,letters:/[a-z]+/i,numbers:/\d+/,numBers:/^\d+$/,nums:/^[\d][\d\s]+$/,pNumbers:/^[1-9][0-9]*$/,pNumber:/^\d+(\.(\d{1,}))?$/,pNuberss:/^[1-9][0-9]{0,}(\.(\d{1,}))?$/,no_money:/^\d+.\d{2}$/,two_money:/^\d+.\d{1}$/,allnumbers:/^\d{0,}$/,asasda:/^-?\d+%$/,num:/^\d+.\d+$/,positive_integer:/^([1-9][0-9]*)$/,mbphone:/^[0-9]{11}$/,pstnumber:/^\d+(\.\d{1,2})?$/,pNubzero:/^[0]+(\.[0]{0,})?$/},e.Login=function(a){var b,c=$(a),d="javascript:;"==c.attr("data-ajax")?"javascript:;":c.attr("data-ajax")+"?"+c.attr("name")+"="+c.val();return e.ajaxgo(d,function(a){b=a.status?a.message:"网络问题,稍后再试。"},{status:1,message:""}),b},e.sumSort=function(a,b){e.ajaxgo(a,function(a){if(a.status){for(var c='<div class="dd J_j_nestable"><ol class="dd-list">',d=0,f=a.data.length;f>d;d++)c+='<li class="dd-item" data-id="'+a.data[d].id+'"><div class="dd-handle">'+a.data[d].sum+"</div></li>";return c+="</ol></div>",b(c),!1}e.prompt("请求超时","fail")},{status:1,message:"提示信息",data:[{id:1,sum:"10元"},{id:2,sum:"20元"},{id:3,sum:"30元"},{id:4,sum:"40元"},{id:5,sum:"50元"}]})},e.actionDate=function(a,b,c){e.ajaxgo(a,function(a){return 1!=a.status&&0!=a.status?(e.prompt("请求超时","fail"),!1):(e.setprompt(1==a.status?b:a.message,1==a.status?"success":"warning"),void c())},{status:0,message:"操作失败"})},$.extend(e,$.loader(d))}(window);