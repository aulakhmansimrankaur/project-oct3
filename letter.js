const lines= document.querySelectorAll('.line');
const observer = new IntersectionObserver((entries) => {
	entries.forEach ((entry) => {
		if (entry.isIntersecting) {
		entry.target.classList.add('visible');
	}
});
}, { threshold: 0.3});
lines.forEach ((line) => observer.observe(line));
const envelope=  document.querySelector('.envelope');
const envelopeScreen = document.getElementById('envelopeScreen');
envelopeScreen.addEventListener('click',() => {
	envelope.classList.add('open');
	setTimeout (() => {
		envelopeScreen.style.opacity = '0';
		setTimeout (() => {
			envelopeScreen.style.display = 'none';
			document.body.style.overflow = 'auto';
		},800);
	},600);
});
		