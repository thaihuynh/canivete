import _formatBemRadical from "./internal/bem/_formatBemRadical";
import _formatBemModifier from "./internal/bem/_formatBemModifier";

/**
 * Formats a CSS class according to the
 * [BEM methodology](https://en.bem.info/methodology/). The
 * function receives a block, an element, a modifier, a value
 * for the modifier and an array of BEM connectors, e.g. “__”,
 * “--” and “-”.
 *
 * Note that if a value is not passed to the modifier, either
 * `true` or a string, it will not be added to the class.
 * 
 * @category BEM
 * @param  {string} block The BEM block.
 * @param  {string} element The BEM element.
 * @param  {string} modifier The BEM modifier.
 * @param  {(string|boolean)} value The BEM modifier value.
 * @param  {Array.<string>} connectors The BEM connectors.
 * @return {string} The BEM CSS class.
 *
 * @example
 * let connectors = ["__", "--", "-"];
 * 
 * formatBemClass("menu", null, null, null, connectors);
 * // => "menu"
 * 
 * formatBemClass("menu", "item", null, null, connectors);
 * // => "menu__item"
 * 
 * formatBemClass("menu", "item", "active", null, connectors);
 * // => "menu__item"
 * 
 * formatBemClass("menu", "item", "active", false, connectors);
 * // => "menu__item"
 * 
 * formatBemClass("menu", "item", "active", true, connectors);
 * // => "menu__item--active"
 * 
 * formatBemClass("menu", "item", "level", 42, connectors);
 * // => "menu__item--level-42"
 * 
 * formatBemClass("menu", "item", "level", "42", connectors);
 * // => "menu__item--level-42"
 * 
 * formatBemClass("menu", null, "active", null, connectors);
 * // => "menu"
 * 
 * formatBemClass("menu", null, "active", false, connectors);
 * // => "menu"
 * 
 * formatBemClass("menu", null, "active", true, connectors);
 * // => "menu--active"
 * 
 * formatBemClass("menu", null, "level", 42, connectors);
 * // => "menu--level-42"
 * 
 * formatBemClass("menu", null, "level", "42", connectors);
 * // => "menu--level-42"
 */
function formatBemClass(block, element, modifier, value, connectors) {
	let radical = _formatBemRadical(block, element, connectors);
	let classModifier = _formatBemModifier(modifier, value, connectors);
	return `${radical}${classModifier}`;
}

export default formatBemClass;