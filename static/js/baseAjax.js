/*!
 * baseAjax
 * create: 2014/3/31
 */

/**
 * 基础模块
 *
 * @module base
 * @since p52
 */
(function(window, undefined) {

  /**
	 * 基础模块 - 业务逻辑
	 * @class baseAjax
	 * @since p52
	 */
		var $win = $(window), 
				$doc     = $(document), 
				WS       = window.WS || (window.WS = {}), init = {}, // 启动时加载程序
				base     = WS.base || (WS.base = {}); // 接口程序



  /**
	 * 常用正则
	 * @property base.regs
	 * @since 121
	 * @type object
	 */
    base.regs = {
        s_5_59 : /^[^\s]{5,59}$/, // 全匹配5-59位
        s_6_59 : /^[^\s]{6,59}$/, // 全匹配6-59位
        s_3_15 : /^[^\s]{3,15}$/, // 全匹配3-15位
        s_5_15 : /^[^\s]{5,15}$/, // 全匹配5-15位
        s_5_19 : /^[^\s]{5,19}$/, // 全匹配5-19位
        s_2_10 : /^[^\s]{2,10}$/, // 全匹配2-10位
        s_0_50 : /^[^\s]{0,50}$/, // 全匹配0-50位
        s_0_10 : /^[^\s]{0,10}$/, // 全匹配0-10位
        s_w_5_15 : /^[a-z0-9]{5,15}$/i, // 全匹配5-15位字母(大小写不敏感)或数字
        w_5_19 :/^[a-z0-9]{5,19}$/i, // 全匹配5-19位
        letters : /[a-z]+/i, // 有字母(大小写不敏感)
        numbers : /\d+/,//匹配有数字
        numBers : /^\d+$/, //只匹配数字
		nums : /^[\d][\d\s]+$/,
		pNumbers : /^[1-9][0-9]*$/, //正整数
		pNumber : /^\d+(\.(\d{1,}))?$/ , //正数
        pNuberss: /^[1-9][0-9]{0,}(\.(\d{1,}))?$/ , //非0开头正数,可以有小数 
        no_money: /^\d+.\d{2}$/,    //小数点后只有两位小数
        two_money: /^\d+.\d{1}$/,    //小数点后只有一位小数
        allnumbers: /^\d{0,}$/,  //全部是数字
		asasda: /^-?\d+%$/,	//整数
		num: /^\d+.\d+$/, //有小数的数字
		positive_integer: /^([1-9][0-9]*)$/, //非0开头,可以有0的正整数
		mbphone: /^[0-9]{11}$/, //匹配11位数字
		pstnumber: /^\d+(\.\d{1,2})?$/, //匹配大于0的数,小数点后只有两位
		pNubzero : /^[0]+(\.[0]{0,})?$/
};

	/** ************************** begin p121 *************************** */
	/**
	 * 登录验证
	 * @method base.Login
	 * @since p121
	 * @param {obj} input 对象
	 * @return {string}
	 */
	base.Login = function(i){
		var $this  = $(i),
				url = $this.attr('data-ajax') == "javascript:;" ? "javascript:;" : $this.attr('data-ajax') + '?' + $this.attr('name') + '=' + $this.val(),
				msg;
		base.ajaxgo(url,function(d){
			if(d.status){
				msg = d.message;
			}else{
				msg = "网络问题,稍后再试。"
			}
		},{status:1, message:''});
		return msg;
	}
	/**
	 * [sumSort description]
	 * @param  {[string]}   url [请求地址]
	 * @param  {Function} fn  [回调函数]
	 * @return {[none]}
	 */
	base.sumSort = function(url,fn){
		base.ajaxgo(url,function(d){
			if(d.status){
				var html = '<div class="dd J_j_nestable"><ol class="dd-list">';
				for(var i=0,len=d.data.length;i<len;i++){
					html +='<li class="dd-item" data-id="' + d.data[i].id + '">' + '<div class="dd-handle">' + d.data[i].sum + '</div>' + '</li>'
				}
				html +='</ol></div>'
				fn(html);
				return false;
			}
			base.prompt('请求超时','fail');
		},{"status":1,"message":'提示信息',"data":[{"id":1,"sum":"10元"},{"id":2,"sum":'20元'},{"id":3,"sum":"30元"},{"id":4,"sum":"40元"},{"id":5,"sum":"50元"}]});
	}
	/**
	 * [actionDate 删除数据操作]
	 * @param  {[string]}   url    [AJAX请求地址]
	 * @param  {[string]}   prompt [提示信息]
	 * @param  {Function} fn     [回调函数]
	 * @return {[none]}
	 */
	base.actionDate = function(url, prompt, fn){
		base.ajaxgo(url,function(d){
			if(d.status != 1 && d.status != 0){
				base.prompt('请求超时','fail');
				return false;
			}
			base.setprompt(d.status==1 ? prompt : d.message, d.status==1 ? 'success' : 'warning');
			fn();
		},{status:0,message:"操作失败"});
	}
	/** ************************** end p121 *************************** */
	$.extend(base, $.loader(init));

})(window);