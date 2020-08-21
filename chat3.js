$(document).ready(function(){
  $("#text").keyup(function(event) {
    if(event.which === 13) {
      var input = $(this).val();
      var today = new Date();
      var time = today.getHours() + ':' + today.getMinutes();
      $("#chatlogs").append("<p class='typed'><span class='typed-styler'>" + input + time + "</span></p>");
      $(this).val("");
      $(this).setTimeout(randomSpit(spitList), 1000);
    }
  })
});
//Jay - Want to go over with Codeworks the following:
//Why keypress doesn't work?
//Why doesn't setTimeout work?(randomSpeech fires with no interval)
//Why val() doesn't work but append() does?
var spitList =
  ['Weather is great','Stock is down today','Great','Did you eat?','How\'s life?',
  'Oh deer','What\'s up?','That is weird','Life is tough','Don\'t say nonsense',
'Why do you say that?'
];

function randomSpit(spitList) {
  var len = spitList.length;
  var spit = spitList[Math.floor(Math.random()*(len))]; //to come: need to receive settimeout.
  $("#chatlogs").append("<p class='random'><span class='spit-styler'>" + spit + "</span></p>");
  var spitLine = document.getElementsByClassName('random');
  var lastSpit = spitLine[spitLine.length -1];
  lastSpit.scrollIntoView();
}
