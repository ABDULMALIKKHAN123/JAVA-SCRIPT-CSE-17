const scanBtn = document.getElementById("scanBtn");
const wifiList = document.getElementById("wifiList");
const passwordBox = document.getElementById("passwordBox");
const wifiName = document.getElementById("wifiName");
const connectBtn = document.getElementById("connectBtn");
const statusText = document.getElementById("status");

const networks = [
"Malik_Hotspot",
"Home_WiFi",
"Office_Network",
"Android_AP",
"JioFiber"
];

scanBtn.onclick = () => {

wifiList.innerHTML = "";
statusText.innerHTML = "";
passwordBox.classList.add("hidden");

networks.forEach(net=>{

let li=document.createElement("li");

let signal=Math.floor(Math.random()*5)+1;

li.innerHTML=`📶 ${net} (${signal}/5 Signal)`;

li.onclick=()=>{

passwordBox.classList.remove("hidden");
wifiName.innerHTML="Connect to: "+net;

};

wifiList.appendChild(li);

});

};

connectBtn.onclick=()=>{

let pass=document.getElementById("password").value;

if(pass.length<4){

alert("Password too short!");

return;

}

statusText.innerHTML="✅ Connected Successfully (Demo)";

passwordBox.classList.add("hidden");

};