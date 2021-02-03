$('.slide1').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:false,
    	autoplay: true,
    	dots: true,
    	slideSpeed : 4000,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:1
        	},
        	1000:{
        	    items:1
        	}
    	}
	})

    $('.slide2').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay: true,
        dots: true,
        slideSpeed : 4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Set the date we're counting down to
var countDownDate = new Date("November 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(window).scroll(function(){                 
    $('.timeline article').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
                windowHeight  = $(window).height(),
                breakPoint    = windowHeight*0.9;

            if(distance > breakPoint) {
                $(this).addClass("more-padding");   
            }  if(distance < breakPoint) {
                $(this).removeClass("more-padding");    
            }
    });
});