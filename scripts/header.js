// header.js
document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuButton = document.getElementById('mobile-menu-button');
	const mobileMenu = document.getElementById('mobile-menu');
	const menuIcon = document.getElementById('menu-icon');
	const closeIcon = document.getElementById('close-icon');

	// Toggle mobile menu
	mobileMenuButton.addEventListener('click', () => {
		const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

		// Toggle menu visibility
		mobileMenu.classList.toggle('hidden');

		// Toggle icons
		menuIcon.classList.toggle('hidden');
		closeIcon.classList.toggle('hidden');

		// Update aria-expanded attribute
		mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

		// Prevent body scrolling when menu is open
		document.body.style.overflow = isExpanded ? '' : 'hidden';
	});

	// Close menu when clicking on a link (for single page applications)
	const mobileLinks = mobileMenu.querySelectorAll('a');
	mobileLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.add('hidden');
			menuIcon.classList.remove('hidden');
			closeIcon.classList.add('hidden');
			mobileMenuButton.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		const isMenuOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
		const isClickInsideMenu = mobileMenu.contains(e.target);
		const isClickOnButton = mobileMenuButton.contains(e.target);

		if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
			mobileMenu.classList.add('hidden');
			menuIcon.classList.remove('hidden');
			closeIcon.classList.add('hidden');
			mobileMenuButton.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		}
	});

	// Close menu on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && mobileMenuButton.getAttribute('aria-expanded') === 'true') {
			mobileMenu.classList.add('hidden');
			menuIcon.classList.remove('hidden');
			closeIcon.classList.add('hidden');
			mobileMenuButton.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		}
	});
});