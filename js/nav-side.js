function slideNav(){
		var obj = $("#nav-bar").find("i");
	   if(obj.attr("class")=="fa fa-bars"){
		   obj.removeClass().addClass("fa").addClass("fa-plus");
		   $(".head.nav_side").css({"height":$(document).height(),"display":"block"});
		   obj.css("transform","rotateZ(45deg)");
		   $("body").animate({
		   	left:"-50%"
		   })
	   }else{
		   obj.removeClass().addClass("fa").addClass("fa-bars");
		   obj.css("transform","rotateZ(0deg)");
		   $("body").animate({
		   	left:"0"
		   },function(){
			   $(".head.nav_side").css("display","none");
		   })
	   }
	}
	
	
	function slideNavlist(e){
		if($(e).attr("class")=='fa fa-angle-down'){
			$(e).removeClass().addClass("fa").addClass("fa-angle-up").parent("li").find(".nav-side-list").slideToggle();
		}else{
			$(e).removeClass().addClass("fa").addClass("fa-angle-down").parent("li").find(".nav-side-list").slideToggle();
		}
	}