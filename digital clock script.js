function showTime(){
    let date = new Date();
    let h = String(date.getHours()).padStart(2,'0');
    let m = String(date.getMinutes()).padStart(2,'0');
    let s = String(date.setSeconds()).padStart(2,'0');
    document.getElementById("time").innerHTML ='${h}:${m}:${s}';
}
setInterval(showTime,1000);
showTime();