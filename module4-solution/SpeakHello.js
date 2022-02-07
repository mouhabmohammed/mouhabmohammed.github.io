(function(window){


var speakWord = "Hello";
helloSpeaker=new Object;

function speak(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker=helloSpeaker;
helloSpeaker.speak=speak;

})(window);