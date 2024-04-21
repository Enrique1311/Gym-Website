const d = document,
	w = window;

// Network Status********************************
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

// ************Main Buttons******************************************************
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

// ***********Top Button****************************************************************
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

// ***********Service Section****************************************************************
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

const $serviceContent = document.querySelector(".service-content");
const $template = document.getElementById("service-template").content;
const $fragment = document.createDocumentFragment();

chooseUs.forEach((el) => {
	$template.querySelector("h5").textContent = el.id;
	$template.querySelector("span").textContent = el.title;
	$template.querySelector("p").textContent = el.text;

	let $clone = document.importNode($template, true);
	$fragment.appendChild($clone);
});

$serviceContent.appendChild($fragment);
