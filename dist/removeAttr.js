import _setAttrBase from "./internal/dom/_setAttrBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Removes an attribute from one or many DOM elements using
 * native [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute).
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param {string} attrName The attribute name.
 *
 * @example
 * let oneElement = document.querySelector("a[data-level]");
 * removeAttr(oneElement, "data-level");
 *
 * oneElement.getAttribute("data-level");
 * // => null
 *
 * oneElement.dataset.level;
 * // => undefined
 *
 * @example
 * let oneElement = document.querySelector("a[data-level]");
 * removeAttr(oneElement, "class");
 *
 * oneElement.getAttribute("class");
 * // => null
 *
 * oneElement.className;
 * // => ""
 *
 * @example
 * let manyElements = document.querySelectorAll("a[data-level]");
 * removeAttr(manyElements, "data-level");
 *
 * manyElements[0].getAttribute("data-level");
 * // => null
 *
 * manyElements[0].dataset.level;
 * // => undefined
 */
function removeAttr(domEls, attrName) {
	_domElementsAsArray(domEls).forEach(domEl => _setAttrBase(domEl, attrName, false));
}

export default removeAttr;
