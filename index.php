<?php 
    if($_SERVER["HTTPS"] != "on"){
        header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en-gb" class="no-js">

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134718359-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-134718359-1');
    </script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
	<title>Portfolio Mare Sergiu</title>
	<meta name="description" content="Portofolio Mare Sergiu">
	<meta name="author" content="Mare Sergiu">

	<!-- fav icon -->
	<link rel="shortcut icon" href="assets/media/icons/favIcon.ico" type="image/x-icon">
	<link rel="icon" href="assets/media/icons/favIcon.ico" type="image/x-icon">

	<!-- primary stylesheets -->
	<link rel="stylesheet" href="assets/css/libs/normalizer.css" type="text/css">
	<link rel="stylesheet" href="assets/css/libs/stylish-forms.core.min.css" type="text/css">
	<link rel="stylesheet" href="assets/css/global.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/nav-mod.css" type="text/css" />
</head>

<body>
	<h1 class="hidden-accesability">Sergiu Mare Front-End Developer</h1>
	<!-- header -->
	<header class="header module slide" id="site-header">
		<h2 class="hidden-accesability">Header</h2>
		<div class="holder cf">
			<div class="icon inline-bl left logo">
				<div class="bg-gradient"></div>
				<img class="img" src="assets/media/images/logoMsProto.png" alt="logo" />
			</div>
			<!-- navigation -->
			<nav class="nav right" role="navigation">
				<h3 class="hidden-accesability">Main navigation</h3>
				<!-- burger-menu -->
				<div class="burger-menu">
					<div class="top"></div>
					<div class="middle"></div>
					<div class="bottom"></div>
				</div>
				<ul class="nav-holder">
					<li class="nav-elem active anim-mod" data-delay="300" data-sync="true" data-sub-anim-mod="false">
						<a class="nav-anchor" href="#page-hero">Home</a>
					</li>
					<li class="nav-elem anim-mod" data-delay="450" data-sync="true" data-sub-anim-mod="false">
						<a class="nav-anchor" href="#about-me">About</a>
					</li>
					<li class="nav-elem anim-mod" data-delay="600" data-sync="true" data-sub-anim-mod="false">
						<a class="nav-anchor" href="#skills">Skills</a>
					</li>
					<li class="nav-elem anim-mod" data-delay="750" data-sync="true" data-sub-anim-mod="false">
						<a class="nav-anchor" href="#portfolio">Portfolio</a>
					</li>
					<li class="nav-elem anim-mod" data-delay="900" data-sync="true" data-sub-anim-mod="false">
						<a class="nav-anchor" href="#contact-me">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div id="main">
		<!-- page hero -->
		<section class="page-hero module" id="page-hero">
			<h2 class="hidden-accesability">Hero</h2>
			<div class="holder">
				<video class="page-hero-video" autoplay loop muted id="check-video" poster="assets/media/images/heroVideoPoster.png">
					<source src="assets/media/video/page-hero-video.mp4" type="video/mp4">
					<source src="assets/media/video/page-hero-video.ogg" type="video/ogg">
					<source src="" type="video/ogg">
				</video>
				<div class="page-hero-message">
					<p class="title">
						<span class="bl">
							<span>&#60;</span>
							<span class="page-hero-message-name"></span>
							<span>/&#62;</span>
						</span>
						<span class="bl">
							<span>&#60;</span>
							<span class="page-hero-message-job"></span>
							<span>/&#62;</span>
						</span>
					</p>
				</div>
			</div>
		</section>
		<!-- about-me -->
		<section class="about-me mod module" id="about-me">
			<div class="holder">
				<h2 class="title line-decoration">About me</h2>
				<div class="cf">
					<div class="image-holder left anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
						<figure class="overlay">
							<img class="img personal-image" src="assets/media/images/sergiu-mare.jpg" alt="Sergiu Mare photo">
						</figure>
					</div>
					<div class="desc left anim-mod" data-delay="300" data-sub-anim="true" data-sync="false">
						<h3 class="sub-title sub-anim-mod" data-sub-delay="300">Hello</h3>
						<p class="text sub-anim-mod" data-sub-delay="450">
							Welcome on my page, my name is Sergiu Mare and I am a Front-End Developer.
						</p>
						<p class="text sub-anim-mod" data-sub-delay="600">I understand the needs of the business and of the user, so I place the
							product in the middle, so both sides can extract value by using the system created by me.
							Touching both sides, UX and UI offers me the possibility to take an idea from concept to reality. 
							I love to develop web applications that can help users and business owners to achieve their goal.
						</p>
						<p class="text sub-anim-mod" data-sub-delay="750">
							I believe in a strong work ethic and I am a continuous learner, goal oriented and open-minded person.
						</p>
						<div class="download-wrapper sub-anim-mod" data-sub-delay="900">
							<a class="cta" href="server/cv/sergiu-mare-front-end-developer.pdf" download>
								<span>Resume</span>
							</a>
						</div>
					</div>
				</div>
				<div class="mod">
					<h3 class="sub-title">My daily responsibilities</h3>
					<ul class="dialy-duties">
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Using photoshop to achieve pixel perfect modules and to manipulate images.</p>
								<p class="text">Keen eye for details and understanding of the design.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Understanding the importance of the UX process, starting from the strategy and finishing with the surface, and the impact that it has over web development.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Writing documentation for each project, module, component or library that I develop.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Seeing the web-application in a module/component way increases consistency, reliability,
									performance and debugging.</p>
							</span>
						</li>
						<li class="duty  anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Expert in writing semantic HTML5, with performant SEO.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Expert in writing CSS3, that is cross-browser compatible.</p>
								<p class="text">Experience with old browser, IE8-E11.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Write browser compatible vanilla javaScript.</p>
								<p class="text">Usage of ES5, ES6, ES7 and OOP</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Expert in using Jquery for DOM manipulation, and Handlebars as a template library.</p>								
								<p class="text">I use React.js, for modern UI.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">High usage of Ajax calls to communicate with the back-end and to display dynamic content.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Using Firebase to develop web applications, having also experience with Sitecore.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Using a task runner like Gulp for web development.</p>																
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Experince with POSTCSS and SCSS.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="text duty-details">
								<p class="text">Work comfortably with version control system (Git).</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Using jira/trello as a ticket system.</p>
								<p class="text">Agile development methodology.</p>
								<p class="text">Time tracking for performance review.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Work effectively in a team and also by myself.</p>
							</span>
						</li>
						<li class="duty anim-mod" data-delay="300" data-sub-anim="false" data-sync="false">
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.636 49.636">
									<path fill="#5887ff" d="M23.001 27.245L0 23.39 49.636.61l-24 48.416z" /></svg>
							</span>
							<span class="duty-details">
								<p class="text">Offering support when needed.</p>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<!-- quote -->
		<section class="quote mod module">
			<h2 class="hidden-accesability">Quote</h2>
			<img class="bg-img" src="assets/media/images/coding.jpg" alt="background image" />
			<div class="holder">
				<p class="title">
					“Dreams are extremely important. You can’t do it unless you imagine it.”
					<span class="full-width">George Lucas</span>
				</p>
			</div>
		</section>
		<!-- skills -->
		<section class="skills mod module" id="skills">
			<div class=" holder">
				<h2 class="title line-decoration">Skills</h2>
				<ul class="tiles mod">
					<li class="tile cf anim-mod" data-delay="300" data-sub-anim="true" data-sync="false">
						<div class="icon sub-anim-mod" data-sub-delay="300">
							<svg width="346.194" height="346.194" viewBox="0 0 346.194 346.194">
								<path d="M145.001 231.989c.375 2.569.774 5.025 1.189 7.47a398.162 398.162 0 0 0 6.068-4.468 633.19 633.19 0 0 1-3.18-2.816c-1.357-.066-2.717-.096-4.077-.186zM152.351 267.357c7.089 24.992 15.796 38.13 20.747 38.13 4.941 0 13.654-13.138 20.752-38.142-6.785-4.498-13.727-9.561-20.746-15.007-7.023 5.466-13.977 10.521-20.753 15.019zM201.176 116.859c-.372-2.57-.769-5.018-1.177-7.464a290.4 290.4 0 0 0-6.065 4.464c1.045.94 2.102 1.85 3.171 2.805 1.357.066 2.707.099 4.071.195zM152.264 113.859a383.039 383.039 0 0 0-6.08-4.47c-.402 2.435-.808 4.9-1.177 7.47 1.36-.097 2.732-.129 4.095-.195 1.054-.949 2.099-1.865 3.162-2.805zM80.401 81.743c-3.48 3.495-.363 18.939 12.304 41.646a346.313 346.313 0 0 1 25.277-4.062 357.348 357.348 0 0 1 4.083-25.397c-15.606-8.743-28.469-13.231-36.806-13.231-2.804-.001-4.365.564-4.858 1.044zM95.182 174.427a343.593 343.593 0 0 1-15.015-20.758c-24.995 7.095-38.143 15.808-38.143 20.747 0 4.93 13.147 13.655 38.167 20.747 4.588-6.877 9.605-13.818 14.991-20.736zM92.723 225.456c-12.685 22.698-15.79 38.154-12.31 41.637.48.48 2.042 1.045 4.87 1.045 8.326 0 21.197-4.491 36.782-13.223a357.713 357.713 0 0 1-4.083-25.4c-8.691-1.081-17.134-2.426-25.259-4.059zM108.119 147.508a278.199 278.199 0 0 0 4.405 6.073c.922-1.032 1.879-2.047 2.81-3.068.066-1.396.105-2.798.184-4.182-2.553.363-4.982.774-7.399 1.177zM112.524 195.275a319.596 319.596 0 0 0-4.405 6.065c2.423.396 4.846.798 7.398 1.165-.087-1.394-.123-2.774-.184-4.174-.93-1.014-1.881-2.022-2.809-3.056zM193.85 81.491c-7.098-25.001-15.811-38.13-20.752-38.13-4.951 0-13.658 13.129-20.753 38.13 6.789 4.5 13.73 9.557 20.753 15.03 7.019-5.474 13.955-10.524 20.752-15.03zM266.016 153.668a348.554 348.554 0 0 1-15 20.758 344.066 344.066 0 0 1 14.988 20.735c25.016-7.092 38.166-15.817 38.166-20.747-.012-4.938-13.145-13.651-38.154-20.746zM228.191 229.509a352.809 352.809 0 0 1-4.083 25.406c15.606 8.731 28.475 13.223 36.803 13.223 2.822 0 4.372-.564 4.864-1.045 3.477-3.482.36-18.938-12.31-41.637-8.124 1.621-16.567 2.966-25.274 4.053zM230.846 198.356c-.066 1.387-.108 2.762-.187 4.149 2.546-.367 4.99-.77 7.41-1.172-1.43-1.987-2.864-3.992-4.407-6.053-.925 1.04-1.88 2.049-2.816 3.076z" />
								<path d="M173.104 0C77.66 0 .003 77.647.003 173.094c0 95.435 77.657 173.101 173.101 173.101 95.446 0 173.088-77.666 173.088-173.101C346.191 77.647 268.55 0 173.104 0zm106.975 218.725c14.436 28.006 18.614 52.854 4.396 67.079-4.012 4.012-11.355 8.791-23.563 8.791-11.877 0-26.835-4.743-43.469-13.294-9.589 30.071-24.217 50.632-44.345 50.632-20.134 0-34.774-20.561-44.354-50.626-16.63 8.545-31.585 13.282-43.454 13.282-12.21 0-19.566-4.78-23.569-8.797-14.222-14.22-10.052-39.067 4.405-67.05-30.021-9.596-50.54-24.211-50.545-44.327.006-20.107 20.524-34.726 50.524-44.31-14.448-28.003-18.618-52.845-4.396-67.067 4.014-4.008 11.358-8.785 23.557-8.785 11.886 0 26.838 4.741 43.478 13.286 9.58-30.066 24.214-50.629 44.354-50.629s34.756 20.569 44.345 50.629c16.646-8.554 31.604-13.286 43.481-13.286 12.213 0 19.551 4.771 23.562 8.785 14.213 14.223 10.046 39.07-4.407 67.067 30.012 9.584 50.524 24.208 50.536 44.315-.011 20.111-20.524 34.726-50.536 44.305z" />
								<path d="M193.928 234.997a350.295 350.295 0 0 0 6.065 4.45c.402-2.433.811-4.889 1.183-7.458-1.363.084-2.714.12-4.071.18-1.057.967-2.114 1.886-3.177 2.828zM195.693 151.816a426.303 426.303 0 0 0-9.434-9.142c-4.287-.117-8.638-.216-13.168-.216-4.516 0-8.87.105-13.184.216a470.07 470.07 0 0 0-9.416 9.142c-3.191 3.198-6.197 6.341-9.148 9.463-.123 4.285-.216 8.626-.216 13.142 0 4.51.099 8.857.216 13.156 2.952 3.123 5.945 6.257 9.143 9.446 3.155 3.164 6.29 6.19 9.421 9.133 4.291.126 8.656.229 13.184.229 4.524 0 8.881-.103 13.192-.229a413.223 413.223 0 0 0 9.415-9.133c3.194-3.189 6.179-6.312 9.127-9.439.127-4.294.217-8.642.217-13.163 0-4.51-.096-8.863-.217-13.159-2.947-3.111-5.931-6.248-9.132-9.446zM230.659 146.337c.084 1.384.126 2.774.187 4.164.931 1.039 1.892 2.048 2.816 3.086a374.083 374.083 0 0 0 4.419-6.074c-2.426-.408-4.876-.819-7.422-1.176zM253.478 123.389c12.664-22.707 15.78-38.151 12.298-41.646-.469-.486-2.042-1.045-4.852-1.045-8.341 0-21.209 4.488-36.815 13.231a352.909 352.909 0 0 1 4.083 25.397c8.706 1.076 17.162 2.433 25.286 4.063z" />
							</svg>
						</div>
						<h3 class="sub-title sub-anim-mod" data-sub-delay="450">Structure</h3>
						<p class="text sub-anim-mod" data-sub-delay="600">Semantic markup combine with powerful SEO offers high visibility in Google Search.</p>
					</li>
					<li class="tile cf anim-mod" data-delay="300" data-sub-anim="true" data-sync="false">
						<div class="icon sub-anim-mod" data-sub-delay="300">
							<svg width="49.654" height="49.654" viewBox="0 0 49.654 49.654">
								<path d="M24.827 0C11.138 0 .001 11.138.001 24.827c0 13.688 11.137 24.827 24.826 24.827 13.688 0 24.826-11.14 24.826-24.827C49.653 11.138 38.517 0 24.827 0zm0 35.891c-11.6 0-17.855-10.825-17.855-10.825s6.255-10.828 17.855-10.828c11.602 0 17.854 10.828 17.854 10.828s-6.252 10.825-17.854 10.825z" />
								<path d="M24.827 15.832c-5.091 0-9.232 4.142-9.232 9.232 0 5.09 4.142 9.229 9.232 9.229 5.09 0 9.231-4.142 9.231-9.229.002-5.09-4.14-9.232-9.231-9.232zm0 15.464a6.238 6.238 0 0 1-6.232-6.23 6.237 6.237 0 0 1 6.232-6.231 6.238 6.238 0 0 1 6.231 6.231 6.236 6.236 0 0 1-6.231 6.23z" />
								<path d="M27.124 25.441a2.222 2.222 0 1 1-.357-4.416 4.443 4.443 0 0 0-1.938-.457 4.495 4.495 0 1 0 4.494 4.496c0-.358-.054-.703-.134-1.037a2.22 2.22 0 0 1-2.065 1.414z" />
							</svg>
						</div>
						<h3 class="sub-title sub-anim-mod" data-sub-delay="450">Style</h3>
						<p class="text sub-anim-mod" data-sub-delay="600">Usage of CSS3 at the maximum level can avoid JavaScript and make the web-page lighter and faster.
							Also, the power of CSS3 can make a real visual difference.</p>
					</li>
					<li class="tile cf anim-mod" data-delay="300" data-sub-anim="true" data-sync="false">
						<div class="icon sub-anim-mod" data-sub-delay="300">
							<svg width="47.77" height="47.77" viewBox="0 0 47.77 47.77">
								<path d="M31.986 23.109c.266.451.27 1.012.008 1.465l-3.387 5.94a1.466 1.466 0 0 1-1.266.74l-6.84.036h-.007a1.468 1.468 0 0 1-1.266-.727l-3.449-5.902a1.461 1.461 0 0 1-.009-1.465l3.386-5.942c.26-.455.743-.737 1.266-.74l6.84-.037h.009a1.47 1.47 0 0 1 1.266.726l3.449 5.906zm15.784.776c0 13.171-10.715 23.885-23.885 23.885S0 37.055 0 23.885 10.715 0 23.885 0 47.77 10.715 47.77 23.885zm-13 9.732l3.387-5.94a1.467 1.467 0 0 1 1.267-.74l2.733-.016c.353-2.11.324-4.222-.037-6.27l-2.729.015h-.008a1.469 1.469 0 0 1-1.267-.726l-3.451-5.905a1.464 1.464 0 0 1-.008-1.465l1.471-2.579a18.316 18.316 0 0 0-5.036-3.167l-2.586 4.538a1.47 1.47 0 0 1-1.269.74l-6.837.036h-.008a1.47 1.47 0 0 1-1.266-.726l-2.641-4.518a18.492 18.492 0 0 0-5.001 3.22l1.505 2.574a1.47 1.47 0 0 1 .009 1.466l-3.387 5.94c-.26.454-.743.737-1.266.739l-2.736.016a18.419 18.419 0 0 0 .048 6.271l2.722-.015c.491-.026 1.009.274 1.273.726l3.451 5.904c.264.451.267 1.012.008 1.465l-1.464 2.569a18.4 18.4 0 0 0 5.031 3.175l2.584-4.535c.26-.455.743-.735 1.266-.738l6.838-.037h.008c.521 0 1.004.275 1.268.727l2.641 4.518a18.49 18.49 0 0 0 5-3.221l-1.502-2.574a1.46 1.46 0 0 1-.011-1.467z" />
							</svg>
						</div>
						<h3 class="sub-title sub-anim-mod" data-sub-delay="450">Functionality</h3>
						<p class="text sub-anim-mod" data-sub-delay="600">The magic in the interaction with the user is defined by javaScript. It gives us the possibility
							to have a dynamic page where the JavaScript events are creating a dynamic world where the user has an
							unforgetable experiece.</p>
					</li>
				</ul>
				<div class="skills-description cf mod equal-height">
					<ul class="two-third left cf">
						<li class="element half active">
							<img class="bg-element" src="assets/media/images/html5.jpg" alt="html five"/>
							<h3 class="sub-title bl">HTML5</h3>
							<p class="hidden-accesability text">
								<span class="bl">Developing semantic markup for the website's modules.</span>
								<span class="bl">Usage of data-attributes, to give more control over the markup.</span>
							</p>
						</li>
						<li class="element half">
							<img src="assets/media/images/css3.png" class="bg-element" alt="css three"/>
							<h3 class="sub-title bl">CSS3</h3>
							<p class="hidden-accesability text">
								<span class="bl">I use CSS3 on a regular basis in the modules that I develop. I always try to push it to its
									maximum potential to avoid the usage of JavaScript.</span>								
							</p>
						</li>
						<li class="element full-width">
							<img src="assets/media/images/css3.png" class="bg-element" alt="css three"/>
							<h3 class="sub-title bl">POSTCSS/SCSS</h3>
							<p class="hidden-accesability text">
								<span class="bl">I love the flexibility given by this CSS preprocessor. It makes the code more flexible and maintainable.</span>
								<span class="bl">I switched to POSTCSS because it can be configurable. Combined with Gulp offers more compared to SCSS.</span>
							</p>
						</li>
						<li class="element full-width">
							<img src="assets/media/images/js.jpg" class="bg-element" alt="javascript"/>
							<h3 class="sub-title bl">Vanilla JS/ Jquery / React</h3>
							<p class="hidden-accesability text">
								<span class="bl">I use vanilla JavaScript when I have to work with data and objects.</span>
								<span class="bl">I use Jquery, when I have to use a CMS to develop a solution.</span>							
								<span class="bl">When I don't have to use a CSM I use React to develop the UI, due to its flexibility.</span>
							</p>
						</li>
						<li class="element half">
							<img src="assets/media/images/git.jpg" class="bg-element" alt="git hub"/>
							<h3 class="sub-title bl">GIT</h3>
							<p class="text hidden-accesability">
								<span class="bl">I use Git as a version control software.</span>
							</p>
						</li>
						<li class="element half">
							<img src="assets/media/images/git.jpg" class="bg-element" alt="git hub"/>
							<h3 class="sub-title bl">GULP</h3>
							<p class="text hidden-accesability">
								<span class="bl">I use Gulp every day in web development.</span>
							</p>
						</li>
						<li class="element one-third">
							<img class="bg-element" src="assets/media/images/php.jpg" alt="php"/>
							<h3 class="sub-title bl">PHP</h3>
							<p class="text hidden-accesability">
								<span class="bl">I have used PHP in the past for basic requirements.</span>								
							</p>
						</li>
						<li class="element one-third">
							<img class="bg-element" src="assets/media/images/php.jpg" alt="php"/>
							<h3 class="sub-title bl">Node.js</h3>
							<p class="text hidden-accesability">
								<span class="bl">I'm using Node.js when I develop web applications with React.js. </span>								
							</p>
						</li>
						<li class="element one-third">
							<img src="assets/media/images/visual-studio.jpg" class="bg-element" alt="visual studio"/>
							<h3 class="sub-title bl">Visual-Studio</h3>
							<p class="text hidden-accesability">
								<span class="bl">It's my favourite code editor.</span>
								<span class="bl">I love the fact that is very adaptable and customizable.</span>
							</p>
						</li>
						<li class="element half">
							<img src="assets/media/images/sitecore.png" class="bg-element" alt="sitecore"/>
							<h3 class="sub-title bl">Sitecore</h3>
							<p class="text hidden-accesability">
								<span class="bl">Experience developing modules for Sitecore CMS.</span>
							</p>
						</li>
						<li class="element half">
							<img src="assets/media/images/sitecore.png" class="bg-element" alt="sitecore"/>
							<h3 class="sub-title bl">Firebase</h3>
							<p class="text hidden-accesability">
								<span class="bl">Experience developing web application using Firebase.</span>
							</p>
						</li>
					</ul>
					<div class="one-third left skills-detailer">
						<div class="holder">
							<h3 class="sub-title">HTML5</h3>
							<p class="text">Developing semantic markup for the website's modules. Usage of data-attributes, to give more
								control over the markup.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- portfolio -->
		<section class="portfolio mod module" id="portfolio">
			<div class="holder">
				<h2 class="title line-decoration">Portfolio</h2>
				<div class="current-projects">
					<h3 class="my-project-title">The following project were managed by me</h3>
					<div class="row cf">
						<div class="two-third left row-elem">
							<div class="show-desktop anim-mod" data-delay="300" data-sync="true">
								<img class="img-frame" src="assets/media/images/desktop-frame.png" alt="image frame" />
								<div class="content">
									<img class="img-project" src="assets/media/images/sknk-desktop.png" alt="sknk image desktop version" />
								</div>
							</div>
							<div class="show-tablet anim-mod" data-delay="450" data-sync="true">
								<img class="img-frame" src="assets/media/images/tablet-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/sknk-tablet.png" alt="sknk image desktop version" />
								</div>
							</div>
							<div class="show-mobile anim-mod" data-delay="600" data-sync="true">
								<img class="img-frame" src="assets/media/images/mobile-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/sknk-mobile.png" alt="sknk image desktop version" />
								</div>
							</div>
						</div>
						<div class="one-third left row-elem">
							<h4 class="sub-title">SKNK labs landing page</h4>
							<div class="btn-holder">
								<button class="cta" type="button" data-file="sknk">
									<span>Details</span>
								</button>
							</div>
							<div class="holder-image-text">
								<p class="sub-title">Surf the website</p>
								<figure class="align-center">
									<img class="funky-arrow" src="assets/media/images/funky-arrow.png" alt="arrow"/>
								</figure>
							</div>
						</div>
					</div>
					<div class="row cf">
						<div class="two-third right row-elem">
							<div class="show-desktop anim-mod" data-delay="300" data-sync="true">
								<img class="img-frame" src="assets/media/images/desktop-frame.png" alt="desktop frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/rps-desktop.png" alt="rps project for desktop" />
								</div>
							</div>
							<div class="show-tablet anim-mod" data-delay="450" data-sync="true">
								<img class="img-frame" src="assets/media/images/tablet-frame.png" alt="tablet frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/rps-tablet.png" alt="rps project for tablet" />
								</div>
							</div>
							<div class="show-mobile anim-mod" data-delay="600" data-sync="true">
								<img class="img-frame" src="assets/media/images/mobile-frame.png" alt="mobile frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/rps-mobile.png" alt="rps project for mobile" />
								</div>
							</div>
						</div>
						<div class="one-third left row-elem">
							<h4 class="sub-title">Resolute property studio</h4>
							<div class="btn-holder">
								<button class="cta" type="button" data-file="rps">
									<span>Details</span>
								</button>
							</div>
							<div class="holder-image-text">
								<p class="sub-title">Surf the website</p>
								<figure class="align-center">
									<img class="funky-arrow" src="assets/media/images/funky-arrow.png" alt="arrow"/>
								</figure>
							</div>
						</div>
					</div>
					<div class="row cf">
						<div class="two-third left row-elem">
							<div class="show-desktop anim-mod" data-delay="300" data-sync="true">
								<img class="img-frame" src="assets/media/images/desktop-frame.png" alt="arrow"/>
								<div class="content">
									<img class="img-project" src="assets/media/images/text-miner-desktop.png" alt="sknk image desktop version" />
								</div>
							</div>
							<div class="show-tablet anim-mod" data-delay="450" data-sync="true">
								<img class="img-frame" src="assets/media/images/tablet-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/text-miner-tablet.png" alt="sknk image desktop version" />
								</div>
							</div>
							<div class="show-mobile anim-mod" data-delay="600" data-sync="true">
								<img class="img-frame" src="assets/media/images/mobile-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/text-miner-mobile.png" alt="sknk image desktop version" />
								</div>
							</div>
						</div>
						<div class="one-third left row-elem">
							<h4 class="sub-title">Text miner</h4>
							<div class="btn-holder">
								<button type="button" class="cta" data-file="textMiner">
									<span>Details</span>
								</button>
							</div>
							<div class="holder-image-text">
								<p class="sub-title">Surf the website</p>
								<figure class="align-center">
									<img class="funky-arrow" src="assets/media/images/funky-arrow.png" alt="arrow"/>
								</figure>
							</div>
						</div>
					</div>
					<div class="row cf">
						<div class="two-third right row-elem">
							<div class="show-desktop anim-mod" data-delay="300" data-sync="true">
								<img class="img-frame" src="assets/media/images/desktop-frame.png" alt="desktop frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/movies-desktop.png" alt="movies react application desktop" />
								</div>
							</div>
							<div class="show-tablet anim-mod" data-delay="450" data-sync="true">
								<img class="img-frame" src="assets/media/images/tablet-frame.png" alt="tablet frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/movies-tablet.png" alt="movies react application tablet" />
								</div>
							</div>
							<div class="show-mobile anim-mod" data-delay="600" data-sync="true">
								<img class="img-frame" src="assets/media/images/mobile-frame.png" alt="mobile frame image" />
								<div class="content">
									<img class="img-project" src="assets/media/images/movies-mobile.png" alt="movies react application mobile" />
								</div>
							</div>
						</div>
						<div class="one-third left row-elem">
							<h4 class="sub-title">React movie app</h4>
							<div class="btn-holder">
								<button class="cta" type="button" data-file="movies">
									<span>Details</span>
								</button>
							</div>
							<div class="holder-image-text">
								<p class="sub-title">Surf the website</p>
								<figure class="align-center">
									<img class="funky-arrow" src="assets/media/images/funky-arrow.png" alt="arrow"/>
								</figure>
							</div>
						</div>
					</div>
					<div class="row cf">
						<div class="two-third left row-elem">
							<div class="show-desktop anim-mod" data-delay="300" data-sync="true">
								<img class="img-frame" src="assets/media/images/desktop-frame.png" alt="arrow"/>
								<div class="content">
									<img class="img-project" src="assets/media/images/react-image-app-desktop.png" alt="react image app desktop version" />
								</div>
							</div>
							<div class="show-tablet anim-mod" data-delay="450" data-sync="true">
								<img class="img-frame" src="assets/media/images/tablet-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/react-image-app-tablet.png" alt="react image app tablet version" />
								</div>
							</div>
							<div class="show-mobile anim-mod" data-delay="600" data-sync="true">
								<img class="img-frame" src="assets/media/images/mobile-frame.png" alt="sknk image desktop version" />
								<div class="content">
									<img class="img-project" src="assets/media/images/react-image-app-mobile.png" alt="react image app desktop version" />
								</div>
							</div>
						</div>
						<div class="one-third left row-elem">
							<h4 class="sub-title">React image app</h4>
							<div class="btn-holder">
								<button type="button" class="cta" data-file="reactImageApp">
									<span>Details</span>
								</button>
							</div>
							<div class="holder-image-text">
								<p class="sub-title">Surf the website</p>
								<figure class="align-center">
									<img class="funky-arrow" src="assets/media/images/funky-arrow.png" alt="arrow"/>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div class="other-projects">
					<div class="row other-project cf">
						<h3 class="my-project-title">Bug fixing projects</h3>
						<ul class="cf">
							<li class="left element">
								<a href="http://www.mandg.co.uk/" target="_blank" rel="noreferrer">
									<img class="project-img" src="assets/media/images/m&g.png" alt="M&G"/>
								</a>
							</li>
							<li class="left element">
								<a href="http://www.thegappartnership.com/" target="_blank" rel="noreferrer">
									<img class="project-img" src="assets/media/images/gap.png" alt="the gap"/>
								</a>
							</li>
							<li class="left element">
								<a href="https://www.eef.org.uk/" target="_blank" rel="noreferrer">
									<img class="project-img" src="assets/media/images/eef.jpg" alt="eef"/>
								</a>
							</li>
						</ul>
					</div>
					<div class="row other-project cf">
						<h3 class="my-project-title">Projects done from scratch</h3>
						<ul class="cf">
							<li class="left element">
								<a href="https://www.coltdatacentres.net/" target="_blank" rel="noreferrer">
									<img src="assets/media/images/colt.png" class="project-img" alt="colt"/>
								</a>
								<div class="btn-holder">
									<button class="cta" data-file="colt" type="button">
										<span>Details</span>
									</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="align-center load-more anim-mod" data-delay="300" data-sync="false">
					<button class="cta load-projects avoid">
						<span>Load more projects</span>
					</button>
				</div>
			</div>
		</section>
		<!--Start Contact  -->
		<section class="contact mod module" id="contact-me">
			<div class="holder cf">
				<h2 class="title">I'm here to help you</h2>
				<div class="two-third left contact-holder">
					<!-- form -->
					<div class="mod-form cf" data-error-summary="true" data-instant-feedback="true" data-disable-submit="requiredonly"
					 data-inline-errors="true" data-server-error-message="There was an error, please try again." data-stylish-form="true">

						<!-- form section -->
						<article class="form-section" data-batch-name="" data-endpoint="" data-partial-server-stepover="false">
							<!-- form field -->
							<form class="contact-form" name="sentMessage">
								<!-- name -->
								<div class="form-field anim-mod" data-delay="300" data-reverse-anim="slide-up-hide" data-sync="true" data-type="text" data-field-id="ModelPropertyA" data-validation="required">
									<label class="sub-title" for="full-name">Full name</label>
									<input type="text" placeholder="ex: Jonh Doe" name="name" id="full-name"/>

									<!-- error messages -->
									<div class="err-msgs">
										<div data-validation="required">This field is REQUIRED - please enter some text</div>
									</div>
								</div>
								<!-- phone -->
								<div class="form-field anim-mod" data-delay="450" data-reverse-anim="slide-up-hide" data-sync="true" data-type="text" data-field-id="ModelPropertyA" data-validation="required">
									<label class="sub-title" for="phone">Phone number</label>
									<input type="text" placeholder="ex: ++447810788623" name="phone" id="phone"/>

									<!-- error messages -->
									<div class="err-msgs">
										<div data-validation="required">This field is REQUIRED - please enter some text</div>
									</div>
								</div>
								<!-- email -->
								<div class="form-field anim-mod" data-delay="600" data-reverse-anim="slide-up-hide" data-sync="true" data-type="text" data-field-id="ModelPropertyA" data-validation="required|regex"
								 data-custom-regex="^^\S+@\S+\.\S+$">
									<label class="sub-title" for="email">Email address</label>
									<input type="text" placeholder="ex: jonh.doe@exemple.com" id="email" name="email"/>

									<!-- error messages -->
									<div class="err-msgs">
										<div data-validation="required">This field is REQUIRED - please enter some text</div>
										<div data-validation="regex">Invalid email address</div>
									</div>
								</div>
								<div class="form-field anim-mod" data-delay="750" data-reverse-anim="slide-up-hide" data-sync="true" data-type="text" data-field-id="ModelPropertyA" data-validation="required">
									<label class="sub-title" for="textarea">Message</label>
									<textarea type="text" id="textarea" placeholder="Please describe your need. Thank you!" name="message"></textarea>

									<!-- error messages -->
									<div class="err-msgs">
										<div data-validation="required">This field is REQUIRED - please enter some text</div>
									</div>
								</div>
							</form>
						</article>
						<div class="btn-holder cf">
							<!-- full form submit -->
							<button class="cta full-submit right not-active anim-mod" data-delay="900" data-reverse-anim="slide-up-hide" data-sync="true" disabled>
								<span>Submit</span>
							</button>
							<!-- full form clear -->
							<button class="cta form-clear right not-active anim-mod" data-delay="1100" data-reverse-anim="slide-up-hide" data-sync="true">
								<span>Clear</span>
							</button>
						</div>
						<div class="form-feedback hidden-accesability">
					        <h3 class="sub-title">I received your email!</h3>
							<p class="text">Thank you for getting in touch. I'll contact you in the next 48h.</p>							
					    </div>
					</div>					
				</div>
				<div class="one-third left anim-mod" data-sub-anim="true" data-delay="300" data-sync="false">
					<address class="address-holder">
						<dl>
							<dt class="address-elem anim-mod" data-delay="300" data-sync="true">
								<p>Address</p>
							</dt>
							<dd class="address-desc anim-mod" data-delay="300" data-sync="true">
								<p>19 flat 1 Pembury Road</p>
								<p>Southend on Sea, UK</p>
							</dd>
							<dt class="address-elem anim-mod" data-delay="450" data-sync="true">
								<p>Phone</p>
							</dt>
							<dd class="address-desc anim-mod" data-delay="450" data-sync="true">
								<p>07810788629</p>
							</dd>
							<dt class="address-elem anim-mod" data-delay="600" data-sync="true">
								<p>E-mail</p>
							</dt>
							<dd class="address-desc anim-mod" data-delay="600" data-sync="true">
								<p>mare.sergiu@gmail.com</p>
							</dd>
						</dl>
					</address>
				</div>
			</div>
		</section>
		<!-- maps API -->
		<div id="map" class="module"></div>
		<div class="light-box">
			<div class="holder">
				<header class="box-header">
					<span class="close-button"></span>
				</header>
				<div class="box-body"></div>
				<footer class="box-footer"></footer>
			</div>
		</div>
	</div>
	<!-- footer -->
	<footer class="footer module" id="site-footer">
		<h2 class="hidden-accesability">Footer</h2>
		<div class="holder cf">
			<nav class="one-third element secondary-nav left">
				<h3 class="hidden-accesability">Footer navigation</h3>
				<ul class="nav-list">
					<li class="nav-elem">
						<a class="icon" href="https://www.linkedin.com/in/sergiuandreioctaviamare/" rel="noreferrer">
						    <span class="desc">Sergiu Mare linkedin</span>
							<img src="assets/media/icons/linked-in-white.svg" alt="inked in">
						</a>
					</li>
					<li class="nav-elem">
						<a href="https://github.com/maresergiu" rel="noreferrer">
						    <span class="desc">Sergiu Mare github</span>
							<img class="icon" src="assets/media/icons/git-white.svg" alt="git hub">
						</a>
					</li>
					<li class="nav-elem">
					    <span class="desc">Sergiu Mare codepen</span>
						<a href="https://codepen.io/maresergiu/" rel="noreferrer">
							<img class="icon" src="assets/media/icons/codepen-white.svg" alt="codepen">
						</a>
					</li>
				</ul>
			</nav>
			<div class="two-third footer-desc right">
				<div class="desc">
					<p class="text">&copy; Mare Sergiu - Front-End Developer - 2018 | All rights reserved<p>
				</div>
			</div>
		</div>
	</footer>
	<script id="portfolio-light-box" type="text/x-handlebars-template">
		{{#if title.length}}
		    <h2 class="title">{{title}}</h2>
		{{/if}}
		{{#if info.length}}
            <p class="text">{{info}}</p>
		{{/if}}
		{{#if skills.length}}
		    <p class="text">{{skills}}</p>
		{{/if}}
		{{#if url.length}}
		    <a href={{url}} class="cta">
		        <span>Visit site</span>
		    </a>
		{{/if}}
	</script>

	<!-- secondary stylesheets -->
	<link rel="stylesheet" href="assets/css/modules/hero-mod.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/about-mod.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/quote-mod.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/skills-mod.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/portfolio-mod.css" type="text/css" />
	<link rel="stylesheet" href="assets/css/modules/contact-mod.css" type="text/css" />

	<!-- js libraries -->
	<script src="assets/scripts/libs/toolkit.min.js"></script>
	<script src="assets/scripts/libs/jquery-1.8.2.min.js"></script>
	<script src="assets/scripts/libs/handlebars.js"></script>
	<script src="assets/scripts/libs/form-validation.min.js"></script>
	<script src="assets/scripts/libs/stylish-forms.min.js"></script>

	<!-- js global -->
	<script src="assets/scripts/global.js"></script>
	<script src="assets/scripts/helpers.js"></script>

	<!-- js modules -->
	<script src="assets/scripts/modules/hero-mod.js"></script>
	<script src="assets/scripts/modules/map-mod.js"></script>
	<script src="assets/scripts/modules/nav-mod.js"></script>
	<script src="assets/scripts/modules/portfolio-mod.js"></script>
	<script src="assets/scripts/modules/skills-mod.js"></script>
	<script src="assets/scripts/modules/contact-mod.js"></script>
</body>

</html>
