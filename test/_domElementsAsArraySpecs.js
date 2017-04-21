import _domElementsAsArray from "../dist/internal/dom/_domElementsAsArray";

describe("_domElementsAsArray", function() {
	for (let i = 0; i < 5; i++) {
		let newEl = document.createElement("div");
		newEl.className = "domElementsAsArray domElementsAsArray-" + i;
		document.body.appendChild(newEl);
	}

	it("Should convert a NodeList with many elements to an Array.", function() {
		let elementsNodeList = document.querySelectorAll(".domElementsAsArray");
		let elementsArray = _domElementsAsArray(elementsNodeList);

		expect(Array.isArray(elementsNodeList)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(5);
	});

	it("Should convert a NodeList with one element to an Array.", function() {
		let elementsNodeList = document.querySelectorAll(".domElementsAsArray-1");
		let elementsArray = _domElementsAsArray(elementsNodeList);

		expect(Array.isArray(elementsNodeList)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should convert an HTMLCollection with many elements to an Array.", function() {
		let elementsHTMLCollection = document.getElementsByClassName("domElementsAsArray");
		let elementsArray = _domElementsAsArray(elementsHTMLCollection);

		expect(Array.isArray(elementsHTMLCollection)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(5);
	});

	it("Should convert an HTMLCollection with one element to an Array.", function() {
		let elementsHTMLCollection = document.getElementsByClassName("domElementsAsArray-1");
		let elementsArray = _domElementsAsArray(elementsHTMLCollection);

		expect(Array.isArray(elementsHTMLCollection)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should convert a single HTMLElement to an Array.", function() {
		let elementHTMLElement = document.querySelector(".domElementsAsArray-1");
		let elementsArray = _domElementsAsArray(elementHTMLElement);

		expect(Array.isArray(elementHTMLElement)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should allow an Array of HTMLElements as parameter.", function() {
		let elementsHTMLElementArray = [document.querySelector(".domElementsAsArray-1"), document.querySelector(".domElementsAsArray-2")];
		let elementsArray = _domElementsAsArray(elementsHTMLElementArray);

		expect(Array.isArray(elementsHTMLElementArray)).toBe(true);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(2);
	});

	it("Should allow a Set of HTMLElements as parameter.", function() {
		let elementsHTMLElementSet = new Set();
		elementsHTMLElementSet.add(document.querySelector(".domElementsAsArray-1"));
		elementsHTMLElementSet.add(document.querySelector(".domElementsAsArray-2"));
		let elementsArray = _domElementsAsArray(elementsHTMLElementSet);

		expect(Array.isArray(elementsHTMLElementSet)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(2);
	});
});
