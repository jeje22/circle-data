// Version 0.1-dev

var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');

var start_x;
var start_y;
var radius;
var nb_circles;
var start_circles=[];
var end_circles=[];
var alphas=[];
var colors=[];

function initialise(data)
{
	var res=true;
	start_x=data.start_x;
	start_y=data.start_y;
	radius=data.radius;

	if(data.nb_circles>2) // not yet supported
	{
		res=false;
	}
	else
	{
		nb_circles=data.nb_circles;
		circles=data.circles;
		for(circle of circles)
		{
			start_circles.push(circle.start);
			end_circles.push(circle.end);
			alphas.push(circle.alpha);
			colors.push(circle.color);
		}
	}
	return res;
	
}

function toRadians (angle)
{
	return angle * (Math.PI / 180);
}


function draw()
{
	var separator=Math.round(radius/18.75);

	// 1st circle
	context.beginPath();
	context.fillStyle = colors[0];
	context.globalAlpha=alphas[0];
	context.arc(start_x,start_y,radius,start_circles[0]*Math.PI,end_circles[0]*Math.PI);
	context.fill();

	var angle=(360*(end_circles[0]-start_circles[0])/2)/2-90;
	var y=Math.cos(toRadians(angle))*radius;
	var x=start_x+Math.sin(toRadians(angle))*radius;
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

	if(nb_circles>1)
	{
		// 2nd circle
		context.beginPath();
		context.fillStyle = 'cyan';
		context.globalAlpha=0.6;
		context.arc(start_x,start_y,radius,start_circles[1]*Math.PI,end_circles[1]*Math.PI);
		context.fill();

		angle=(360*(end_circles[1]-start_circles[1])/2)/2;
		x=start_x+Math.cos(toRadians(angle))*radius;
		y=Math.sin(toRadians(angle))*radius;
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
	}

	// Big Circle
	context.beginPath();
	context.lineWidth=2;
	context.arc(start_x,start_y,radius,0,Math.PI*2);
	context.stroke();
}