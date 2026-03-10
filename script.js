function summarize(){

document.getElementById("verification").style.display="block"

setTimeout(function(){

document.getElementById("summary").style.display="block"

},4000)

}

function copyCommand(){

var cmd=document.getElementById("cmd").innerText

navigator.clipboard.writeText(cmd)

alert("Command copied to clipboard")

}
