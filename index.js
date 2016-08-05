$(document).ready(function() {
// Create a function that will subtract the amount tendered by the user from the 
// sale price.
	//Needs to divide the change into dollars, quarters, dimes.... then assign the 
	//the total value for the change will be returnes along with the details on 
		//how many dollars and coins are returned.
		//*** if statement when inputs are wrong ****
	$("#buttonClick").click(function(){
		
	 	var amountDue = parseFloat($("#amountDue").val());
		var amountGiven = parseFloat($("#customerCash").val());

		//Check if the user put in a correct value
		if (amountGiven < 1 || amountDue < 1){
			var message = $("#errorMessage").text("Please put in a correct dollar amount!").append();
		}else{
			message = $("#errorMessage").hide();
			//Dollars
			var dollars = (amountGiven - amountDue).toFixed();
			var dollarOutput = $("#dollars").text(dollars);

			//Quarters
			var remaining = ((amountGiven-amountDue)%1);
			var quarters = Math.floor((remaining / .25).toFixed("2"));
			var quarterOutput = $("#quarters").text(quarters);
			
			//Dimes
			var dimes = Math.floor(((remaining - (quarters * .25)) / .10));
			var dimeOutput = $("#dimes").text(dimes);
			
			//nickels
			var nickels = Math.floor((((remaining - ((quarters * .25)+(dimes * .10))) / .05).toFixed("1")));
			var nickelOutput = $("#nickels").text(nickels);
			
			//Pennies
			var pennies =Math.floor((((remaining - ((quarters * .25)+(dimes * .10)+(nickels * .05))) / .01).toFixed("1")));
			var pennyOutput = $("#pennies").text(pennies);
		}		
	});
});

