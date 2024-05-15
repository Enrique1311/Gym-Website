const d = document,
	w = window;

// ************ Network Status ********************************
function networkStatus() {
	const isOnline = () => {
		const $div = d.createElement("div");

		if (navigator.onLine) {
			$div.textContent = "Your connection was restored!";
			$div.classList.remove("offline");
			$div.classList.add("online");
		} else {
			$div.textContent = "Lost connection!";
			$div.classList.remove("online");
			$div.classList.add("offline");
		}
		d.body.insertAdjacentElement("afterbegin", $div);
		setTimeout(() => d.body.removeChild($div), 3000);
	};

	w.addEventListener("online", (e) => isOnline());
	w.addEventListener("offline", (e) => isOnline());
}
networkStatus();

// ************ Main Buttons ******************************************************
d.addEventListener("click", (e) => {
	function aboutUsDetails() {
		const showMore = (e) => {
			alert(`About Us Details`);
		};

		if (e.target.matches(".about-us-btn")) {
			showMore();
		}
	}
	aboutUsDetails();
});

// *********** Top Button ****************************************************************
w.addEventListener("scroll", (e) => {
	let scrollTop = d.documentElement.scrollTop;

	if (scrollTop > 100) {
		d.querySelector(".top-btn").classList.remove("hidden-btn");
	} else {
		d.querySelector(".top-btn").classList.add("hidden-btn");
	}
});

d.addEventListener("click", (e) => {
	if (e.target.matches(".top-btn") || e.target.matches(".top-btn i")) {
		w.scrollTo({ behavior: "smooth", top: 0 });
	}
});

// *********** Service Section ****************************************************************
const chooseUs = [
	{
		id: "01",
		title: "Personal Training",
		text: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals",
	},
	{
		id: "02",
		title: "Equipment and facilities",
		text: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals",
	},
	{
		id: "03",
		title: "Equipment and facilities",
		text: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals",
	},
	{
		id: "04",
		title: "Nutrition counseling",
		text: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals",
	},
];

function service() {
	const $serviceContent = document.querySelector(".service-content");
	const $serviceTemplate = document.getElementById("service-template").content;
	const $fragment = document.createDocumentFragment();

	chooseUs.forEach((el) => {
		$serviceTemplate.querySelector("h5").textContent = el.id;
		$serviceTemplate.querySelector("span").textContent = el.title;
		$serviceTemplate.querySelector("p").textContent = el.text;

		let $clone = document.importNode($serviceTemplate, true);
		$fragment.appendChild($clone);
	});

	$serviceContent.appendChild($fragment);
}
service();

// ***********Trainers Section****************************************************************

const trainers = [
	{
		id: "1",
		name: "Borney Exiteid",
		trainerImg: "../assets/images/trainers-slider/borney-image.png",
	},
	{
		id: "2",
		name: "Elsa Windia",
		trainerImg: "../assets/images/trainers-slider/elsa-img.png",
	},
	{
		id: "3",
		name: "Geourge Aryo",
		trainerImg: "../assets/images/trainers-slider/geourge-img.png",
	},
	{
		id: "4",
		name: "Angela Mellisa",
		trainerImg: "../assets/images/trainers-slider/angela-img.jpg",
	},
	{
		id: "5",
		name: "Ann Williamson",
		trainerImg: "../assets/images/trainers-slider/ann-img.jpg",
	},
];

function trainersSlider() {
	// Trainers Slider Cards
	const $sliderContent = d.querySelector(".trainers-slider");
	const $trainersTemplate = d.getElementById(
		"trainers-slider-template"
	).content;
	const $slideFragment = d.createDocumentFragment();

	trainers.forEach((el) => {
		//  Slider Items
		$trainersTemplate
			.querySelector(".trainers-slider-card")
			.setAttribute("id", `img-${el.id}`);
		$trainersTemplate
			.querySelector(".trainers-slider-image")
			.setAttribute("src", el.trainerImg);
		$trainersTemplate.querySelector("h4").textContent = el.name;

		let $sliderClone = d.importNode($trainersTemplate, true);
		$slideFragment.appendChild($sliderClone);
	});

	$sliderContent.appendChild($slideFragment);

	// Trainers Slider Buttons
	const $sliderItem = d.querySelector(".trainers-slider");
	const $slideButtons = d.querySelectorAll(".slider-btn");

	$slideButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const direction = btn.id === "left-btn" ? -0.8 : 0.8;
			const scrollAmount = $sliderItem.clientWidth * direction;
			$sliderItem.scrollBy({ left: scrollAmount, behavior: "smooth" });
		});
	});
}
trainersSlider();

// ***********Testimonial Section****************************************************************

const testimonials = [
	{
		id: "1",
		name: "Jhony Breaker",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/jhony-breaker.jpg",
	},
	{
		id: "2",
		name: "Cathy Pham",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/cathy-pham.jpg",
	},
	{
		id: "3",
		name: "Aaron Brodgen",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/aaron-brogden.jpg",
	},
	{
		id: "4",
		name: "Mike Smith",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/mike-smith.jpg",
	},
	{
		id: "5",
		name: "Sule Makaroglu",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/sule-makaroglu.jpg",
	},
	{
		id: "6",
		name: "Hayley Kim",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/hayley-kim.jpg",
	},
	{
		id: "7",
		name: "Jhon Foster",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/jhon-foster.jpg",
	},
	{
		id: "8",
		name: "Bruce Mars",
		comment:
			"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
		stars: "../assets/images/stars.png",
		userImg: "../assets/images/testimonial-slider/bruce-mars.jpg",
	},
];

function testimonialSlider() {
	// Trainers Slider Cards
	const $testimonialsSliderContent = d.querySelector(".testimonial-slider"),
		$testimonialsTemplate = d.getElementById(
			"testimonial-slider-template"
		).content,
		$testimonialsFragment = d.createDocumentFragment();

	testimonials.forEach((el) => {
		$testimonialsTemplate.querySelector("p").textContent = el.comment;
		$testimonialsTemplate.querySelector(".stars").setAttribute("src", el.stars);

		$testimonialsTemplate.querySelector("h2").textContent = el.name;

		$testimonialsTemplate
			.querySelector(".testimonial-card-image")
			.setAttribute("src", el.userImg);

		let $sliderClone = d.importNode($testimonialsTemplate, true);
		$testimonialsFragment.appendChild($sliderClone);
	});
	$testimonialsSliderContent.appendChild($testimonialsFragment);
}

testimonialSlider();

function moveSlider() {
	const $testimonialSlider = d.querySelector(".testimonial-slider");
	let $sliderCards = d.querySelectorAll(".testimonial-slider-card");
	let lastSlide = $sliderCards[$sliderCards.length - 1];
	const $btnLeft = d.querySelector(".left-btn-2");
	const $btnRight = d.querySelector(".right-btn-2");

	console.log($btnRight);

	$testimonialSlider.insertAdjacentElement("afterbegin", lastSlide);

	const nextCard = () => {
		let firstSlide = d.querySelectorAll(".testimonial-slider-card")[0];
		$testimonialSlider.style.marginLeft = "-200%";
		$testimonialSlider.style.transition = "all 0.5s linear";

		setTimeout(() => {
			$testimonialSlider.style.transition = "none";
			$testimonialSlider.insertAdjacentElement("beforeend", firstSlide);
			$testimonialSlider.style.marginLeft = "-100%";
		}, 500);
	};

	const prevCard = () => {
		let $sliderCards = d.querySelectorAll(".testimonial-slider-card");
		let lastSlide = $sliderCards[$sliderCards.length - 1];

		$testimonialSlider.style.marginLeft = "0";
		$testimonialSlider.style.transition = "all 0.5s linear";

		setTimeout(() => {
			$testimonialSlider.style.transition = "none";
			$testimonialSlider.insertAdjacentElement("afterbegin", lastSlide);
			$testimonialSlider.style.marginLeft = "-100%";
		}, 500);
	};

	$btnRight.addEventListener("click", () => nextCard());
	$btnLeft.addEventListener("click", () => prevCard());

	setInterval(() => {
		nextCard();
	}, 3000);
}

moveSlider();
