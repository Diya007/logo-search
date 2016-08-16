
	
	$("#search").on("click",function(){
	
		$(".aci, .acm, .afe").addClass("search-all")

		var program = $("#programType option:selected").text()
		var education =$("#level-of-education option:selected").text()

		if (program === "SEARCH ALL" && education===
			"SEARCH ALL") {
			$(".aci, .acm, .afe").removeClass("search-all")

		}

		else if(program !== "SEARCH ALL" && education!=="SEARCH ALL" ) {
			$(".aci."+program+"."+education).removeClass("search-all");
			$(".acm."+program+"."+education).removeClass("search-all");
			$(".afe."+program+"."+education).removeClass("search-all");
		}

		else if(program== "SEARCH ALL" && education!=="SEARCH ALL"){
			$(".aci."+education).removeClass("search-all");
			$(".acm."+education).removeClass("search-all");
			$(".afe."+education).removeClass("search-all");
		}
		else if(program!== "SEARCH ALL" && education=="SEARCH ALL"){
			$(".aci."+program).removeClass("search-all");
			$(".acm."+program).removeClass("search-all");
			$(".afe."+program).removeClass("search-all");
		}

	})







