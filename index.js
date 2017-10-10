function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
	document.querySelectorAll(".ranked-list li").forEach((li) => {li.innerHTML = parseInt(li.innerHTML) + n }) ;
}

function deepestChild() {
	let queryStr = "#grand-node";
	while (document.querySelector(queryStr)){
			queryStr += " div";
	}
	return document.querySelector(queryStr.slice(0, -4));
}
