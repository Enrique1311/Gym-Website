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
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

chooseUs.forEach((el) => {
	const $article = document.createElement("article");
	$article.classList.add("service-article");

	const $h5 = document.createElement("h5");
	$h5.textContent = el.id;
	$article.appendChild($h5);

	const $span = document.createElement("span");
	$span.textContent = el.title;
	$article.appendChild($span);

	const $p = document.createElement("p");
	$p.textContent = el.text;
	$article.appendChild($p);

	$fragment.appendChild($article);
});

$serviceContent.appendChild($fragment);
