$(() => {

		// top nav 
		 const topNav = document.getElementById("myTopNav");

    $(".icon").click(function() {
        if (topNav.className === "top-nav") {
            topNav.className += " responsive";
            // else is in case of unclick
        } else {
            topNav.className = "top-nav"
        }

    })
            

            // when page load 
            $(document).ready(function() {
                    var delay = 0;
 

                     $('.word:lt(3)').each(function() {
                                $(this).delay(delay).animate({
                                    opacity: 0
                                }, 700);
                                delay += 700;
                            })
                    setTimeout(function() {
                           $('.header').css('display', 'none');
                           $('.main').css({'display':'flex', 'transition':'opacity 0.5s ease-in-out', 'left': '0'});
                        },2000);

                    })

                // event listener 

                const parallax = document.getElementById("parallax");
                window.addEventListener('scroll', function() {

                    const pageTop = $(this).scrollTop()
                    const pageBottom = pageTop + $(this).height()
                    var tags = $('section')
                    // value that the user has scrolled from the top 
                    let offset = window.pageYOffset;
                    parallax.style.backgroundPositionY = offset * 0.4 + "px";
                    // transition of fad in fave out content
                    if (pageTop > 100) {
                        $('.tittle').fadeOut('slow');
                        $('#parallax').css("background-color", "maroon")
                    } else {
                        $('.tittle').fadeIn(3000);
                        $('#parallax').css("background-color", "black")
                    }


                    for (var i = 0; i < tags.length; i++) {
                        let tag = tags[i]
                        if ($(tag).position().top < pageBottom) {
                            $(tag).addClass('visible')
                        } else {
                            $(tag).removeClass('visible')
                        }
                    }
                })


            }) // end of jquery