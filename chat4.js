$(document).ready(function(){
  $("#text").keyup(function(event) {
    if(event.which === 13) {
      var input = $(this).val();
      var today = new Date();
      // var time = today.getHours() + ':' + today.getMinutes();
      var time = today.toLocaleTimeString().replace(/:\d+ /, ' ');
      $("#chatlogs").append("<p class='typed'><span class='typed-styler'>" + input + time + "</span></p>");
      $(this).val("");
      var lastUserText = document.getElementsByClassName('typed');
      var lastText = lastUserText[lastUserText.length - 1];
      lastText.scrollIntoView();

      randomSpit(spitList);
    }
  })
});

var spitList =
['Weather is great', 'No digas eso','Stock is down today','Great','Did you eat?','How\'s life?',
  'Eres loco','Soy el camino, la verdad, y la vida','That is weird','Life is tough','Don\'t say nonsense',
'Why do you say that?', 'I used to have a dream', 'Esto es pesadilla', 'Quieres morir?'
];

function randomSpit(spitList) {
  setTimeout(() => {
    var len = spitList.length;
    var spit = spitList[Math.floor(Math.random()*(len))]; //to come: need to receive settimeout.
    $("#chatlogs").append("<p class='random'><span class='spit-styler'>" + spit + "</span></p>");
    var spitLine = document.getElementsByClassName('random');
    var lastSpit = spitLine[spitLine.length -1];
    lastSpit.scrollIntoView();
  }, 500)

}
