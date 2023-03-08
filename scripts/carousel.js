
$(function(){
	
	let active = 0; 

	var liCount = $('.slider li').length;
    
	checkWindowSize();

    $('.slider li').each(function( index ) {
        $(this).data( "id", index );
		$(`<span data-id="${index}"></span>`).click(function(e){
			setNextSlide( $(this).data("id") );
        }).appendTo($('.navigator'))
    });

	// setActiveSlide( active );
	$(`.navigator span`)[active].classList.add('active');

	$('.prev').click(function(){ moveRight(); });

	$('.next').click(function(){ moveLeft();	});

	function setNextSlide( next ) {
		if (active < next) {
			for (let i = active + 1; i <= next; i++) {
				moveLeft();
			}
		} else {
			for (let i = active - 1; i >= next; i--) {
				moveRight();
			}
		}
	}

	function moveRight() {
        $('.slider ul li:last-child').prependTo('.slider ul');
		let next = active - 1;
		if (next < 0) { next = 5 }
		setNext(next);
	}
	
	function moveLeft() {
		$('.slider ul li:first-child').appendTo('.slider ul');
		let next = active + 1;
		if (next > 5) { next = 0 }
		setNext(next);
	}

	function setNext(next){
		$(`.navigator span`)[active].classList.remove('active');
		$(`.navigator span`)[next].classList.add('active');
		active = next;
	}

	function matchCurrentScreenSize(screenSize) {
		const photoWidth = 230;
		let widthSize = 268;

		for (let index = 1; index < 4 ; index++) {
			if (widthSize + photoWidth < screenSize){
				widthSize += photoWidth;
			}
		}
		return widthSize;
	}

	function checkWindowSize() {
		const currentScreenWidth = $( window ).innerWidth();
		const sliderMaxWidth = matchCurrentScreenSize(currentScreenWidth);
		$('#carousel-wrap').css( "maxWidth", sliderMaxWidth + "px");
	}

	$(window).resize(function() {
		checkWindowSize();
	}); 
  
    // slides with interval
    if(liCount > 1) {
		invertalValue = setInterval(function() {
			moveLeft();
		}, 5000);
	}
});