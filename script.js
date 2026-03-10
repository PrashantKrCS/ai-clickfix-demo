let generatedSummary=[]

function summarizeText(text){

let sentences=text.split(/[.!?]/)

sentences=sentences.filter(s=>s.trim().length>20)

return sentences.slice(0,3)

}

function startAI(){

let text=document.getElementById("article").value

if(text.length<30){

alert("Please paste article content")
return

}

generatedSummary=summarizeText(text)

document.getElementById("aiBox").style.display="block"

let message="Analyzing article...\nExtracting key insights...\nGenerating summary..."

let i=0

function type(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i)

i++

setTimeout(type,40)

}else{

setTimeout(()=>{

document.getElementById("captchaBox").style.display="block"

},1000)

}

}

type()

}

document.addEventListener("change",function(e){

if(e.target.id==="verify"){

setTimeout(()=>{

document.getElementById("captchaBox").style.display="none"

showSummary()

},1200)

}

})

function showSummary(){

document.getElementById("summaryBox").style.display="block"

let ul=document.getElementById("summary")

ul.innerHTML=""

generatedSummary.forEach(s=>{

let li=document.createElement("li")

li.textContent=s.trim()

ul.appendChild(li)

})

}
