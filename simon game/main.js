let colors = ["green", "red", "yellow", "blue"];

let start = false;

let level = 0;

let gameSequence = [];

let userSequence = [];

// handling the key press
$("body").keypress(function() {
  start = true;
  if(start) {
    start = false;
    nextSequence();
  }
})

// To generate the sequence - the next button to animate
function nextSequence() {
  level += 1;
  let randomNumber = Math.floor(Math.random() * 4);
  userSequence = [];
  $("#heading").text("Current Level  " + level);
  let randomColor = colors[randomNumber];
  gameSequence.push(randomColor);
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// handling the button click
$(".btn").click(function() {
  let btnClicked = $(this);
  userSequence.push(btnClicked.attr('id'));
  btnClicked.addClass("pressed");
  setTimeout(function() {
    btnClicked.removeClass("pressed")
  }, 100);
  // after clicking the button - checking the sequence
  checkSequence(userSequence.length-1);
})

// sequence checking
function checkSequence(currentLevel)
{
  if(userSequence[currentLevel] == gameSequence[currentLevel])
  {
    if(userSequence.length == gameSequence.length)
    {
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  } else {
    level = 0;
    start = true;
    $("#heading").text("Game Over, Press any Key to Restart");
    gameSequence = [];
  }
}
