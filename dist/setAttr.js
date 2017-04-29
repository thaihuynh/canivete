import _setAttrBase from "./internal/dom/_setAttrBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Sets an attribute for one or many DOM elements using
 * native [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param {string} attrName The attribute name.
 * @param {(string|number|boolean)} value The attribute value.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * setAttr(oneElement, "data-level", 42);
 *
 * oneElement.getAttribute("data-level");
 * // => "42"
 *
 * oneElement.dataset.level;
 * // => "42"
 *
 * @example
 * let oneElement = document.querySelector("a");
 * setAttr(oneElement, "class", "button");
 *
 * oneElement.getAttribute("class");
 * // => "button"
 *
 * oneElement.className;
 * // => "button"
 *
 * @example
 * let manyElements = document.querySelectorAll("a");
 * setAttr(manyElements, "data-level", 42);
 *
 * manyElements[0].getAttribute("data-level");
 * // => "42"
 *
 * manyElements[0].dataset.level;
 * // => "42"
 */
function setAttr(domEls, attrName, value) {
	_domElementsAsArray(domEls).forEach(domEl => _setAttrBase(domEl, attrName, value));
}

export default setAttr;
