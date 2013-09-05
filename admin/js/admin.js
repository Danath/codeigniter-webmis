$(function(){
	//版本信息
	$('#webmisVersion').webmisVersion();
	//导航菜单
	var NavId = $('#NavId').text();
	var Nav = $('#webmis_menu');
	$('#nav_'+NavId).addClass('nav_an');
	Nav.webmis('menu');
	Nav.find('.menu').hover(function(){
		Nav.find('.nav_an').removeClass('nav_an');
		$(this).addClass('nav_an');
	},function(){
		//$(this).removeClass('nav_an');
		//$('#nav_'+NavId).addClass('nav_an');
	});
	//显示、隐藏头部
	$('#TopMenus').click(function(){
		if($("#top").is(":hidden")){
			$("#top").slideDown('fast');
		}else{
			$("#top").slideUp('fast');
		}
		return false;
	});
	//全选,全不选
	$('#checkboxY').click(function () {
		$(this).hide();
		$(this).parent().parent().parent().parent().find("input:checkbox").prop("checked", true);
		$('#checkboxN').show().click(function () {
			$(this).hide();
			$('#checkboxY').show();
			$(this).parent().parent().parent().parent().find("input:checkbox").prop("checked", false);
			return false;
		});
		return false;
	});
});
/*
** ******动作******
*/
/*删除*/
function actionDel(dataUrl,targetUrl) {
	var id = $('#listBG').webmis('GetInputID',{type:' '});
	if(id!=' '){
		$.webmis.win('open',{title:'删除',width:210,height:140,content:'<div class="delData"><input type="submit" id="delSub" value="彻底删除" /></div>'});
		$('#delSub').webmis('SubClass'); //按钮样式
		//点击提交
		$('#delSub').click(function(){
			$.post($base_url+dataUrl,{'id':id},function(data){
				if(data){
					$.webmis.win('close');
					var url = $('#getUrl').text();
					$.webmis.win('open',{content:'<b class="green">删除成功</b>',target:targetUrl+url,AutoClose:3});
				}else{
					$.webmis.win('close');
					$.webmis.win('open',{content:'<b class="red">删除失败</b>',AutoClose:3});
				}
			});
		});
	}else{
		$.webmis.win('open',{content:'<b class="red">请选择！</b>',AutoClose:3});
	}
}
/*审核*/
function actionAudit(dataUrl,targetUrl) {
	var id = $('#listBG').webmis('GetInputID',{type:' '});
	if(id!=' '){
		$.webmis.win('open',{title:'审核',width:240,height:140,content:'<div class="delData"><input type="submit" id="auditSub1" value="通过" />&nbsp;&nbsp;<input type="submit" id="auditSub2" value="不通过" /></div>'});
		$('#auditSub1,#auditSub2').webmis('SubClass'); //按钮样式
		//通过
		$('#auditSub1').click(function(){
			auditData(id,'1');
		});
		//不通过
		$('#auditSub2').click(function(){
			auditData(id,'2');
		});
	}else{
		$.webmis.win('open',{content:'<b class="red">请选择！</b>',AutoClose:3});
	}
	//提交数据
	var auditData = function(id,state){
		$.post($base_url+dataUrl,{'id':id,'state':state},function(data){
			if(data){
				$.webmis.win('close');
				var url = $('#getUrl').text();
				$.webmis.win('open',{content:'<b class="green">审核成功</b>',target:targetUrl+url,AutoClose:3});
			}else{
				$.webmis.win('close');
				$.webmis.win('open',{content:'<b class="red">审核失败</b>',AutoClose:3});
			}
		});
	}
}