// init allthemarquee
allthemarquee.init(function(){
  document.getElementById('marquee-counter').innerHTML = this.count;
});

// add the starter marquee
allthemarquee.lvlup();

function keypresstamere(e){
  if(e.keyCode==13){
    document.getElementById('starter').classList.toggle('hidden');
    start();
    window.removeEventListener("keypress", keypresstamere);
  }
}

window.addEventListener("keypress", keypresstamere);

function start(){
  //disclaimer(function(){
    //title(1000,function(){
      //bottomScroller(function(){});
      //rotating(1000,function(){
        //snake(1000,function(){
          //check(1000,function(){
            moire(1000,function(){
              greets(function(){
                starfield(function(){console.log('END');});
              });
            });
          //});
        //});
      //});
    //});
  //});
}