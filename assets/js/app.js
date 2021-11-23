if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(e){

			let el_link = this.querySelector('a[data-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}


		})
	});

}

$('document').ready(function() {
    
    // image slider owl carousel

    // $('.image-carousel').owlCarousel({
    //     loop:false,
    //     margin:0,
    //     nav: false,
    //     dots: false,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:false
    //         },
    //         600:{
    //             items:1,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:false,
    //             loop:false
    //         }
    //     }
    // })

    $('.slider-main').bxSlider({
        mode: 'fade',
        touchEnabled: false,
    });

    $('.testimonial-carousel').bxSlider({
        
    });

    // $('.testimonial-carousel').owlCarousel({
    //     loop: true,
    //     responsiveClass: true,
    //     dots: false,
    //     nav: false,
    //     navText: ['<', '>'],
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         1000: {
    //             items: 1,
    //         }
    //     }
    
    // })

    // client carousel

    $('.client-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: false,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            }
        }
    
    })

    // page scroll top function

    scrollBtn = document.querySelector(".scrollTop");

window.onscroll = function () { scrollFunction() };
scrollBtn.addEventListener('click', topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// navbar toggle on hover


// gallary page masonary

$('.gallery-grid').colcade({
    columns: '.grid-col',
    items: '.gallery-item'
  })

//   lightbox gallery

lightbox.option({
    disableScrolling: true,
  })
})

// video play

// let playBtn1 = document.querySelectorAll('.videoPlay1');
// let playBtn2 = document.querySelectorAll('.videoPlay2');

// playBtn1.addEventListener('click', ()=>{
//     playBtn1.style.display = 'none';
// })

// playBtn2.addEventListener('click', ()=>{
//     playBtn2.style.display = 'none';
// })