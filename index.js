$(".sj").hover(function(){
	$("#yc").css("border","1px solid #D0D0D0");
	$(this).css("color","#ff6700");
	$("#"+$(this).attr("control")).stop().slideDown(500);
	$("#yc").height(230);
},function(){
	$("#"+$(this).attr("control")).stop().slideUp(500);
	$(this).css("color"," #424242");
	$("#yc").height(0);
	$("#yc").css("border","0px solid #D0D0D0");
})


$("#ul #ulli").mouseover(function(){
			
			$("#ulli #left-ul").css("display","block")
			
		})
$("#ul #ulli").mouseout(function(){
			
			$("#ulli #left-ul").css("display","none")
	})
