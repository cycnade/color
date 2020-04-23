function rgbToHex(red, green, blue) {
  return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}
var dev=document.querySelectorAll("#intensity")[1]
var jumbo=document.querySelector(".thehead")
var newgame=document.querySelector(".new")
var onclick=document.querySelector("p")
var r=document.querySelector(".r")
var g=document.querySelector(".g")
var b=document.querySelector(".b")
var dec=document.querySelector(".decide")
r.textContent=Math.floor(Math.random() * 257);
g.textContent=Math.floor(Math.random() * 257);
b.textContent=Math.floor(Math.random() * 257);
var options=document.querySelectorAll(".square")
r=parseInt(r.textContent)
g=parseInt(g.textContent)
b=parseInt(b.textContent)
correctans=rgbToHex(r,g,b)
var pos=Math.floor(Math.random() * 3)
	options[pos].style.background=rgbToHex(r,g,b)

for (i=0;i<options.length;i++){
	if (i!==pos){
		options[i].style.background=rgbToHex(Math.floor(Math.random() * 257),Math.floor(Math.random() * 257),Math.floor(Math.random() * 257))
	}
}
var click=0
options[pos].addEventListener("click",function(){
	alert("Correct")
	click=1
	dec.innerHTML="Correct"
	dec.classList.add("weight")
	for (i=0;i<options.length;i++){
		options[i].classList.remove("display")
	
}
	jumbo.style.background=rgbToHex(r,g,b)
	for (i=0;i<options.length;i++){
		options[i].style.background=rgbToHex(r,g,b)
	
}


})


for (var j = 0; j < options.length; j++) {
	


	options[j].addEventListener("click",function(){
		if (click==0){
		if (j!==pos){
			dec.innerHTML="Try again"
			this.classList.add("display")
		}}
	})
}
dev.addEventListener("click",function(){
	alert("This mode is in development.")
})
newgame.addEventListener("click",function(){
	location.reload()
})