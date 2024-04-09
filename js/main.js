// ************Buttons - Events Delegation************************************************************************
function aboutUsDetails(e) {
	alert(`About Us Details`);
}

document.addEventListener("click", (e) => {
	if (e.target.matches(".about-us-btn")) {
		aboutUsDetails(e);
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
