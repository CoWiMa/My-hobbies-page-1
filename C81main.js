canvas = document.getElementById("kungulanvus");
ctx = canvas.getContext("2d");
var mE = "mt";
var lpox = 0;
var lpoy = 0;
canvas.addEventListener("mousedown", mousedown);
function mousedown()
{
    mE = "mousedown";
    //document.getElementById("kungulanvus").style.background = "white";
}
canvas.addEventListener("mouseup", mouseup);
function mouseup()
{
    mE = "mouseup";
    //document.getElementById("kungulanvus").style.background = "red";
}
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave()
{
    mE = "mouseleave";
    //document.getElementById("kungulanvus").style.background = "black";
}   
canvas.addEventListener("mousemove", mousemove);
function mousemove()
{
   cpox = e.clientX - canvas.offsetLeft;
   cpoy = e.clientY - canvas.offsetTop;
   if (mE == "mousedown")
   {
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 1;
    ctx.moveTo(lpox, lpoy);
    ctx.lineTo(cpox, cpoy);
    ctx.stroke();
   }
   lpox = cpox;
   lpoy = cpoy;
}   
