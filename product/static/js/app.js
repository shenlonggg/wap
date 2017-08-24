var App = {
	// fullpage for story
	story:function(){
		// 自定义 延迟显示方法；
		var initEl = function(timer,a,b,c){
			setTimeout(function(){
				a.css('opacity',1);
				b.addClass(c);
			},timer);
		}
		var desEl = function(timer,a,b,c) {
			setTimeout(function(){
				a.css('opacity',0);
				b.removeClass(c);
			},timer);
		}
		// init fullpage options;
		var fullpageInit = {
			loopBottom: true,
			afterLoad: function(anchorLink, index){
		        var item  = $(this);
		        var h3    = item.find('h3');
		        var p     = item.find('p');
		        var img   = item.find('h3 img');
		        var tit   = item.find('p.red');
		        var txt   = item.find('p:last-child');
				initEl(0,h3,img,'animated fadeInDown');
				initEl(600,tit,tit,'animated fadeInLeft');
				initEl(1200,txt,txt,'animated fadeInRight');
		    },
		    onLeave:function(index, nextIndex, direction) {
		    	var item = $(this);
		        var h3    = item.find('h3');
		        var p     = item.find('p');
		        var img   = item.find('h3 img');
		        var tit   = item.find('p.red');
		        var txt   = item.find('p:last-child');
		        desEl(300,h3,img,'animated fadeInDown');
		        desEl(300,tit,tit,'animated fadeInLeft');
		        desEl(300,txt,txt,'animated fadeInRight');
		    }
		}
		// call fullpage plugin;
		$('#fullPage').fullpage(fullpageInit);
	},

	// menu part
	menu:function(){
		var aside = $('aside');
		var mu    = $('header em');
		var asideMu = $('#menu h4 a');
		var winw  = $(window).width()*.75;
		mu.click(function(){aside.animate({'left':0},350);});
		asideMu.click(function(){aside.animate({'left':-winw},350);});
	},

	// pub tab spans 
	adtype:function(){
		var label = $('article.pub .type label');
		label.each(function(i){
			$(this).click(function(){
				label.removeClass('on');
				$(this).addClass('on');
			})
		})

	},

	// footer formbox 
	bottompub:function(){
		var pubtn   = $('footer > button:last-child');
		var combox  = $('footer > .combox');
		var footHeight = $('footer').outerHeight();
		var inp     = $('footer > .combox input');
		var btn     = $('footer > .combox button');
		console.log(footHeight);
		pubtn.click(function(event){
			event.stopPropagation();
			combox.animate({'top':-1},500);
		});
		
		$(document).click(function(event){
			var el = $(event.target);
			if(el == combox || el == btn || el == inp){
			return ;
			}
			combox.animate({'top':footHeight},500);
		})
	},

	login:function(){
		var $user = $("input[type='text']"),
			$pwd  = $("input[type='password']"),
		    $btn  = $('#login');
		$btn.click(function(){
			var user = $user.val(), pwd = $pwd.val();
			if(pwd == '' || user == ''){
				App.dialog('信息错误','对不起，您填写的用户名或密码为空值，请重新填写。','重新填写');
			}
			else {
				App.diaload();
				$.post('./auth.php',{'user':user,'password':pwd},function(data){
					if(data['success']){
						App.dialoadfade();
						window.location.href="./index.php";
					}
					else {
						App.dialoadfade();
						setTimeout(function(){
							App.dialog('登陆错误','对不起，您填写的用户名或密码错误，请重新填写。','重新填写');
						},400);
					}
				},'json');
				}
		});

	},

	dialog:function(title,content,btntxt){
		var      opa = $('#opa');
		var diatitle = $('#opa .dialog .diatitle');
		var diabox   = $('#opa .dialog .diabox');
		var btn      = $('#opa .dialog .btn button');
		diatitle.text(title);
		diabox.text(content);
		btn.text(btntxt);
		opa.fadeIn();
		btn.click(function(){
			opa.fadeOut();
		});
	},

	diaload:function(){
		var opa = $('#diaopa');
		opa.fadeIn();
	},

	dialoadfade:function(){
		var opa = $('#diaopa');
		opa.fadeOut(400);
	}
	




};




