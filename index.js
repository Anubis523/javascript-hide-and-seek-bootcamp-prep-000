function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function increaseRankBy(n) {
  const lists = document.querySelectAll("ul.rankedlist")
  let ranks = []
  
  for (let i = 0; i < ranks.length; i++) {
    let num = parseInt(ranks[i].innerHtml)
    num += n
    ranks[i].innerHtml = num
  }
}

function deepestChild() {
  return querySelector("div#grand-node ")
}