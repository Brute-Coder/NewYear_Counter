const newYears = "1 jan 2025";

const daysel= document.getElementById("days");
const hourel =document.getElementById("hours");
const secondel=document.getElementById("seconds");
const minuteel=document.getElementById("minutes");

function countdown(){
    const newYearsDate = new Date(newYears);
    
    const currentDate = new Date();
    
    const totalSecond = (newYearsDate - currentDate) /1000;
    
    const days = Math.floor(totalSecond/3600/24);

    const hours = Math.floor(totalSecond/3600)%24;

    const minutes = Math.floor(totalSecond/60) %60;

    const seconds =Math.floor(totalSecond % 60) ;

    daysel.innerHTML=days;
    hourel.innerHTML=formatTime(hours);
    minuteel.innerHTML=formatTime(minutes);
    secondel.innerHTML=formatTime(seconds);
}

function formatTime(time)
{
    return time <10 ?`0${time}`:time;
}


//initial call
countdown();

setInterval(countdown,1000);
