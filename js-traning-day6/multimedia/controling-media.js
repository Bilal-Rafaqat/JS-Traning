function play() {
   let video = document.getElementById('video1');
   if(video.paused){
       video.play();
   }else{
       video.pause();
   }
 }
 function stop() {
    let video = document.getElementById('video1');
   video.pause();
   
 }
 function rewind() {
    let video = document.getElementById('video1');
    video.currentTime -= 1;
 }