/*!
 * DBCL
 * base
 * create: 2015/7/20
 */
/**
 * 基础模块
 * @module base
 * @since p132
 */
(function(window, undefined){

	/**
	 * 基础模块 - 交互逻辑
	 * @class base
	 * @since p132
	 */
	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function(){},
		WS		= window.WS || (window.WS = {}),
		init	= {},							//启动时加载程序
		base	= WS.base || (WS.base = {});	//接口程序


	base.dates = {
				cn: {
					days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
					daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
					daysMin: ['日', '一', '二', '三', '四', '五', '六', '日'],
					months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					monthsShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
					today: '今天',
				}
	};
	init.public = function(){//插件及公共方法初始化
		$('[data-rel=tooltip]').size() && $('[data-rel=tooltip]').tooltip();//按钮提示
		$('.J_date-pick').size() && $('.J_date-pick').datetimepicker({//单日期时间控件
			format: 'YYYY-MM-DD HH:mm',
			language: 'en',//语言
			pickDate: true,//日期
      pickTime: true,//设置时间
      hourStep: 1,
      minuteStep: 15,
      secondStep: 30,
      inputMask: true
		});
		$('input[type=file]').ace_file_input('update_settings',{//初始化input type=file设置
			'no_file':'未选择文件，只支持git、png、jpg格式',
			'btn_choose': '选择',
			'btn_change': '修改',
			'allowExt': ['gif','png','jpg']
		});
		$doc.on('change','.J_select',function(){//下拉选择查询
			var $this = $(this),
					selectedValue = $this.val(),
					selectedText  = $this.find('option:selected').text(),
					$searchQuery  = $this.parent().siblings().find('.search-query');
			$searchQuery.attr('name', selectedValue).val('').attr('placeholder',"请输入" + selectedText);
		}).on('click','.J_subBtn',function(){//表单提交
			var $btn = $('.J_search_btn'),
					$text = $(this).siblings('.J_search_text');
			$text.val($(this).attr('data-status'));
			$btn.parents('form').submit();
			return false;
		}).on('click', '.J_w_pages li:not([class=disabled]), .J_w_page', function(){ //分页
			var $this = $(this),
			$form = $('form'),
			$pageNo = $form.find('[name=pageNo]'),
			pageNo = $this.find('a').attr('pageNo') || $this.parent().prev('input').val(),
			pageTotal = $('.J_w_pages').attr('pageTotal');
			if(isNaN(pageNo)) {
				alert('请输入有效的数字！');
				return;
			}
			if(pageNo * 1 < 1) {
				pageNo = 1;
			}else if(pageNo * 1 > pageTotal * 1) {
				pageNo = pageTotal;
			}
			if($form && $form.length == 1) {
				if($pageNo.length < 1) {
					$pageNo = $('<input type="hidden" name="pageNo"/>');
					$form.append($pageNo);
				}
				$pageNo.val(pageNo);
				$form.submit();
			}
		})
		
		// .on('click','.J_pagination li a,.J_jump',function(){//分页
		// 	var $this = $(this),
		// 			$par = $this.parent(),
		// 			tag = $par.hasClass('disabled') || $par.hasClass('active') || $this.hasClass('J_jump'),
		// 	    $form = $this.parents('form'),
		// 	    max = $('.J_pgmax').text()*1,
		// 	    $input = $('.J_jupnb');
		// 	if(!tag){
		// 	 	$input.val($this.attr('pageNo'));
		// 	 	$form.submit();
		// 	}else if($this.hasClass('J_jump')){
		//  		var val = $input.val();
		//  		if(val=='')return false;
		//  		val!='' ? $input[0].setCustomValidity( isNaN(val) ? '请输入正确页码' : '') : val>max ? val = max : val<1 ? 1 : false;
		// 	}
		// })
		.on('input','.J_input',function(){
			var $this = $(this),
					len = $this.val().length,
					$span = $this.parent('div').next('div.help-block').find('span'),
					max = $this.attr('maxlength');
			if(len > max) return false;
			$span.text(max - len);
		});

		$('.J_login_input').size() && $('.J_login_input').each(function(){//ajax验证用户名和密码
			$(this).on('input',function(){
				base.verify(this,base.Login(this));
			});
		});

		if($('.J_input_verify').size()){//初始化设置为空验证提示信息,data-info属性定义信息
			var $input = $('.J_input_verify'),
					len = $input.size();
			for(var i=0;i<len;i++){
				if($input.eq(i).val()==''){
					$input[i].setCustomValidity('请输入' + $input.eq(i).attr('data-info'));
				}
			}
			$input.each(function(){
				var $this = $(this);
				$this.on('change',function(){
					base.verify(this,'');
				});
			});
		}
	}
	/**
	 * 信息验证
	 * @method base.verify
	 * @param {obj} this 自身对象
	 * @param {function} 执行Ajax函数
	 * @return {null}
	 */
	base.verify = function(i,fn){//登录验证
		i.setCustomValidity(i.value==""	? "请输入" + $(i).attr('data-info') : i.validity.patternMismatch===true ? '请输入' + $(i).attr('data-rex') : fn);
	}
	/**
	 * [setPrompt 设置提示信息]
	 * @param {[string]} prompt [提示信息]
	 * @param {[string]} status [信息状态]
	 */
	base.setprompt = function(prompt,status){
		base.setCookie('prompt',prompt);
		base.setCookie('promptStatus',status);
	}
	/**
	 * 兼容本地demo的ajax方法
	 * @method base.ajaxgo
	 * @since p132
	 * @param {string} url 请求链接
	 * @param {function} [fn] 方法
	 * @param {number|string|object} [demo] 测试数据
	 * @param {object} [data] 数据
	 * @param {string} [method=post] 请求方式
	 * @param {string} [datatype=json] 返回数据的格式
	 * @return {none}
	 */
	base.ajaxgo = function(url, fn, demo, data, method, datatype){
		fn = fn || Fn;
		url == 'javascript:;' ? fn(demo) : $[method || 'post'](url, data, fn, datatype || 'json');
	};

	/**
	 * 设置cookie
	 * @method base.setCookie
	 * @param {string} name 名称
	 * @param {string} [value=undefined] 值,默认不传参undefined为设置过期
	 * @param {number} [expires=undefined] 到期时间,单位:天,默认不设置浏览器关闭就清除,-1为设置过期
	 * @return {none}
	 */
	base.setCookie = function(name, value, expires){
		var d	= new Date();
		value === undefined && (expires = -1);
		expires && d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
		document.cookie = name + '=' + encodeURIComponent(value) + ';' + (expires ? 'expires=' + d.toGMTString() : '');
	};
	/**
	 * 读取cookie
	 * @method base.getCookie
	 * @param {string} name 名称
	 * @return {string}
	 */
	base.getCookie = function(name,nb){
		var arr	= document.cookie.split("; ")
		for(var i=0;i<arr.length;i++){
			var arrs = arr[i].split("=");
			if(arrs[0]==name){
				return decodeURIComponent(arrs[nb||1]);
			}
		}
		return '';
	};
	/**
	 * 信息提示框
	 * @method base.prompt
	 * @param {string} text 提示语
	 * @param {string} [status=warning] 状态分类为成功(success),警告(warning)(默认),失败(fail)
	 * @return {none}
	 */
	base.prompt = function(text, status){
		var $prompt	= $('<div class="prompt ' + (status || 'warning') + '">' + text + '</div>').appendTo('body');
		$prompt.fadeIn(function(){
			setTimeout(function(){
				$prompt.fadeOut(function(){
					$prompt.remove();
				});
			}, 2000);
		});
	};
	/**
	 * [operationalData 操作数据提示]
	 * @param  {[object]} $obj    [触发事件对象]
	 * @param  {[string]} message [操作前提示信息]
	 * @param  {[string]} prompt [操作后提示信息]
	 * @return {[none]}
	 */
	base.operationalData = function($obj,message,prompt){
		var url = $obj.attr('data-ajax'),
		prompt  = prompt || '操作成功！';
		base.confirm(message,function(){
			base.actionDate(url, prompt, function(){
				location.reload();
			})
		});
	}
	/**
	 * [confirm 弹出确认提示]
	 * @param  {[string]}   message  [提示内容]
	 * @param  {Function} 	fn [回调函数]
	 * @return {[none]}
	 */
	base.confirm = function(message,fn){
		bootbox.confirm({
			message: message,
			buttons: {
			  confirm: {
				 label: "确定",
				 className: "btn-primary btn-sm",
			  },
			  cancel: {
				 label: "取消",
				 className: "btn-sm",
			  }
			},
			closeButton: false,
			callback: function(result){
				result && fn();
			}
		});
	}
	/**
	 * 根据cookie提示
	 * @method base.promptCheck
	 * @since p52
	 * @return {null}
	 */
	init.promptCheck = function(){
		var prompt = base.getCookie('prompt'),
				status = base.getCookie('promptStatus');
		if(!prompt)return false;
		base.prompt(prompt,status);
		base.setprompt();
	};
	/**
	 * 拖曳效果
	 * @method base.nestable
	 * @param {string} selector 选择器
	 * @param {function} fn 回调
	 * @return {none}
	 */
	base.nestable = function($selector, nb, fn){
		$selector.size() && $selector.nestable({
			maxDepth : nb,
			dragStop : fn || Fn,
		}).find('.dd-handle a').on('mousedown', function(e){
			e.stopPropagation();
		});
	};
/**************************** begin p132 ****************************/
	init.P132_event = function(){//点播齿轮2-1
		$doc.on('click', '.J_operation', function(){//异常处理
			base.operationalData($(this),'确定处理这笔异常单吗？');
		}).on('submit','.J_login_form',function(){//记住账号
			if($('input[type=checkbox]')[0].checked){
				base.setCookie('userName',$('input[data-type=loginid]').val(),30)
			}
		}).on('click', '.J_delete', function(){//删除记录
			base.operationalData($(this),'确定删除这条接入信息吗？');
		});
		$('.J_login_input').size() && $('.J_login_input').each(function(){//ajax验证用户名和密码
			$(this).on('input',function(){
				base.verify(this,base.Login(this));
			});
		});
		$('input[data-type=loginid]').size() && $('input[data-type=loginid]').val(base.getCookie('userName',0));//获取已记住账号
		if($('.J_input_ct').size()){
			var $input = $('.J_input_ct'),
					len = $input.size();
			for(var i=0;i<len;i++){
				if($input.eq(i).val()==''){
					$input[i].setCustomValidity('联系电话和联系邮箱至少有一项必填');
				}
			}
			$input.each(function(){
				var $this = $(this);
				$this.on('change',function(){
					if($input.eq(0).val()=='' && $input.eq(1).val()==''){
						$input[0].setCustomValidity('联系电话和联系邮箱至少有一项必填');
						$input[1].setCustomValidity('联系电话和联系邮箱至少有一项必填');
					}
					else if(this.validity.patternMismatch===true){
						$input.removeAttr('required');
						$this.attr('required','required');
						$input[0].setCustomValidity('');
						$input[1].setCustomValidity('');
						this.setCustomValidity('请输入' + $this.attr('data-info'));
					}
					else{
						$input[0].setCustomValidity('');
						$input[1].setCustomValidity('');
						$input.removeAttr('required')
					}
				});
			});
		}
	}
/**************************** end p135 ****************************/
	$.extend(base, $.loader(init));

})(window);