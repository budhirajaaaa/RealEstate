console.log("hello");
const header = document.querySelector('.top nav');
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 750) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
