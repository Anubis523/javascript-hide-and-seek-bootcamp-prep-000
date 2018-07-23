function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll("ul.ranked-list li")
  console.log (ranks)
  for (let i = 0; i < ranks.length; i++) {
    let num = parseInt(ranks[i].innerHTML)
    num += n
    ranks[i].innerHTML = num
  }
}

function deepestChild() {
  return querySelector("div#grand-node ")
}

function hasChildren (element) {
  return 
}