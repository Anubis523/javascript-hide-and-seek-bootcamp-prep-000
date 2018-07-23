function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  getFirstSelector("#nested .target")
}