var drums = document.querySelectorAll(".drum");
var i = 0;
do {
  drums[i].addEventListener("click", function () {
    var courentObject = this.innerHTML;
    switch (courentObject) {
      case "w":
        let audioW = new Audio("assets/sounds/tom-1.mp3");
        audioW.play();
        break;
      case "a":
        let audioA = new Audio("assets/sounds/tom-2.mp3");
        audioA.play();
        break;
      case "s":
          let audioS = new Audio("assets/sounds/tom-3.mp3");
          audioS.play();
        break;
        case "d":
          let audioD = new Audio("assets/sounds/tom-4.mp3");
          audioD.play();
        break;
        case "j":
          let audioJ = new Audio("assets/sounds/snare.mp3");
          audioJ.play();
        break;
        case "k":
          let audioK = new Audio("assets/sounds/crash.mp3");
          audioK.play();
        break;
        case "l":
          let audioL = new Audio("assets/sounds/kick-bass.mp3");
          audioL.play();
          break;
      default:
        aler("You must click on a letter!");
        break;
    }
  })
  i++;
}while(i<drums.length)