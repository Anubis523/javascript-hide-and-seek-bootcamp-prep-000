function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function increaseRankBy(n) {
  const ranks = document.querySelectAll("ul.rankedlist li")
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHtml ++;
  }
}

function deepestChild() {
  return querySelector("div#grand-node ")
}