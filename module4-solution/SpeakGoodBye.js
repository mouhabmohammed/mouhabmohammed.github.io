(function(window){
 
 var speakWord = "Good Bye";
 byeSpeaker= new Object;

  function speak(name) {
  console.log(speakWord + " " + name);
}


window.byeSpeaker= byeSpeaker;
byeSpeaker.speak=speak;

})(window);
//---------------------------------------------------------------------
