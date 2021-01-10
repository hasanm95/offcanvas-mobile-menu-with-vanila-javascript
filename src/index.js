import { getSiblings, getClosest, slideUp, slideToggle } from "./methods";

var expandBtns = document.querySelectorAll(".expand-btn");

function clickHandler(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const parentEl = target.parentElement;
  if (
    parentEl?.classList.contains("expand-btn") ||
    target.classList.contains("expand-btn")
  ) {
    const element = target.classList.contains("icon") ? parentEl : target;
    const parent = getClosest(element, "LI");
    const childNodes = parent.childNodes;
    const parentSiblings = getSiblings(parent);
    parentSiblings.forEach((sibling) => {
      const sibChildNodes = sibling.childNodes;
      sibChildNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideUp(child, 1000);
        }
      });
    });
    childNodes.forEach((child) => {
      if (child.nodeName === "UL") {
        slideToggle(child, 1000);
      }
    });
  }
}

expandBtns.forEach((expandBtn) => {
  expandBtn.addEventListener("click", clickHandler);
});
