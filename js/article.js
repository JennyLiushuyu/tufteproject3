	var index = 1 ;
	
	window.onload = function(){
		var timer = setInterval(changePic,3000)	
		
		$(".pic_option span").click(function(){
			var i = $(".pic_option span").index(this);
			clearInterval(timer);
			index = i;
			changePic();
			timer = setInterval(changePic,3000)	
		})
	
	
	  $(".pic_list>img").click(function(){
		  $("body").css("overflow","hidden");
		  $(".query_pic").css("top",$(window).scrollTop());
		  $(".query_pic").css("visibility","initial");
	  })
		
	}
	
	function changePic(){
		if(index==3){
			index = 0;	
		}
		$(".pic_option span").css("background-color","#A9A9A9");
		$(".pic_option span").eq(index).css("background-color","black");
		$(".pic_list>img").css("display","none");
		$(".pic_list>img").eq(index).fadeIn();
		index++;
	}
	
	function fullPic(){
		if($(".mobile_full").css("display")=="none"){ //pc端
			
		}else{
			$(".query_pic>div:nth-child(3)").css("display","none");
			$(".query_pic>div:nth-child(2)").css("height","77%");
			$(".fa.fa-arrows-alt").css("display","none");
		} 
	}
	
	function closeFull(){
		$("body").css("overflow","auto");
		$(".query_pic").css("visibility","hidden");
		if($(".mobile_full").css("display")=="none"){
			
		}else{
			$(".fa.fa-arrows-alt").css("display","block");
			$(".query_pic>div:nth-child(3)").css("display","block");
			$(".query_pic>div:nth-child(2)").css("height","65%");
		}
	}