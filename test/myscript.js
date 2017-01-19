var ok=initialise({
    start_x: 305,
    start_y: 265,
    radius: 250,
    nb_circles:2,
    circles:[{
            percentage: 0.65,
            way: 0, // left
            alpha: 0.6,
            color: 'lime',
            value: "75 MW",
        },
        {
            percentage: 0.3,
            way: 1, // right
            start: 1.7,
            end: 2.3,
            alpha: 0.6,
            color: 'cyan',
            value: "10 MVar"
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