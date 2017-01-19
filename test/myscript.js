var ok=initialise({
    start_x: 305,
    start_y: 265,
    radius: 250,
    nb_circles:2,
    circles:[{
            start: 0.35,
            end: 1.65,
            alpha: 0.6,
            color: 'lime',
        },
        {
            start: 1.7,
            end: 2.3,
            alpha: 0.6,
            color: 'cyan',
        }]
});

if(ok)
{
    draw();
}
else
{
    alert("An error happened !");
}