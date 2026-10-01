'use strict';

/* ================= Translations ================= */

const I18N = {
	en: {
		appTitle: 'Age Eligibility Check',
		dobLabel: 'Date of birth',
		checkBtn: 'Check',
		nextBtn: 'Next',
		exitBtn: 'Exit',
		step1: 'Age', step2: 'Human check', step3: 'Details',
		adultCaption: 'Adult — eligible',
		childCaption: 'Child — not eligible',
		enterDob: 'Please enter your date of birth.',
		futureDate: 'Date of birth cannot be in the future.',
		invalidDate: 'Please enter a valid date of birth (age cannot exceed 120 years).',
		lockout: 'Too many failed attempts. Try again in {s}s.',
		funFact: 'Fun fact: you were born on a {day} and your star sign is {sign}.',
		tickerAge: 'Live age: {y} years, {d} days, {h}h {m}m {s}s',
		tickerWait: 'Time until you turn 18: {y}y {mo} months, {d} days, {h}h {m}m {s}s',
		captchaTitle: 'Security check — prove you\'re human',
		captchaMathPrompt: 'Solve the sum:',
		captchaEmojiPrompt: 'Tap the odd one out:',
		captchaOrderPrompt: 'Tap the numbers in ascending order:',
		captchaPlaceholder: 'Your answer',
		captchaOk: '✓ Verified human',
		captchaBad: '✗ Incorrect, try again',
		captchaLocked: 'Too many wrong answers — new challenge in {s}s',
		tier21: [
			'Your age is {age} years.',
			'Top-tier (21+) clearance granted.',
			'All adult-classified categories unlocked, including 21+ restricted tasks.',
			'Approved for senior content moderation and administrative tasks.',
			'Your profile has the highest maturity clearance available.'
		],
		tier18: [
			'Your age is {age} years.',
			'You are verified for age-restricted tasks.',
			'Eligible to perform adult-content and mature-themed tasks.',
			'Approved for 18+ content moderation and administrative tasks.',
			'Your profile is cleared for mature content handling.'
		],
		tier16: [
			'Your age is {age} years.',
			'Teen tier (16–17): not eligible for adult-classified tasks, which require 18+.'
		],
		tier13: [
			'Your age is {age} years.',
			'Junior tier (13–15): not eligible for adult-classified tasks, which require 18+.'
		],
		child: [
			'Your age is {age} years.',
			'You are not eligible for this task category. Adult tasks require you to be 18 or older.'
		],
		tierName21: 'Adult — 21+', tierName18: 'Adult — 18+',
		tierName16: 'Teen — 16+', tierName13: 'Teen — 13+', tierNameChild: 'Child — under 13',
		infoHeading: 'Establishing your eligibility for adult-classified responsibilities',
		infoP1: 'Establishing your eligibility for adult-classified responsibilities requires a professional presentation focused on legal compliance, identity verification, and operational readiness. When communicating your qualifications to an online platform or client, leading with a structured overview builds immediate trust. A strong introduction ensures that the recipient recognizes your commitment to safety, policy adherence, and professional standards right from the start.',
		infoP2: 'First, you must address the primary legal threshold by explicitly stating your legal age and verification status. Confirm clearly that you are 18 years of age or older (or the required legal age in your jurisdiction) and possess valid, government-issued identification to prove it. Mentioning your willingness to complete standard background checks or official platform verification immediately establishes your legitimacy.',
		infoP3: 'Second, highlight your professional competence and experience handling sensitive or age-restricted material. Discuss your technical proficiency, your deep understanding of digital privacy laws, and your track record of managing confidential data responsibly. This section demonstrates that you possess the practical skills required to execute the tasks successfully.',
		infoP4: 'Finally, reinforce your strict adherence to safety protocols, consent boundaries, and website guidelines. Conclude by stating your commitment to maintaining a secure environment and following the platform\'s terms of service without exception. This final point assures the recipient that you prioritize risk management and professional ethics in all your interactions.',
		nameLabel: 'Name (optional, for your certificate)',
		namePlaceholder: 'e.g. Jane Doe',
		certBtn: 'Download certificate',
		certTitle: 'Certificate of Age Eligibility',
		certPresented: 'This certificate is proudly presented to',
		certDob: 'Date of birth', certAge: 'Age', certTier: 'Clearance tier',
		certIssued: 'Issued on', certSign: 'Authorized signature',
		reviewsTitle: 'Completion reviews',
		noReviews: 'No reviews yet.',
		yourName: 'Your name',
		ratingPlaceholder: 'Rating (1–10)',
		addReview: 'Add review',
		invalidRating: 'Please enter a rating between 1 and 10.',
		reviewUnnamed: 'Anonymous',
		signs: ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius']
	},
	fr: {
		appTitle: 'Vérification de l\'éligibilité par âge',
		dobLabel: 'Date de naissance',
		checkBtn: 'Vérifier',
		nextBtn: 'Suivant',
		exitBtn: 'Quitter',
		step1: 'Âge', step2: 'Test humain', step3: 'Détails',
		adultCaption: 'Adulte — éligible',
		childCaption: 'Enfant — non éligible',
		enterDob: 'Veuillez saisir votre date de naissance.',
		futureDate: 'La date de naissance ne peut pas être dans le futur.',
		invalidDate: 'Veuillez saisir une date de naissance valide (âge maximal : 120 ans).',
		lockout: 'Trop de tentatives échouées. Réessayez dans {s} s.',
		funFact: 'Anecdote : vous êtes né(e) un {day} et votre signe astrologique est {sign}.',
		tickerAge: 'Âge en direct : {y} ans, {j} jours, {h}h {m}min {s}s',
		tickerWait: 'Temps avant vos 18 ans : {y} an(s) {mo} mois, {j} jours, {h}h {m}min {s}s',
		captchaTitle: 'Vérification de sécurité — prouvez que vous êtes humain',
		captchaMathPrompt: 'Résolvez l\'addition :',
		captchaEmojiPrompt: 'Touchez l\'intrus :',
		captchaOrderPrompt: 'Touchez les chiffres dans l\'ordre croissant :',
		captchaPlaceholder: 'Votre réponse',
		captchaOk: '✓ Humain vérifié',
		captchaBad: '✗ Incorrect, réessayez',
		captchaLocked: 'Trop de mauvaises réponses — nouveau défi dans {s} s',
		tier21: [
			'Votre âge est de {age} ans.',
			'Habilitation de niveau supérieur (21+) accordée.',
			'Toutes les catégories réservées aux adultes sont débloquées, y compris les tâches 21+.',
			'Approuvé(e) pour la modération de contenu senior et les tâches administratives.',
			'Votre profil possède le niveau de maturité le plus élevé.'
		],
		tier18: [
			'Votre âge est de {age} ans.',
			'Vous êtes vérifié(e) pour les tâches à accès restreint.',
			'Éligible pour les contenus adultes et les tâches à thème mature.',
			'Approuvé(e) pour la modération de contenu 18+ et les tâches administratives.',
			'Votre profil est autorisé à gérer du contenu mature.'
		],
		tier16: [
			'Votre âge est de {age} ans.',
			'Catégorie ado (16–17 ans) : non éligible aux tâches classées adultes, réservées aux 18+.'
		],
		tier13: [
			'Votre âge est de {age} ans.',
			'Catégorie junior (13–15 ans) : non éligible aux tâches classées adultes, réservées aux 18+.'
		],
		child: [
			'Votre âge est de {age} ans.',
			'Vous n\'êtes pas éligible à cette catégorie de tâches. Les tâches adultes requièrent 18 ans ou plus.'
		],
		tierName21: 'Adulte — 21+', tierName18: 'Adulte — 18+',
		tierName16: 'Adolescent — 16+', tierName13: 'Junior — 13+', tierNameChild: 'Enfant — moins de 13 ans',
		infoHeading: 'Établir votre éligibilité aux responsabilités classées adultes',
		infoP1: 'Établir votre éligibilité aux responsabilités classées adultes nécessite une présentation professionnelle axée sur la conformité légale, la vérification d\'identité et la préparation opérationnelle. Lorsque vous présentez vos qualifications à une plateforme en ligne ou à un client, une vue d\'ensemble structurée inspire immédiatement confiance. Une bonne introduction garantit que le destinataire reconnaît votre engagement en matière de sécurité, de respect des règles et de normes professionnelles dès le départ.',
		infoP2: 'Premièrement, vous devez aborder le seuil légal principal en indiquant explicitement votre âge légal et votre statut de vérification. Confirmez clairement que vous avez 18 ans ou plus (ou l\'âge légal requis dans votre juridiction) et que vous possédez une pièce d\'identité officielle valide pour le prouver. Mentionner votre volonté de passer des vérifications d\'antécédents standard ou une vérification officielle de la plateforme établit immédiatement votre légitimité.',
		infoP3: 'Deuxièmement, mettez en avant votre compétence professionnelle et votre expérience dans la gestion de contenus sensibles ou à accès restreint. Parlez de votre maîtrise technique, de votre compréhension approfondie des lois sur la vie privée numérique et de votre historique de gestion responsable de données confidentielles. Cette section démontre que vous possédez les compétences pratiques nécessaires pour mener à bien les tâches.',
		infoP4: 'Enfin, soulignez votre respect strict des protocoles de sécurité, des limites de consentement et des règles du site. Concluez en déclarant votre engagement à maintenir un environnement sécurisé et à suivre les conditions d\'utilisation de la plateforme sans exception. Ce dernier point assure au destinataire que vous accordez la priorité à la gestion des risques et à l\'éthique professionnelle dans toutes vos interactions.',
		nameLabel: 'Nom (facultatif, pour votre certificat)',
		namePlaceholder: 'ex. Marie Dupont',
		certBtn: 'Télécharger le certificat',
		certTitle: 'Certificat d\'éligibilité par âge',
		certPresented: 'Ce certificat est fièrement remis à',
		certDob: 'Date de naissance', certAge: 'Âge', certTier: 'Niveau d\'habilitation',
		certIssued: 'Délivré le', certSign: 'Signature autorisée',
		reviewsTitle: 'Historique des vérifications',
		noReviews: 'Aucun avis pour le moment.',
		yourName: 'Votre nom',
		ratingPlaceholder: 'Note (1 à 10)',
		addReview: 'Ajouter un avis',
		invalidRating: 'Veuillez saisir une note entre 1 et 10.',
		reviewUnnamed: 'Anonyme',
		signs: ['Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire']
	},
	es: {
		appTitle: 'Verificación de elegibilidad por edad',
		dobLabel: 'Fecha de nacimiento',
		checkBtn: 'Comprobar',
		nextBtn: 'Siguiente',
		exitBtn: 'Salir',
		step1: 'Edad', step2: 'Prueba humana', step3: 'Detalles',
		adultCaption: 'Adulto — elegible',
		childCaption: 'Niño — no elegible',
		enterDob: 'Por favor, introduzca su fecha de nacimiento.',
		futureDate: 'La fecha de nacimiento no puede ser futura.',
		invalidDate: 'Introduzca una fecha de nacimiento válida (edad máxima: 120 años).',
		lockout: 'Demasiados intentos fallidos. Inténtelo de nuevo en {s} s.',
		funFact: 'Dato curioso: nació un {day} y su signo del zodíaco es {sign}.',
		tickerAge: 'Edad en vivo: {y} años, {d} días, {h}h {m}min {s}s',
		tickerWait: 'Tiempo hasta cumplir 18 años: {y}a {mo} meses, {d} días, {h}h {m}min {s}s',
		captchaTitle: 'Verificación de seguridad: demuestre que es humano',
		captchaMathPrompt: 'Resuelva la suma:',
		captchaEmojiPrompt: 'Toque el intruso:',
		captchaOrderPrompt: 'Toque los números en orden ascendente:',
		captchaPlaceholder: 'Su respuesta',
		captchaOk: '✓ Humano verificado',
		captchaBad: '✗ Incorrecto, inténtelo de nuevo',
		captchaLocked: 'Demasiadas respuestas incorrectas — nuevo reto en {s} s',
		tier21: [
			'Su edad es de {age} años.',
			'Autorización de nivel superior (21+) concedida.',
			'Todas las categorías reservadas a adultos desbloqueadas, incluidas las tareas 21+.',
			'Aprobado para moderación de contenido sénior y tareas administrativas.',
			'Su perfil tiene el mayor nivel de madurez disponible.'
		],
		tier18: [
			'Su edad es de {age} años.',
			'Está verificado para tareas de acceso restringido.',
			'Elegible para contenido para adultos y tareas de temática madura.',
			'Aprobado para moderación de contenido 18+ y tareas administrativas.',
			'Su perfil está autorizado para gestionar contenido maduro.'
		],
		tier16: [
			'Su edad es de {age} años.',
			'Categoría adolescente (16–17): no elegible para tareas clasificadas como adultas, reservadas a mayores de 18.'
		],
		tier13: [
			'Su edad es de {age} años.',
			'Categoría junior (13–15): no elegible para tareas clasificadas como adultas, reservadas a mayores de 18.'
		],
		child: [
			'Su edad es de {age} años.',
			'No es elegible para esta categoría de tareas. Las tareas para adultos requieren tener 18 años o más.'
		],
		tierName21: 'Adulto — 21+', tierName18: 'Adulto — 18+',
		tierName16: 'Adolescente — 16+', tierName13: 'Junior — 13+', tierNameChild: 'Niño — menor de 13',
		infoHeading: 'Establecer su elegibilidad para responsabilidades clasificadas como adultas',
		infoP1: 'Establecer su elegibilidad para responsabilidades clasificadas como adultas requiere una presentación profesional centrada en el cumplimiento legal, la verificación de identidad y la preparación operativa. Al comunicar sus cualificaciones a una plataforma en línea o a un cliente, una visión general estructurada genera confianza inmediata. Una buena introducción garantiza que el destinatario reconozca su compromiso con la seguridad, el cumplimiento de las normas y los estándares profesionales desde el principio.',
		infoP2: 'En primer lugar, debe abordar el umbral legal principal indicando explícitamente su edad legal y su estado de verificación. Confirme claramente que tiene 18 años o más (o la edad legal requerida en su jurisdicción) y que posee un documento de identidad oficial válido que lo demuestre. Mencionar su disposición a completar verificaciones de antecedentes estándar o la verificación oficial de la plataforma establece inmediatamente su legitimidad.',
		infoP3: 'En segundo lugar, destaque su competencia profesional y experiencia en el manejo de material sensible o de acceso restringido. Hable de su dominio técnico, de su profundo conocimiento de las leyes de privacidad digital y de su historial de gestión responsable de datos confidenciales. Esta sección demuestra que posee las habilidades prácticas necesarias para ejecutar las tareas con éxito.',
		infoP4: 'Por último, refuerce su estricta adhesión a los protocolos de seguridad, los límites de consentimiento y las directrices del sitio web. Concluya declarando su compromiso de mantener un entorno seguro y de seguir los términos de servicio de la plataforma sin excepción. Este último punto asegura al destinatario que prioriza la gestión de riesgos y la ética profesional en todas sus interacciones.',
		nameLabel: 'Nombre (opcional, para su certificado)',
		namePlaceholder: 'ej. Juan Pérez',
		certBtn: 'Descargar certificado',
		certTitle: 'Certificado de elegibilidad por edad',
		certPresented: 'Este certificado se otorga con orgullo a',
		certDob: 'Fecha de nacimiento', certAge: 'Edad', certTier: 'Nivel de autorización',
		certIssued: 'Emitido el', certSign: 'Firma autorizada',
		reviewsTitle: 'Historial de verificaciones',
		noReviews: 'Aún no hay opiniones.',
		yourName: 'Su nombre',
		ratingPlaceholder: 'Puntuación (1–10)',
		addReview: 'Añadir reseña',
		invalidRating: 'Introduzca una puntuación entre 1 y 10.',
		reviewUnnamed: 'Anónimo',
		signs: ['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario']
	}
};

/* ================= Helpers & state ================= */

const $ = id => document.getElementById(id);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const els = {
	birthDate: $('birthDate'), result: $('result'), hazard: $('hazard'),
	verification: $('verification'), robotStep: $('robotStep'), information: $('information'),
	eligibilityNext: $('eligibilityNext'), verificationNext: $('verificationNext'),
	captchaChallenge: $('captchaChallenge'), captchaStatus: $('captchaStatus'),
	funFact: $('funFact'), ticker: $('ticker'), checkButton: $('checkButton'),
	langSelect: $('langSelect'), themeToggle: $('themeToggle'),
	contrastToggle: $('contrastToggle'), soundToggle: $('soundToggle')
};

const state = {
	lang: localStorage.getItem('ve-lang') || 'en',
	theme: localStorage.getItem('ve-theme') || 'light',
	sound: localStorage.getItem('ve-sound') !== 'off',
	contrast: localStorage.getItem('ve-contrast') === 'high',
	lastCheck: null,
	fails: 0,
	pendingReview: false
};

function t(key, vars) {
	let s = (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
	if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
	return s;
}

function tTier(tier) {
	const arr = (I18N[state.lang] && I18N[state.lang][tier]) || I18N.en[tier];
	return arr.slice();
}

function show(el) {
	el.hidden = false;
	el.classList.remove('animate-in');
	void el.offsetWidth;
	el.classList.add('animate-in');
}

function setStep(n) {
	document.querySelectorAll('.steps li').forEach(li => {
		const step = Number(li.dataset.step);
		li.classList.toggle('active', step === n);
		li.classList.toggle('done', step < n);
	});
}

function computeAge(birthDate, now = new Date()) {
	let age = now.getFullYear() - birthDate.getFullYear();
	const notYet = now.getMonth() < birthDate.getMonth() ||
		(now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate());
	if (notYet) age--;
	return age;
}

function getTier(age) {
	if (age >= 21) return 'tier21';
	if (age >= 18) return 'tier18';
	if (age >= 16) return 'tier16';
	if (age >= 13) return 'tier13';
	return 'child';
}
const ELIGIBLE_TIERS = ['tier21', 'tier18'];

function zodiac(month, day) {
	const signs = (I18N[state.lang] && I18N[state.lang].signs) || I18N.en.signs;
	const table = [
		[19, 0, 1], [18, 1, 2], [20, 2, 3], [19, 3, 4], [20, 4, 5], [20, 5, 6],
		[22, 6, 7], [22, 7, 8], [22, 8, 9], [22, 9, 10], [21, 10, 11], [21, 11, 0]
	];
	const [cutoff, ifBefore, ifAfter] = table[month];
	return day <= cutoff ? signs[ifBefore] : signs[ifAfter];
}

/* ================= Sound (Web Audio, no files) ================= */

let audioCtx = null;
function tone(freq, dur, type = 'sine', delay = 0, gainVal = 0.12) {
	if (!state.sound) return;
	try {
		audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
		const osc = audioCtx.createOscillator();
		const gain = audioCtx.createGain();
		osc.type = type;
		osc.frequency.value = freq;
		gain.gain.setValueAtTime(gainVal, audioCtx.currentTime + delay);
		gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + dur);
		osc.connect(gain).connect(audioCtx.destination);
		osc.start(audioCtx.currentTime + delay);
		osc.stop(audioCtx.currentTime + delay + dur);
	} catch (e) { /* audio unavailable */ }
}
function playSuccess() { tone(523, 0.12); tone(659, 0.12, 'sine', 0.12); tone(784, 0.22, 'sine', 0.24); }
function playError() { tone(170, 0.22, 'sawtooth'); tone(120, 0.28, 'sawtooth', 0.14); }

/* ================= Confetti ================= */

function launchConfetti() {
	if (reducedMotion) return;
	let canvas = document.querySelector('.confetti-canvas');
	if (!canvas) {
		canvas = document.createElement('canvas');
		canvas.className = 'confetti-canvas';
		canvas.setAttribute('aria-hidden', 'true');
		document.body.appendChild(canvas);
	}
	const ctx = canvas.getContext('2d');
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	const colors = ['#f43f5e', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#a855f7'];
	const parts = Array.from({ length: 160 }, () => ({
		x: Math.random() * canvas.width,
		y: -20 - Math.random() * canvas.height * 0.4,
		w: 6 + Math.random() * 6,
		h: 8 + Math.random() * 8,
		vy: 2 + Math.random() * 3.5,
		vx: -1.5 + Math.random() * 3,
		rot: Math.random() * Math.PI,
		vr: -0.12 + Math.random() * 0.24,
		color: colors[Math.floor(Math.random() * colors.length)]
	}));
	const start = performance.now();
	(function frame(now) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let alive = false;
		for (const p of parts) {
			p.y += p.vy; p.x += p.vx + Math.sin(p.y / 30); p.rot += p.vr;
			if (p.y < canvas.height + 30) alive = true;
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.rot);
			ctx.fillStyle = p.color;
			ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
			ctx.restore();
		}
		if (alive && now - start < 5000) requestAnimationFrame(frame);
		else ctx.clearRect(0, 0, canvas.width, canvas.height);
	})(start);
}

/* ================= CAPTCHA ================= */

const captcha = { solved: false, wrong: 0, locked: false, timer: null };
const EMOJI_PAIRS = [['🍎', '🍏'], ['🐶', '🐱'], ['⚽', '🏀'], ['🌞', '🌝'], ['🚗', '🚲'], ['🍕', '🍔']];
const CHALLENGE_TYPES = ['math', 'emoji', 'order'];

function setCaptchaStatus(msg, cls) {
	els.captchaStatus.textContent = msg;
	els.captchaStatus.className = cls || '';
}

function captchaSolved() {
	captcha.solved = true;
	setCaptchaStatus(t('captchaOk'), 'ok');
	els.verificationNext.disabled = false;
	els.verificationNext.focus();
	playSuccess();
}

function captchaWrong() {
	captcha.wrong++;
	els.captchaChallenge.classList.remove('shake');
	void els.captchaChallenge.offsetWidth;
	els.captchaChallenge.classList.add('shake');
	playError();
	if (captcha.wrong >= 3) {
		lockCaptcha(10);
	} else {
		setCaptchaStatus(t('captchaBad'), 'bad');
	}
}

function lockCaptcha(seconds) {
	captcha.locked = true;
	els.captchaChallenge.classList.add('locked');
	let remaining = seconds;
	setCaptchaStatus(t('captchaLocked', { s: remaining }), 'bad');
	captcha.timer = setInterval(() => {
		remaining--;
		if (remaining <= 0) {
			clearInterval(captcha.timer);
			captcha.locked = false;
			els.captchaChallenge.classList.remove('locked');
			buildCaptcha();
		} else {
			setCaptchaStatus(t('captchaLocked', { s: remaining }), 'bad');
		}
	}, 1000);
}

function buildCaptcha() {
	if (captcha.locked) return;
	captcha.solved = false;
	captcha.wrong = 0;
	els.verificationNext.disabled = true;
	setCaptchaStatus('');
	els.captchaChallenge.classList.remove('locked');
	const type = CHALLENGE_TYPES[Math.floor(Math.random() * CHALLENGE_TYPES.length)];
	const box = els.captchaChallenge;

	if (type === 'math') {
		const a = 2 + Math.floor(Math.random() * 9);
		const b = 1 + Math.floor(Math.random() * 9);
		const answer = a + b;
		box.innerHTML = `
			<p class="challenge-prompt">${t('captchaMathPrompt')}</p>
			<div class="math-row">
				<span id="captchaQuestion">${a} + ${b} = ?</span>
			</div>
			<input id="captchaInput" type="text" inputmode="numeric" placeholder="${t('captchaPlaceholder')}" autocomplete="off">`;
		const input = $('captchaInput');
		const validate = () => {
			input.classList.remove('correct', 'wrong');
			const value = input.value.trim();
			if (value === '') return;
			if (value.length < String(answer).length) return;
			if (parseInt(value, 10) === answer) {
				input.classList.add('correct');
				captchaSolved();
			} else {
				input.classList.add('wrong');
				captchaWrong();
			}
		};
		input.addEventListener('input', validate);
		input.addEventListener('keydown', event => {
			if (event.key === 'Enter') validate();
		});
		input.focus();
	} else if (type === 'emoji') {
		const [common, odd] = EMOJI_PAIRS[Math.floor(Math.random() * EMOJI_PAIRS.length)];
		const oddIndex = Math.floor(Math.random() * 6);
		let cells = '';
		for (let i = 0; i < 6; i++) {
			const emoji = i === oddIndex ? odd : common;
			cells += `<button type="button" data-odd="${i === oddIndex}">${emoji}</button>`;
		}
		box.innerHTML = `<p class="challenge-prompt">${t('captchaEmojiPrompt')}</p><div class="emoji-grid">${cells}</div>`;
		box.querySelectorAll('button').forEach(btn => {
			btn.addEventListener('click', () => {
				if (btn.dataset.odd === 'true') captchaSolved();
				else captchaWrong();
			});
		});
		box.querySelector('button').focus();
	} else {
		const nums = new Set();
		while (nums.size < 3) nums.add(1 + Math.floor(Math.random() * 9));
		const shuffled = [...nums].sort(() => Math.random() - 0.5);
		const expected = [...nums].sort((x, y) => x - y);
		let progress = 0;
		box.innerHTML = `<p class="challenge-prompt">${t('captchaOrderPrompt')}</p><div class="order-grid">${
			shuffled.map(n => `<button type="button" data-n="${n}">${n}</button>`).join('')
		}</div>`;
		box.querySelectorAll('button').forEach(btn => {
			btn.addEventListener('click', () => {
				if (captcha.solved) return;
				if (Number(btn.dataset.n) === expected[progress]) {
					btn.classList.add('hit');
					progress++;
					if (progress === expected.length) captchaSolved();
				} else {
					progress = 0;
					box.querySelectorAll('button').forEach(b => b.classList.remove('hit'));
					captchaWrong();
				}
			});
		});
		box.querySelector('button').focus();
	}
}

/* ================= Check button with rate limiting ================= */

let checkLockTimer = null;
function lockCheckButton(seconds) {
	els.checkButton.disabled = true;
	let remaining = seconds;
	els.checkButton.textContent = t('lockout', { s: remaining });
	checkLockTimer = setInterval(() => {
		remaining--;
		if (remaining <= 0) {
			clearInterval(checkLockTimer);
			els.checkButton.disabled = false;
			els.checkButton.textContent = t('checkBtn');
			state.fails = 0;
		} else {
			els.checkButton.textContent = t('lockout', { s: remaining });
		}
	}, 1000);
}

function renderResult() {
	const { age, tier, birthDate } = state.lastCheck;
	const messages = tTier(tier).map(m => m.replace('{age}', age));
	els.result.innerHTML = messages.map((m, i) => {
		const text = i === 0 ? m.replace(String(age), `<span id="ageNum">${reducedMotion ? age : 0}</span>`) : m;
		return `<p>${text}</p>`;
	}).join('');

	const weekday = birthDate.toLocaleDateString(state.lang, { weekday: 'long' });
	els.funFact.textContent = t('funFact', { day: weekday, sign: zodiac(birthDate.getMonth(), birthDate.getDate()) });

	if (!reducedMotion) {
		const span = $('ageNum');
		const duration = 700;
		const start = performance.now();
		(function count(now) {
			const k = Math.min(1, (now - start) / duration);
			span.textContent = Math.round(age * (1 - Math.pow(1 - k, 3)));
			if (k < 1) requestAnimationFrame(count);
		})(start);
	}
	els.ticker.classList.add('show');
	updateTicker();
}

function updateTicker() {
	if (!state.lastCheck) return;
	const { age, tier, birthDate } = state.lastCheck;
	const now = new Date();
	const pad = n => String(n).padStart(2, '0');
	if (ELIGIBLE_TIERS.includes(tier)) {
		let lastBday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
		if (lastBday > now) lastBday = new Date(now.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());
		const diff = now - lastBday;
		const d = Math.floor(diff / 86400000);
		const h = Math.floor((diff % 86400000) / 3600000);
		const m = Math.floor((diff % 3600000) / 60000);
		const s = Math.floor((diff % 60000) / 1000);
		const vars = state.lang === 'fr' ? { y: age, j: d, h: pad(h), m: pad(m), s: pad(s) }
			: { y: age, d, h: pad(h), m: pad(m), s: pad(s) };
		els.ticker.textContent = t('tickerAge', vars);
	} else {
		const target = new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate());
		let y = target.getFullYear() - now.getFullYear();
		let mo = target.getMonth() - now.getMonth();
		let d = target.getDate() - now.getDate();
		if (d < 0) { mo--; d += new Date(target.getFullYear(), target.getMonth(), 0).getDate(); }
		if (mo < 0) { y--; mo += 12; }
		const diff = target - now;
		const h = Math.floor((diff % 86400000) / 3600000);
		const m = Math.floor((diff % 3600000) / 60000);
		const s = Math.floor((diff % 60000) / 1000);
		const vars = { y, mo, d, h: pad(h), m: pad(m), s: pad(s) };
		els.ticker.textContent = t('tickerWait', vars);
	}
}
setInterval(updateTicker, 1000);

els.checkButton.addEventListener('click', () => {
	resetVerification();
	els.funFact.textContent = '';
	els.ticker.classList.remove('show');
	els.ticker.textContent = '';
	state.lastCheck = null;

	const birthDate = new Date(`${els.birthDate.value}T00:00:00`);
	if (!els.birthDate.value || Number.isNaN(birthDate.getTime())) {
		els.hazard.hidden = true;
		els.result.textContent = t('enterDob');
		playError();
		return;
	}
	const today = new Date();
	if (birthDate > today) {
		els.hazard.hidden = false;
		els.result.textContent = t('futureDate');
		playError();
		return;
	}

	const age = computeAge(birthDate);
	if (age > 120) {
		els.hazard.hidden = false;
		els.result.textContent = t('invalidDate');
		playError();
		return;
	}

	const tier = getTier(age);
	state.lastCheck = { age, tier, birthDate };
	renderResult();

	if (ELIGIBLE_TIERS.includes(tier)) {
		els.hazard.hidden = true;
		show(els.verification);
		setStep(1);
		launchConfetti();
		playSuccess();
	} else {
		els.hazard.hidden = false;
		playError();
	}
});

/* ================= Flow ================= */

function resetVerification() {
	els.verification.hidden = true;
	els.information.hidden = true;
	els.robotStep.hidden = true;
	els.eligibilityNext.hidden = false;
	if (captcha.timer) clearInterval(captcha.timer);
	captcha.locked = false;
}

els.eligibilityNext.addEventListener('click', () => {
	els.eligibilityNext.hidden = true;
	buildCaptcha();
	show(els.robotStep);
	setStep(2);
});

els.verificationNext.addEventListener('click', () => {
	els.verification.hidden = true;
	show(els.information);
	setStep(3);
	if (state.lastCheck) {
		addReview({
			date: new Date().toISOString(),
			name: $('certName').value.trim(),
			age: state.lastCheck.age,
			tier: state.lastCheck.tier
		});
		state.pendingReview = true;
	}
});

$('refreshCaptcha').addEventListener('click', buildCaptcha);

$('exitButton').addEventListener('click', () => {
	updatePendingReviewName();
	els.information.hidden = true;
	els.result.textContent = '';
	els.funFact.textContent = '';
	els.ticker.classList.remove('show');
	els.ticker.textContent = '';
	els.birthDate.value = '';
	els.hazard.hidden = true;
	$('certName').value = '';
	state.lastCheck = null;
	state.fails = 0;
	resetVerification();
	setStep(1);
});

/* Count failed checks for rate limiting */
els.checkButton.addEventListener('click', () => {
	const eligible = state.lastCheck && ELIGIBLE_TIERS.includes(state.lastCheck.tier);
	if (!eligible && els.birthDate.value) {
		state.fails++;
		if (state.fails >= 5) lockCheckButton(15);
	}
});

/* ================= Review box (persistent history) ================= */

const reviewStore = {
	get() {
		try { return JSON.parse(localStorage.getItem('ve-reviews')) || []; }
		catch (e) { return []; }
	},
	set(list) { localStorage.setItem('ve-reviews', JSON.stringify(list)); }
};

function escapeHtml(s) {
	return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function tierNameKey(tier) {
	return { tier21: 'tierName21', tier18: 'tierName18', tier16: 'tierName16', tier13: 'tierName13', child: 'tierNameChild' }[tier];
}

function renderReviews() {
	const list = reviewStore.get();
	$('reviewCount').textContent = list.length;
	$('reviewList').innerHTML = list.map(r => {
		const right = Number.isInteger(r.rating)
			? `<span class="stars" aria-label="${r.rating}/10">${'★'.repeat(r.rating)}${'☆'.repeat(10 - r.rating)}</span>`
			: (r.age != null ? `<span class="tier-chip ${r.tier}">${t(tierNameKey(r.tier))}</span>` : '');
		const detail = Number.isInteger(r.rating)
			? `<span class="review-rating">${r.rating}/10</span>`
			: (r.age != null ? `<span>${t('certAge')}: ${r.age}</span>` : '');
		return `
		<li class="review-item">
			<div class="top"><span>${new Date(r.date).toLocaleString(state.lang)}</span><span>${escapeHtml(r.name || '') || t('reviewUnnamed')}</span></div>
			<div class="main"><span>${detail}</span>${right}</div>
		</li>`;
	}).join('');
	$('noReviews').hidden = list.length > 0;
}

function addReview(entry) {
	const list = reviewStore.get();
	list.unshift(entry);
	reviewStore.set(list);
	renderReviews();
}

function updatePendingReviewName() {
	if (!state.pendingReview) return;
	const list = reviewStore.get();
	if (list.length) {
		list[0].name = $('certName').value.trim();
		reviewStore.set(list);
		renderReviews();
	}
	state.pendingReview = false;
}

$('addReview').addEventListener('click', () => {
	const rating = parseInt($('reviewRating').value, 10);
	if (Number.isNaN(rating) || rating < 1 || rating > 10) {
		$('reviewRating').classList.add('wrong');
		$('reviewRating').focus();
		alert(t('invalidRating'));
		return;
	}
	addReview({
		date: new Date().toISOString(),
		name: $('reviewName').value.trim(),
		rating
	});
	$('reviewName').value = '';
	$('reviewRating').value = '';
	$('reviewRating').classList.remove('wrong');
	playSuccess();
});
$('reviewRating').addEventListener('keydown', event => {
	if (event.key === 'Enter') $('addReview').click();
});
$('reviewRating').addEventListener('input', () => {
	$('reviewRating').classList.remove('wrong');
});

/* ================= Certificate ================= */

$('certButton').addEventListener('click', () => {
	if (!state.lastCheck) return;
	updatePendingReviewName();
	const { age, tier, birthDate } = state.lastCheck;
	$('certNameOut').textContent = $('certName').value.trim() || '—';
	$('certDobOut').textContent = birthDate.toLocaleDateString(state.lang);
	$('certAgeOut').textContent = `${age}`;
	$('certTierOut').textContent = t(tierNameKey(tier));
	$('certDateOut').textContent = new Date().toLocaleDateString(state.lang);
	window.print();
});

/* ================= Preferences ================= */

function applyPrefs() {
	document.documentElement.dataset.theme = state.theme;
	if (state.contrast) document.documentElement.dataset.contrast = 'high';
	else delete document.documentElement.dataset.contrast;
	els.themeToggle.textContent = state.theme === 'dark' ? '☀️' : '🌙';
	els.soundToggle.textContent = state.sound ? '🔊' : '🔇';
	els.langSelect.value = state.lang;
	document.documentElement.lang = state.lang;
}

els.themeToggle.addEventListener('click', () => {
	state.theme = state.theme === 'dark' ? 'light' : 'dark';
	localStorage.setItem('ve-theme', state.theme);
	applyPrefs();
});
els.contrastToggle.addEventListener('click', () => {
	state.contrast = !state.contrast;
	localStorage.setItem('ve-contrast', state.contrast ? 'high' : 'normal');
	applyPrefs();
});
els.soundToggle.addEventListener('click', () => {
	state.sound = !state.sound;
	localStorage.setItem('ve-sound', state.sound ? 'on' : 'off');
	applyPrefs();
	if (state.sound) playSuccess();
});

function applyI18n() {
	document.querySelectorAll('[data-i18n]').forEach(el => {
		el.textContent = t(el.dataset.i18n);
	});
	document.querySelectorAll('[data-i18n-ph]').forEach(el => {
		el.placeholder = t(el.dataset.i18nPh);
	});
	document.title = t('appTitle');
	if (state.lastCheck) renderResult();
	if (!els.robotStep.hidden && !captcha.locked) buildCaptcha();
	renderReviews();
}

els.langSelect.addEventListener('change', () => {
	state.lang = els.langSelect.value;
	localStorage.setItem('ve-lang', state.lang);
	applyPrefs();
	applyI18n();
});

/* ================= Init ================= */

els.birthDate.max = new Date().toISOString().split('T')[0];
applyPrefs();
applyI18n();
renderReviews();
setStep(1);
