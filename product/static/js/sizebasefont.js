// 
(function(){
	var b = document.documentElement;
	var a = function(){
		var a = b.getBoundingClientRect().width;
		b.style.fontSize=.0402576489533*(1242<=a?1242:a)+"px";
	   }
	   var c = null;
	   window.addEventListener("resize",function(){
	   	clearTimeout(c);
	   	c=setTimeout(a,200);
	   });
	   a();
})();