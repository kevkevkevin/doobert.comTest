$('a.advToggle').click(function(e) {
    e.preventDefault(); // prevent the default action
    e.stopPropagation; // stop the click from bubbling
    $("a.basicToggle").removeClass('close');
	$("a.advToggle").addClass('close');
	$("section.basicMode").addClass('close');
	$("section.advanceMode").removeClass('close');
	$("ul.advNavMenu").removeClass('hidden');
});

$('a.basicToggle').click(function(e) {
    e.preventDefault(); // prevent the default action
    e.stopPropagation; // stop the click from bubbling
    $("a.advToggle").removeClass('close');
	$("a.basicToggle").addClass('close');
	$("section.advanceMode").addClass('close');
	$("section.basicMode").removeClass('close');
	$("ul.advNavMenu").addClass('hidden');
});