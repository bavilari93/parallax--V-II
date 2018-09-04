$(() => {
    const parallax = document.getElementById("parallax");

    // event listener 
    window.addEventListener('scroll', function() {

    	const pageTop = $(this).scrollTop()
        const pageBottom = pageTop + $(this).height()
        var tags = $('section')
        // value that the user has scrolled from the top 
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + "px";
        if (pageTop > 100) {
            $('.tittle').fadeOut('slow');
        } else {
            $('.tittle').fadeIn(3000);
        }


        for (var i = 0; i< tags.length; i++){
        	let tag = tags[i]
        	if ($(tag).position().top < pageBottom){
        		$(tag).addClass('visible')
        	}else{
        		$(tag).removeClass('visible')
        	}
        }
    })


}) // end of jquery