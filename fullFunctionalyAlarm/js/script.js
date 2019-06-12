'use strict';
window.onload=function(){//rotating clock onload of window
document.getElementById("place").classList.add('rotate');
};
let hourHand = document.getElementById('hourHand'), minuteHand = document.getElementById('minuteHand'),
    secondHand = document.getElementById('secondHand');//getting clock hands
let orientation = true;//defined boolean to orientate on alarm music playing,for one time music play
let halfPast = document.getElementById('myAudio');
let globalSecond = 0;//defined to revalue the orientation variable again

let playPromise; //to cache audio chrome browser error



(function clock() {//self called function for clock working also alarm checking
    let date = new Date();//date
    let hour = date.getHours() % 12;//to get hour at 0-12 format
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if(hour ===parseInt(localStorage.getItem('hour')) && minute === parseInt(localStorage.getItem('minute')) && orientation){//check to turn on alarm music
        playPromise= halfPast.play();
        globalSecond = second;
        if (playPromise !== undefined) {//caching chrome browser error
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }
        orientation = false;
        document.getElementById('time').style.display= 'none';//hide time input
        document.getElementById('but').style.display= 'none';//hide time save button
        return false;
    }
    let hourDeg = (hour * 30) + (0.5 * minute);//to get hours tangle
    let minuteDeg = (minute * 6) + (0.1 * second);//to get minute tangle
    let secondDeg = second * 6;//to get second tangle

    hourHand.style.transform = 'rotate(' + Math.round(hourDeg) + 'deg)';
    minuteHand.style.transform = 'rotate(' + Math.round(minuteDeg) + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';



    if(globalSecond > second){//redefining orientation variable for reuse
        if(!orientation){
            orientation= true;
            document.getElementById('time').value = null;
            document.getElementById('time').style.display= 'block';
            document.getElementById('but').style.display= 'block';

        }
    }

    setInterval(clock, 1000);//self calling
})();

document.getElementById('but').onclick = function () {//to set alarm
    let time = document.getElementById('time');
  if(time.value){
      localStorage.removeItem('hour');
      localStorage.removeItem('minute');
      localStorage.setItem('hour',time.value.slice(0,2));//save alarm hour in browser local storage
     localStorage.setItem('minute',time.value.slice(3,5));//save alarm minute in browser local storage
  }
};

document.getElementById('background').onclick=function () {//changing user background color with storing itself ob browser local storage
    var color = document.getElementById('color').value;
    localStorage.removeItem('color');
    localStorage.setItem('color',color);
  document.body.style.backgroundColor=localStorage.getItem('color');
    console.log(document.getElementById('color').value);

};
if (localStorage.getItem('color')!==null){// if it  was set background color than rebuild
    document.body.style.backgroundColor=localStorage.getItem('color');
}
