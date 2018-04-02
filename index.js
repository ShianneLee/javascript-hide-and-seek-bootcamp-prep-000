function getFirstSelector(selector){
  return document.querySelector(selector);

}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rank = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
    //var num = rank[i].innerHTML;
    rank[i].innerHTML = (rank[i].innerHTML + n).parseInt;
  }
}
