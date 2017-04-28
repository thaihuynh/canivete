import parents from "./parents";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";

/**
 * The same as `parents()`, except it includes
 * the DOM element as the first item of the result.
 * 
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @return {Array.<HTMLElement>} The DOM element and its parents.
 * 
 * @example
 * let domChild = document.createElement("div"),
 * 	domParent = document.createElement("div"),
 * 	domGrandparent.appendChild(domParent),
 * 	body = document.body,
 * 	html = document.querySelector("html");
 * 
 * domParent.appendChild(domChild);
 * domGrandparent.appendChild(domParent);
 * body.appendChild(domGrandparent);
 * 
 * selfAndParents(domChild);
 * // => [domChild, domParent, domGrandparent, body, html, document]
 */
const selfAndParents = domEl => {
	if (!_isElementOrDocumentOrWindow(domEl) && memo.length === 0) {
		throw new Error("An HTMLElement is expected as parameter.");
	}

	return [domEl].concat(parents(domEl));
};

export default selfAndParents;
