function writeDice(n) {
  //var img = document.createElement("img"), img.src = 'dice' + n + 'png';

  document.getElementById("dice_container").appendChild(img);
}
  function getRandom(){
    var x = Math.floor(Math.random() * ((6-1)+1) + 1);
    var y = Math.floor(Math.random() * ((6-1)+1) + 1);

    var dicetotal = x + y;
    $('.dice1').attr('id', "dice" + x);
    $('.dice2').attr('id', "dice" + y);
}

function printNumber(number) {
  var placeholder =
document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = funtion() {
  var result = dice.roll();
    printNumber(result);
};
