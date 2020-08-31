//check off todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(300, function() { //Note: gives access to parent element; span = child, li = parent
		$(this).remove();
	}); 
	event.stopPropagation(); //stops the excess events from occuring
});

//add new todo
$("input[type='text']").keypress(function(event) { //which property refers to character code of key pressed
	if (event.which === 13) {
		//grab new todo from text input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});