// get all dom here 
const timesElement = document.getElementById("timesElement")
const secondsElement = document.getElementById("secondsElement")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")


// global variable 
let countdown;
let timeLeft = 0;



// global function 
function displayTime(time){
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    timesElement.innerText = minutes < 10 ? `0${minutes}`: minutes
    secondsElement.innerText = seconds < 10 ? `0${seconds}`: seconds
}


function startTimer(){
    clearInterval(countdown)
    const minutes = parseInt(prompt('Enter your minutes'))
    if(isNaN(minutes)){
        return alert("Enter a valid number")
        
    }
    timeLeft = minutes * 60;
    displayTime(timeLeft)
    countdown =  setInterval(() => {
        if(timeLeft > 0){
            timeLeft--
            displayTime(timeLeft)
        }
        else{
            clearInterval(countdown)
        }
    }, 1000)

}


function pasueTimer(){
    clearInterval(countdown)
}

function resetTimer(){
    clearInterval(countdown)
    timeLeft = 0
    displayTime(timeLeft)
}



startBtn.addEventListener('click', startTimer)

pauseBtn.addEventListener('click', pasueTimer)

resetBtn.addEventListener('click', resetTimer)