window.onload = function() {

var intervalId;
var breakIntervalId;

function breakCountdown(p, count, button) {
  breakIntervalId = setInterval(function() {

 	document.getElementById(p).style.padding = "100px 0 0 0";
    document.getElementById("breset").disabled = false;
    document.getElementById("bpause").disabled = false;
    document.getElementById("bstop").disabled = false;
    count--;
    remaining = count;
    document.getElementById("right").style.opacity = 1;
    document.getElementById("bpause").addEventListener("click", function (){
    clearInterval(breakIntervalId);
    document.getElementById("bpause").disabled = true;
    document.getElementById("bstart").disabled = false;
    document.getElementById("bstart").addEventListener("click", function () {
    document.getElementById("bpause").disabled = false;
    
    clearInterval(breakIntervalId);
    breakCountdown("pause", remaining, "bstart");
    });
  });
    var minutes = Math.floor(count / 60);
    var seconds = Math.floor(count % 60);
    
    if (minutes < 10 && seconds < 10) {
  document.getElementById(p).innerHTML = "0" + minutes.toString() + ": " + "0" + seconds.toString();
  }
  
  else if (minutes < 10) {
  document.getElementById(p).innerHTML = "0" + minutes.toString() + ": " + seconds.toString();
  }
  
  else if (seconds < 10) {
  	document.getElementById(p).innerHTML = minutes.toString() + ": " + "0" + seconds.toString();
  }
  
  else {
  document.getElementById(p).innerHTML =  minutes.toString() + ": " + seconds.toString();
  }

    if (count === 0) {
      clearInterval(breakIntervalId);
      document.getElementById(p).style.padding = "50px 0 0 0";
      document.getElementById(p).innerHTML = "Break's Over, Click Start Timer to Continue";
      document.getElementById(button).disabled = false;
      count = 300;
    }
  }, 1000);
}

function timerCountdown(p, count, button) {
  intervalId = setInterval(function() {
  document.getElementById("bstart").disabled = true;
    document.getElementById("breset").disabled = true;
    document.getElementById("bpause").disabled = true;
    document.getElementById("bstop").disabled = true;
  
  count--;
  remaining = count;
  document.getElementById("tpause").addEventListener("click", function (){
    clearInterval(intervalId);
    document.getElementById("tpause").disabled = true;
    document.getElementById("tstart").disabled = false;
    document.getElementById("tstart").addEventListener("click", function () {
    document.getElementById("tpause").disabled = false;
    
    clearInterval(intervalId);
    timerCountdown("tclock", remaining, "tstart");
    });
  })

  var minutes = Math.floor(count / 60);
  var seconds = Math.floor(count % 60);
  
  if (minutes < 10 && seconds < 10) {
  document.getElementById(p).innerHTML = "0" + minutes.toString() + ": " + "0" + seconds.toString();
  }
  
  else if (minutes < 10) {
  document.getElementById(p).innerHTML = "0" + minutes.toString() + ": " + seconds.toString();
  }
  
  else if (seconds < 10) {
  	document.getElementById(p).innerHTML = minutes.toString() + ": " + "0" + seconds.toString();
  }
  
  else {
  document.getElementById(p).innerHTML =  minutes.toString() + ": " + seconds.toString();
  }

  if (count === 0) {
    clearInterval(intervalId);
    document.getElementById(p).innerHTML = "Take a break!";
    document.getElementById(button).disabled = false;
    count = 1500;
    breakCountdown("pause", 300, "bstart");
  }
}, 1000);
};

document.getElementById("tstart").addEventListener("click", function () { 

document.getElementById("tstart").disabled = true;

document.getElementById("right").addEventListener("hover", function () {
  this.style.opacity = 1;
})

  timerCountdown("tclock", 1500, "tstart");

});

document.getElementById("treset").addEventListener("click", function () {
document.getElementById("tstart").disabled = true;
document.getElementById("tpause").disabled = false;
  clearInterval(intervalId);
  counter = 1500;
  timerCountdown("tclock", 1500, "tstart");
});

document.getElementById("breset").addEventListener("click", function () {
document.getElementById("bstart").disabled = true;
document.getElementById("bpause").disabled = false;
  clearInterval(breakIntervalId);
  counter = 300;
  breakCountdown("pause", 300, "bstart");
});

document.getElementById("tstop").addEventListener("click", function (){
  clearInterval(intervalId);
  document.getElementById("tclock").innerHTML = "25: 00";
  document.getElementById("tstart").disabled = false;
})

document.getElementById("bstop").addEventListener("click", function (){
  clearInterval(breakIntervalId);
  clearInterval(intervalId);
  document.getElementById("pause").innerHTML = "00: 00";
  document.getElementById("pause").disabled = false;
  document.getElementById("bstart").disabled = false;
})
};