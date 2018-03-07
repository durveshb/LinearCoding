// text field to display which schemes is currently used. Empty in the start
var text = "";

// Implementation of bipolar-nrz
$("#bipolarNRZ").click(function(){
    
    // taking value from the input field
	var input = $("input").val();
    
    // 	cheching if the input is binary
	var valid = isBinary(input);
    
    // 	If the input is binary only then proceed or else display error msg
	if(valid){
		var x = 0;
		var Data = [];
        //generate data points according to the scheme
		for(var i= 0 ; i < input.length ; i++)
		{
			if(input[i] == "0")
			{
				Data.push({x:x , y:-1});
				x += 1;
				Data.push({x:x , y:-1});
			}else{
				Data.push({x:x , y:1});
				x += 1;
				Data.push({x:x , y:1});
			}
		}
		
        // clear out the previous graph
		$(".chart").css('display' , '');
        
        //set the proper text 		
		text = "Bi-Polar NRZ";
		
		//plot out the graph
		chartOut(Data,text);
	}
});


// Implementation of Unipolar-nrz
$("#unipolarNRZ").click(function(){
    
    // taking value from the input field
	var input = $("input").val();
	
	// 	cheching if the input is binary
	var valid = isBinary(input);
	
	 // 	If the input is binary only then proceed or else display error msg
	if(valid){
		var x = 0;
		var Data = [];
		
		//generate data points according to the scheme
		for(var i= 0 ; i < input.length ; i++)
		{
			if(input[i] == "0")
			{
				Data.push({x:x , y:0});
				x += 1;
				Data.push({x:x , y:0});
			}else{
				Data.push({x:x , y:1});
				x += 1;
				Data.push({x:x , y:1});
			}
		}
		
		 // clear out the previous graph
		$(".chart").css('display' , '');
		
		//set the proper text 
		text = "Uni-Polar NRZ";
		
		//plot out the graph
		chartOut(Data,text);
	}
});


// Implementation of AMI
$("#AMI").click(function(){
    
    // taking value from the input field
	var input = $("input").val();
	
	// 	cheching if the input is binary
	var valid = isBinary(input);
	
	 // 	If the input is binary only then proceed or else display error msg
	if(valid){
		var x = 0;
		var Data = [];
		var count = 0;
		
		//generate data points according to the scheme
		for(var i= 0 ; i < input.length ; i++)
		{
			if(input[i] == "0")
			{
				Data.push({x:x , y:0});
				x += 1;
				Data.push({x:x , y:0});
			}else{
				if(count%2 == 0){
					Data.push({x:x , y:1});
					x += 1;
					Data.push({x:x , y:1});
				}else{
					Data.push({x:x , y:-1});
					x += 1;
					Data.push({x:x , y:-1});
				}
				count = count + 1;
			}
		}
		
	    // clear out the previous graph
		$(".chart").css('display' , '');
		
		//set the proper text 
		text = "AMI";
		
		//plot out the graph
		chartOut(Data,text);
	}
});


// Implementation of Pseudoternary
$("#Pseudoternary").click(function(){
    
    // taking value from the input field
	var input = $("input").val();
	
	// 	cheching if the input is binary
	var valid = isBinary(input);
	
	 // 	If the input is binary only then proceed or else display error msg
	if(valid){
		var x = 0;
		var Data = [];
		var count = 0;
		
		//generate data points according to the scheme
		for(var i= 0 ; i < input.length ; i++)
		{
			if(input[i] == "1")
			{
				Data.push({x:x , y:0});
				x += 1;
				Data.push({x:x , y:0});
			}else{
				if(count%2 == 0){
					Data.push({x:x , y:1});
					x += 1;
					Data.push({x:x , y:1});
				}else{
					Data.push({x:x , y:-1});
					x += 1;
					Data.push({x:x , y:-1});
				}
				count = count + 1;
			}
		}
		
		// clear out the previous graph
		$(".chart").css('display' , '');
		
		//set the proper text 
		text = "Pseudoternary";
		
		//plot out the graph
		chartOut(Data,text);
	}
});

// Reset function to clear out the text and graph. Make page ready to take next input
$("#reset").click(function(){
	$("input").val("")
	$(".chart").fadeOut(200);
});

//Function to plot out the graph based on the data points passed as the argument.
function chartOut(Data,title){
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: title
		},
		axisY:{
			includeZero: false
		},
		data: [{
			type: "line",
			dataPoints: Data}],
	});
	chart.render();
}

//Validation : checking if the input is binary
function isBinary(input){
	for(var i = 0 ; i < input.length ; i++)
	{
	   //check if input is either 0 or 1
		if(input[i] == '1' || input[i] == '0'){
		}else{
			$("input").val("")
			$(".chart").fadeOut();
			alert("Invalid Input(Only binary strings accepted!)");
			return false;
		}
	}
	return true;
}