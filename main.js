var canvas = document.getElementById("screen")
var ctx = canvas.getContext("2d")


import { DrawUtils } from "./drawUtils.js"

window.addEventListener("gamepadconnected", function() {
    console.log("Gamepad Connected");
  })
  window.addEventListener("gamepaddisconnected", function() {
      console.log("Gamepad Disconnected");
    })
var draw = new DrawUtils()

function tick(){
    draw.resizeCanvasForWindowSize(canvas, ctx)
    ctx.rect(0,0,10000,10000)
    ctx.fillStyle="rgb(167,199,216)"
    ctx.fill()
    var x = 2514/2
    var y = 1377/2
    var r = 70
    var rChange=7
    var dist=150
    var activeRSub = 20
    let gamepad = [];
    if (navigator.getGamepads) gamepad = navigator.getGamepads();
    else if (navigator.webkitGetGamepads) gamepads = navigator.webkitGetGamepads();
    if(gamepad[0]!=null){
        var xSet=Math.abs(gamepad[0].axes[0])+Math.abs(gamepad[0].axes[1])>=.1 ? gamepad[0].axes[0]*dist+x :0+x
        var ySet=Math.abs(gamepad[0].axes[0])+Math.abs(gamepad[0].axes[1])>=.1 ? gamepad[0].axes[1]*dist+y :0+y
        draw.Circle(xSet,ySet,r+rChange-activeRSub,"#33363f")
        draw.Circle(xSet,ySet,r-activeRSub,"#afafbf")


        var xSet=Math.abs(gamepad[0].axes[2])+Math.abs(gamepad[0].axes[3])>=.1 ? gamepad[0].axes[2]*dist+x :0+x
        var ySet=Math.abs(gamepad[0].axes[2])+Math.abs(gamepad[0].axes[3])>=.1 ? gamepad[0].axes[3]*dist+y :0+y
        draw.Circle(xSet,ySet,r+rChange-activeRSub,"#33363f")
        draw.Circle(xSet,ySet,r-activeRSub,"#bfafaf")
    
    }
    draw.Circle(x,y,r+rChange,"#33363f")
    draw.Circle(x,y,r,"#afbfaf")

    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)