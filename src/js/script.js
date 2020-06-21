function toggleMenu(visible) {
	document.querySelector('.menu__list').classList.toggle('show', visible);
}

document.querySelector('.menu__logo__hamburger').addEventListener('click', function(e) {
	e.preventDefault();
	toggleMenu();
});
