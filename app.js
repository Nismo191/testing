var Me = {
	printFirstName: function(){
		console.log("My name is Ben");
		console.log(this === Me);
	}
}
Me.printFirstName();