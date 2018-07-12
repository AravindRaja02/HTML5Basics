var myCanvas= document.getElementById("artboard")

 var canvas= myCanvas.getContext("2d")
 

 canvas.moveTo(0,0)
 
 /*canvas.lineTo(400,400)
 canvas.stroke()
 canvas.strokeText("hello canvas",0,0)
 canvas.strokeText("hello canvas",100,100)
 canvas.beginpath()
 canvas.arc(100,100,50,0,360,false)
 canvas.stroke()*/

 canvas.beginPath()
canvas.arc(200,200,100,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(155,175,15,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(245,175,15,0,360,false)
canvas.stroke()


canvas.moveTo(200,200)
canvas.lineTo(200,230)
canvas.stroke()

canvas.beginPath()
canvas.arc(200,255,10,0,Math.PI,false)
canvas.stroke()


