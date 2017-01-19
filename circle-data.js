function toRadians (angle)
{
	return angle * (Math.PI / 180);
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var start_x=305;
var start_y=265;
var rayon=250;
var separator=Math.round(rayon/18.75);

// Green circle
var start_green=0.35;
var end_green=1.65;
context.beginPath();
context.fillStyle = 'lime';
context.globalAlpha=0.6;
context.arc(start_x,start_y,rayon,start_green*Math.PI,end_green*Math.PI);
context.fill();

var angle=(360*(end_green-start_green)/2)/2-90;
var y=Math.cos(toRadians(angle))*rayon;
var x=start_x+Math.sin(toRadians(angle))*rayon;
context.moveTo(x,start_y-y);
for(var i=0;i<2*y;i+=4)
{
	if(i%8==0)
	{
		context.lineTo(x-separator,start_y-y+i);
	}
	else
	{
		context.lineTo(x+separator,start_y-y+i);
	}
}
context.lineTo(x,start_y+y);
context.stroke();

// Blue circle
var start_blue=1.7;
var end_blue=2.3;
context.beginPath();
context.fillStyle = 'cyan';
context.globalAlpha=0.6;
context.arc(start_x,start_y,rayon,start_blue*Math.PI,end_blue*Math.PI);
context.fill();

angle=(360*(end_blue-start_blue)/2)/2;
x=start_x+Math.cos(toRadians(angle))*rayon;
y=Math.sin(toRadians(angle))*rayon;
context.moveTo(x,start_y-y);
for(var i=0;i<2*y;i+=4)
{
	if(i%8==0)
	{
		context.lineTo(x-separator,start_y-y+i);
		//context.fill();
	}
	else
	{
		context.lineTo(x+separator,start_y-y+i);
	}
}
context.lineTo(x,start_y+y);
context.stroke();

// Big Circle
context.beginPath();
context.lineWidth=2;
context.arc(start_x,start_y,rayon,0,Math.PI*2);
context.stroke();
