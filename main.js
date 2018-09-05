$(() => {
            const parallax = document.getElementById("parallax");

            // when page load 
            $(document).ready(function() {
                    var delay = 0;

                     $('.word:lt(3)').each(function() {
                                $(this).delay(delay).animate({
                                    opacity: 0
                                }, 500);
                                delay += 500;
                            })
                    setTimeout(function() {
                           $('.header').css('display', 'none');
                           $('.main').css('display','flex');
                        },3000);

                    })

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
                        $('parallax').css("background-color", "maroon")
                    } else {
                        $('.tittle').fadeIn(3000);
                        $('parallax').css("background-color", "black")
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