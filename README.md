# circle-data v0.1-dev
Javascript code that lets you have 2 datas shown in one circle

# How to use
1) initialize(data)
with data:
- start_x: *double*,
- start_y: *double*,
- radius: *double*,
- nb_circles: *int* **must be <=2**,
- circles: *array of objects* **must contain same number of objects as nb_circles**
    - start: *double* **must be <2rd**,
    - end: *double* **must be <2rd**,
    - alpha:*double* **must be >=0 && <=1**,
    - color: *string* **color name, rgb or hex**

`return false` if an error occured

then

2) draw()