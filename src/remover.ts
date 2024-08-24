const fix = (text: string | null | undefined): string => {
  if (!text) return "";
  // TODO: FIX TEXT HERE BEFORE OUTPUTTING AGAIN

  return "A";
};

const fixAll = () => {
  document.querySelectorAll("*").forEach((element) => {
  
    // console.log(element);
    
    // let childrenElements: Element[] = [];
    // for (let i=0;i<element.children.length;i++) {
    //   childrenElements.push(element.children[i]);
    // }
  
    const skippedTags = new Set(["style", "script", "svg"]);
    if (skippedTags.has(element.tagName.toLowerCase())) return;

    element.childNodes.forEach((childNode) => {
      if (childNode.nodeType !== Node.TEXT_NODE) return;
      childNode.textContent = fix(childNode.textContent);
    });
  
    // element.innerHTML = `${fix(element.childNodes[0]?.nodeValue)} ${childrenElements.map((child) => { return child.outerHTML; })}`;
  
  });
};

// run fixes again after every change
const onInnerHTMLChange = new MutationObserver(fixAll);
const root = document.querySelector("html");
if (root) onInnerHTMLChange.observe(root, {characterData: false, childList: true, attributes: false});

// initial fixes
fixAll();
