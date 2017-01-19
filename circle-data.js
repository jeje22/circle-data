// Version 0.1-dev

var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');

var start_x;
var start_y;
var radius;
var nb_circles;
var percentages=[];
var ways=[];
var start_circles=[];
var end_circles=[];
var alphas=[];
var colors=[];
var values=[];

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
			percentages.push(circle.percentage);
			ways.push(circle.way);
			if(circle.way==0)
			{
				start_circles.push(1-circle.percentage);
				end_circles.push(1+circle.percentage);
			}
			else if(circle.way==1)
			{
				start_circles.push(2-circle.percentage);
				end_circles.push(2+circle.percentage);
			}
			else
			{
				res=false;
				break;
			}
			alphas.push(circle.alpha);
			colors.push(circle.color);
			values.push(circle.value);
		}
	}
	return res;
	
}

function toRadians (angle)
{
	return angle * (Math.PI / 180);
}

function legend()
{
	context.beginPath();
	context.strokeStyle = 'green';
	context.moveTo(start_x-radius+percentages[0]*radius,start_y-radius+percentages[0]*1.7*radius);
	context.lineTo(start_x+1.5*radius, start_y-radius+percentages[0]*1.7*radius);
	context.fillStyle = "green";
	context.lineWidth=radius/75;
	context.font = radius/4+"px Arial";
	context.fillText(values[0],start_x+1.5*radius+10,start_y-radius+percentages[0]*1.7*radius);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'blue';
	context.moveTo(start_x+radius-percentages[1]*radius,start_y+radius-percentages[1]*1.7*radius);
	context.lineTo(start_x+1.5*radius, start_y+radius-percentages[1]*1.7*radius);
	context.fillStyle = "blue";
	context.font = radius/4+"px Arial";
	context.fillText(values[1],start_x+1.5*radius+10, start_y+radius-percentages[1]*1.7*radius);
	context.stroke();
}


function draw()
{
	var separator=Math.round(radius/50);

	// 1st circle
	context.beginPath();
	context.fillStyle = colors[0];
	context.globalAlpha=alphas[0];
	context.arc(start_x,start_y,radius,(start_circles[0])*Math.PI,(end_circles[0])*Math.PI);
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

	context.beginPath();
	context.moveTo(x,start_y-y);
	for(var i=0;i<2*y;i+=4)
	{
		if(i%8==0)
		{
			context.lineTo(x-separator,start_y-y+i);
			context.fill();
			context.beginPath();
		}
		else
		{
			context.lineTo(x+separator,start_y-y+i);
		}
	}
	

	if(nb_circles>1)
	{
		// 2nd circle
		context.beginPath();
		context.fillStyle = colors[1];
		context.globalAlpha=alphas[1];
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
			}
			else
			{
				context.lineTo(x+separator,start_y-y+i);
			}
		}
		context.lineTo(x,start_y+y);
		context.stroke();
	}

	legend();

	// The actual Circle
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth=2;
	context.arc(start_x,start_y,radius,0,Math.PI*2);
	context.stroke();
}