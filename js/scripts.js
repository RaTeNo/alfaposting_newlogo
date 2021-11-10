$(() => {
	// Отзывы
	if ($('.reviews .swiper-container').length) {
		new Swiper('.reviews .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 30,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Cookie
	$('.cookie_agree .close').click(function (e) {
		e.preventDefault()

		$('.cookie_agree').fadeOut(200)

		if ($(this).hasClass('agree')) {
			localStorage.setItem('cookie_agree', 1)
		}
	})

	if (!localStorage.getItem('cookie_agree')) {
		$('.cookie_agree').fadeIn(300)
	}


	// Отправка форм
	$('body').on('submit', '.form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false
		})
	})


	// Анимация появления блоков
	inView.offset($(window).innerHeight() * 0.25)

	if ($('.first_section').length) {
		inView('.first_section .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInRight')
			})
	}

	if ($('.universal_agency').length) {
		inView('.universal_agency .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInLeft')
			})
	}

	if ($('.transparent_work').length) {
		inView('.transparent_work .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInRight')
			})
	}

	if ($('.where_advertise').length) {
		inView('.where_advertise .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInLeft')
			})
	}

	if ($('.mission').length) {
		inView('.mission .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInRight')
			})
	}

	if ($('.team').length) {
		inView('.team .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInLeft')
			})
	}

	if ($('.any_device').length) {
		inView('.any_device .img')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInRight')
			})
	}

	if ($('.perekhvat').length) {
		inView('.perekhvat .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInLeft')
			})
	}

	if ($('.autoprodvijenie').length) {
		inView('.autoprodvijenie .image')
			.on('enter', el => {
				$(el).addClass('animate__animated animate__fadeInRight')
			})
	}

	
})