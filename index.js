function getFirstSelector(selector) {
	return document.querySelector(selector);
}

// , which accepts a selector and returns the first element that matches.
function nestedTarget() {
	return document.querySelector("#nested .target");
}

 // that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function increaseRankBy(n) {
	document.querySelectorAll(".ranked-list li").forEach((li) => {li.innerHTML = parseInt(li.innerHTML) + n }) ;
}

 // that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

function deepestChild() {
	let queryStr = "#grand-node";


	while (document.querySelector(queryStr)){
			queryStr += " div";
	}

	return document.querySelector(queryStr.slice(0, -4));
}

 // that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)