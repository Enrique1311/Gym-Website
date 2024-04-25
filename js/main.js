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
		trainerImg: "../assets/images/borney-image.png",
	},
	{
		id: "2",
		name: "Elsa Windia",
		trainerImg: "../assets/images/elsa-img.png",
	},
	{
		id: "3",
		name: "Geourge Aryo",
		trainerImg: "../assets/images/geourge-img.png",
	},
	{
		id: "4",
		name: "Angela Mellisa",
		trainerImg: "../assets/images/angela-img.jpg",
	},
];

function trainersSlider() {
	const $sliderContent = d.querySelector(".trainers-slider");
	const $trainersTemplate = d.getElementById(
		"trainers-slider-template"
	).content;
	const $slideFragment = d.createDocumentFragment();

	const $sliderBtnsContent = d.querySelector(".trainers-slider-btns");
	const $sliderBtns = d.querySelector(".trainers-slider-btns");
	const $sliderBtnsTemplate = d.getElementById("slider-btns-template").content;
	const $slideBtnsFragment = d.createDocumentFragment();

	let i = 0;

	trainers.forEach((el) => {
		// Slider Items
		// $trainersTemplate
		// 	.querySelector(".trainers-slider-card")
		// 	.setAttribute("id", `img-${el.id}`);
		$trainersTemplate
			.querySelector(".trainers-slider-image")
			.setAttribute("src", el.trainerImg);

		$trainersTemplate.querySelector("h4").textContent = el.name;
		let $sliderClone = d.importNode($trainersTemplate, true);
		$slideFragment.appendChild($sliderClone);

		// Slider buttons
		// $sliderBtnsTemplate
		// 	.querySelector(".slider-btn")
		// 	.setAttribute("href", `#img-${el.id}`);
		let $sliderBtnClone = d.importNode($sliderBtnsTemplate, true);
		$sliderBtns.appendChild($sliderBtnClone);
	});

	$sliderContent.appendChild($slideFragment);
	$sliderBtnsContent.appendChild($slideBtnsFragment);
	d.querySelector(".slider-btn").classList.add("active-btn");

	d.addEventListener("click", (e) => {});
}
trainersSlider();
