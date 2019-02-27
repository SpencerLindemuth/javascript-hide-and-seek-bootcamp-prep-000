function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.querySelector('#nested div.target')
  return element
}

function increaseRankBy(n){
  var num = parseInt(n, 10)
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rank.length; i++) {
    var first = parseInt(rank[i].innerHTML, 10)
    rank[i].innerHTML = (first + num).toString();
  }
}

function deepestChild(){
  var div = document.querySelectorAll(`#grand-node div`);
  return div[div.length-1];

}
