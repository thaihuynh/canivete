import _reactToEvent from "./internal/event/_reactToEvent";

/**
 * Removes one or more event listeners from one or more DOM elements at once.
 * This function is a wrapper for
 * [`Element.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
 * that accepts a space-separated event names string and a group
 * of target DOM elements.
 *
 * @category Event
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param {string} eventStr The event names string.
 * @param {Function} callback The function to be ignored.
 * @param {Boolean} [useCapture = false] The event phase being listened for.
 */
const ignore = (domEls, eventStr, callback, useCapture = false) => _reactToEvent("removeEventListener", domEls, eventStr, callback, useCapture);

export default ignore;