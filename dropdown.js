const dropdown = (selector = '.dropDown') => {
	let sel;
	const root = document.documentElement || window;
	const clicktouch = ('ontouchstart' in root) ? 'touchstart' : 'click';
	const clickOut = e => !sel.contains(e.target) && close();	
	const keydown = e => !sel.contains(document.activeElement) && close();
	const open = () => {
		sel.querySelector('.summary').setAttribute('aria-expanded', true);
		document.addEventListener('keyup', keydown, false);
		window.addEventListener(clicktouch, clickOut);
	}
	const close = () =>  {
		sel.querySelector('.summary').setAttribute('aria-expanded', false);
		document.removeEventListener('keyup', keydown);
		window.removeEventListener(clicktouch, clickOut);
	}
	document.querySelectorAll(selector).forEach(el => {
		const btn = el.querySelector('.summary');
		btn.onclick = () => {
			sel = el;
			btn.getAttribute('aria-expanded') === 'true' ? close() : open();
		} 	
	});
}
export default dropdown;