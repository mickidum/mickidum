$(document).foundation();

$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$('.item').on('click', function(event) {
        event.preventDefault();
        $('.item').removeClass('active');
        $(this).addClass('active');
        $('.screen').addClass('holder');
        
        $('.ttl').html($(this).html());
        var http = $(this).attr('href');
        
        $('.spaceWrap').html('<iframe class="frama viewPort" src="' + http +'"></iframe>');
        $('.frama').load(function(){
        $('.screen').removeClass('holder');
        });
        
    });
    
    

});
