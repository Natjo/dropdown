/**
 * Display an hidden message in absolute box
 * 
 * @param {string} selector 
 * 
 */

 const dropdown = el => {
	const focusable = 'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])';
	const clicktouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
	const clickOut = e => !el.contains(e.target) && close();
	const links = el.querySelectorAll(focusable);
	const summary = el.querySelector('.summary');
	let isOpen = false;
	let inc = -1;
	
	const focus = e => {
		if(e.key === 'ArrowDown') inc++;
		if(e.key === 'ArrowUp') inc--;
		if(e.key === 'Enter') inc = 0;
		if(e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter'){
			e.preventDefault();
			!isOpen && open();
			if(inc < 0) inc = links.length-1;
			if(inc > links.length-1) inc = 0;
			links[inc].focus();
		}	
	}

	const keydown = e => {
		if(e.key === 'Tab') close();
		if(e.key === 'Escape'){
			summary.focus();
			close();
		}
		!el.contains(document.activeElement) && close();
	}

	const open = () => {
		isOpen = true;
		summary.setAttribute('aria-expanded', true);
		window.addEventListener(clicktouch, clickOut);
		document.addEventListener('keydown', keydown);
	}
	
	const close = () =>  {
		isOpen = false;
		summary.setAttribute('aria-expanded', false);
		document.removeEventListener('keydown', keydown);
		document.removeEventListener('keydown', focus);
		window.removeEventListener(clicktouch, clickOut);
		
		// focus next element
		const focusables = document.querySelectorAll(focusable);
		const lastLink = links[links.length - 1];
		focusables.forEach((link,i) => link == lastLink && focusables[i].focus());
	};
	
	summary.onfocus = () => document.addEventListener('keydown', focus);
	summary.onclick = () => summary.getAttribute('aria-expanded') === 'true' ? close() : open();
}

export default dropdown;