/**
 * Display an hidden message in absolute box
 * 
 * @param {string} selector 
 * 
 */

 const dropdown = (sel) => {
	const clicktouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
	const clickOut = e => !sel.contains(e.target) && close();
	const links = sel.querySelectorAll('a');
	const summary = sel.querySelector('.summary');
	let inc = -1;
	let isOpen = false;
	
	const keydown = e => {
		if(e.key === 'ArrowDown') inc++;
		if(e.key === 'ArrowUp') inc--;
		if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
			e.preventDefault();
			!isOpen && open();
			if(inc<0) inc = links.length-1;
			if(inc>links.length-1) inc = 0;
			links[inc].focus();
		}
		if(e.key === 'Enter'){
			e.preventDefault();
			!isOpen && open();
		}
		if(e.key === 'Tab'){
			close();
		}		
		if(e.key === 'Escape'){
			summary.focus();
			close();
		}
		!sel.contains(document.activeElement) && close();
	}

	const open = () => {
		isOpen = true;
		summary.setAttribute('aria-expanded', true);
		window.addEventListener(clicktouch, clickOut, true);
		setTimeout(() => {
			inc = 0;
			links[0].focus();
		},50);
	}

	const close = () =>  {
		const ggg = document.querySelectorAll('button');
		setTimeout(() => {
			ggg.forEach((btn,i) => {
				if(btn === summary) ggg[i+1].focus();
			});
		},500);
		isOpen = false;
		summary.setAttribute('aria-expanded', false);
		document.removeEventListener('keydown', keydown);
		window.removeEventListener(clicktouch, clickOut);
	}

	summary.onfocus = () => document.addEventListener('keydown', keydown);
	summary.onclick = () => summary.getAttribute('aria-expanded') === 'true' ? close() : open();
}
export default dropdown;