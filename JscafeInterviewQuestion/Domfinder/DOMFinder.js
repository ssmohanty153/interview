const getPathFromChildToParents = (parent, child) => {
  let currentNode = child;
  const pathArray = [];
  while (currentNode !== parent) {
    //to get parent element of children
    const parentElement = currentNode.parentElement;
    // console.log(parentElement, currentNode, "parentElement");
    //to get the parent element
    //to get  parentElement children
    const childrenArray = Array.from(parentElement.children);
    // console.log(childrenArray, "childrenArray");
    // console.log(parentElement.children, "parentElement.children");
    pathArray.push(childrenArray.indexOf(currentNode));
    currentNode = parentElement;
  }
  return pathArray;
};

const getValueFromPath = (parent, path) => {
  let currentNode = parent;
  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }
  return currentNode.innerText;
};

const findNodeValue = () => {
  const rootA = document.getElementById("rootA");

  const nodeA = document.getElementById("nodeA");

  const rootB = document.getElementById("rootB");

  const path = getPathFromChildToParents(rootA, nodeA);
  console.log(path);

  console.log(getValueFromPath(rootB, path));
};

findNodeValue();
