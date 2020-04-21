var ago = 0;

window.onload = function(){
	$(".head_banner").mousemove(function(e){
		var mouseX = e.screenX;
		var x = $(this).find("span").position().left;
		if(mouseX-x>100|x-mouseX>100){
			if(mouseX>$(this).width()-$(this).find("span").width()){
				return;
			}
			$(this).find("span").css("left",mouseX);	
		}
	})
	
	$(".head_banner").find("span").fadeIn().css("top","10.25rem");
	
	$("header").animate({
		height:$("header").css("max-height")
	})
	
	$(".item").find("div").mouseover(function(){
		$(".item").css("animation-play-state","paused");
	})
	
	$(".item").find("div").mouseout(function(){
		$(".item").css("animation-play-state","running");
	})
	
	$(".item").find("div").click(function(){
		
		if($(".column3").css("background-color")=="rgb(40, 40, 40)"){
			 $(".column3").css("background-color","#BB6C46");
		 }else{
			$(".column3").css("background-color","#282828");
		}
		
		if($(this).css("background-color")=="rgb(40, 40, 40)"){
			$(this).css({"background-color":"#E4DBCD","color":"black"});
		}else{
			$(this).css({"background-color":"#282828","color":"white"});
	   }	
	})
	
	
	
	}
	
	// function slideNav(){
	// 	var obj = $("#nav-bar").find("i");
	//    if(obj.attr("class")=="fa fa-bars"){
	// 	   obj.removeClass().addClass("fa").addClass("fa-plus");
	// 	   $(".head.nav_side").css({"height":$(document).height(),"display":"block"});
	// 	   obj.css("transform","rotateZ(45deg)");
	// 	   $("body").animate({
	// 	   	left:"-50%"
	// 	   })
	//    }else{
	// 	   obj.removeClass().addClass("fa").addClass("fa-bars");
	// 	   obj.css("transform","rotateZ(0deg)");
	// 	   $("body").animate({
	// 	   	left:"0"
	// 	   },function(){
	// 		   $(".head.nav_side").css("display","none");
	// 	   })
	//    }
	// }
	
	
	// function slideNavlist(e){
	// 	if($(e).attr("class")=='fa fa-angle-down'){
	// 		$(e).removeClass().addClass("fa").addClass("fa-angle-up").parent("li").find(".nav-side-list").slideToggle();
	// 	}else{
	// 		$(e).removeClass().addClass("fa").addClass("fa-angle-down").parent("li").find(".nav-side-list").slideToggle();
	// 	}
	// }
	
	$(window).scroll(function(e){
		var now = $(window).scrollTop();
		var pos = now - ago;
		ago = now;
		
		
		if($("#nav-bar").find("i").attr("class")!="fa fa-bars"){
			slideNav();
		}
		
		
		if(now<$("header").height()){
			$("header").css({"top":now});
		}
		
		if(now+$(window).height()>$(".col1-wrap-txt").offset().top){
			$(".col1-wrap-txt").fadeIn().css("display","flex").animate({
				top:"0rem"
			})
		}
		
		if(now+$(window).height()>$(".col6_foot_pic").offset().top+400){
			$(".col6_foot_pic").css("margin-top","50%");
			$(".col6_foot_pic").find("img").css("left","0");
		}
		
		
		$(".col_book").each(function(){ //book
			if(now+$(window).height()>$(this).offset().top+200){
					$(this).animate({
						left:"0"
					},800,function(){
						$(this).find(".col_book_right").fadeIn().animate({
							top:"0"
						})
					})
			}
		});

		
		$(".col-wrap-sign").each(function(){//sign
			if(now+$(window).height()>$(this).offset().top+200){
				$(this).css("padding-left","0");
			}
		})
	
		
		if(now>$("nav").height()){
			$("nav").css({"background":"#282828","box-shadow":"0 1px 5px black"});
		}else{
			$("nav").css({"background":"none","box-shadow":"none"});
		}
	})
	


