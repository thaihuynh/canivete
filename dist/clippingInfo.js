import _getVerticalAxisInfo from "./internal/clipping/_getVerticalAxisInfo";
import _getHorizontalAxisInfo from "./internal/clipping/_getHorizontalAxisInfo";

/**
 * Given two DOM Elements, a child and a mask, returns an
 * object with position and clipping information of the
 * child in relation to the mask.
 *
 * The returned object has the following properties:
 *
 * | Property | Type | Child relation with the mask |
 * |---|---|---|
 * | `isOffTop` | Boolean | Above and off the mask. |
 * | `isOffBottom` | Boolean | Below and off the mask. |
 * | `isOffLeft` | Boolean | On the left and off the mask. |
 * | `isOffRight` | Boolean | On the right and off the mask. |
 * | `isOff` | Boolean | Off the mask. |
 * | `isClippedTop` | Boolean | Above and intersecting with the mask. |
 * | `isClippedBottom` | Boolean | Below and intersecting with the mask. |
 * | `isClippedLeft` | Boolean | On the left and intersecting with the mask. |
 * | `isClippedRight` | Boolean | On the right and intersecting with the mask. |
 * | `isClipped` | Boolean | Child intersects with the mask. |
 * | `isFullyVisible` | Boolean | Fully visible inside the mask. |
 * | `isPartiallyVisible` | Boolean | Alias for `isClipped`. |
 * | `isInvisible` | Boolean | Alias for `isOff`. |
 * | `isAsVisibleAsPossible` | Boolean | As visible as possible (child bigger than the mask). |
 * | `isNotAsVisibleAsPossible` | Boolean | Not as visible as possible (child bigger than the mask). |
 *
 * @category DOM
 * @param  {HTMLElement} domEl The child DOM Element.
 * @param  {HTMLElement} [maskEl = document.body] The mask DOM Element.
 * @return {Object}
 */
function clippingInfo(domEl, maskEl) {
	let domCoords = domEl.getBoundingClientRect();
	let maskCoords;

	if (maskEl) {
		maskCoords = maskEl.getBoundingClientRect();
	}
	else {
		maskCoords = {
			top: 0,
			bottom: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			left: 0,
			right: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
		};
	}

	let vertAxis = _getVerticalAxisInfo(domCoords, maskCoords),
		horzAxis = _getHorizontalAxisInfo(domCoords, maskCoords);

	let isOffTop = vertAxis.isOffBefore,
		isOffBottom = vertAxis.isOffAfter,
		isOffLeft = horzAxis.isOffBefore,
		isOffRight = horzAxis.isOffAfter,
		isOff = isOffTop || isOffBottom || isOffLeft || isOffRight,
		isClippedTop = !isOff && (vertAxis.isClippedBefore),
		isClippedBottom = !isOff && (vertAxis.isClippedAfter),
		isClippedLeft = !isOff && (horzAxis.isClippedBefore),
		isClippedRight = !isOff && (horzAxis.isClippedAfter),
		isClipped = isClippedTop || isClippedBottom || isClippedLeft || isClippedRight,
		isFullyVisible = vertAxis.isContained && horzAxis.isContained,
		isInvisible = isOff,
		isAsVisibleAsPossible = isFullyVisible || (vertAxis.isWrapper && horzAxis.isWrapper) || (vertAxis.isContained && horzAxis.isWrapper) || (vertAxis.isWrapper && horzAxis.isContained),
		isNotAsVisibleAsPossible = isInvisible || !isAsVisibleAsPossible,
		isPartiallyVisible = isClipped;

	return {
		isOffTop,
		isOffBottom,
		isOffLeft,
		isOffRight,
		isOff,
		isClippedTop,
		isClippedBottom,
		isClippedLeft,
		isClippedRight,
		isClipped,
		isFullyVisible,
		isPartiallyVisible,
		isInvisible,
		isAsVisibleAsPossible,
		isNotAsVisibleAsPossible
	};
}

export default clippingInfo;
