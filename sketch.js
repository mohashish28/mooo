let cir =[]
let vehs = []
let cols =50
let img
let c
let pg
function preload(){
img = loadImage('1.png')

}

function setup() {
  createCanvas(400, 400);
pg = createGraphics(400,400)
img.resize(400,400)
//image (img,0,0)

//pg.image(img,0,0)



img.loadPixels();



  for (var i=cols-1;  i>=0; i--){
    cir[i] =[]
     vehs [i]= []
   
    for (var j=cols-1;  j>=0; j--){

    w = width/cols
x= i*w+w/2
y = j*w+w/2 
 c = img.get(x,y)
 c2 = brightness(c)
img.get(x,y)

w2 = width/cols
x2= i*w
y2= j*w

//c3 = copy (img,x2,y2,w2,w2,x2,y2,w2,w2)



let index = (x+y*width)*4
let r = img.pixels[index+0]
let g = img.pixels[index+1]
let b = img.pixels[index+2]
let avg = (r+g+b)/3
c3 = brightness(avg)
 w2 = floor(map (avg ,255,0,0,w))
 fill(c3)
 cir[i][j] = new vehicle(x,y,w2,c3)
 vehs[i][j]=cir[i][j]
//circle(x,y,w2)

//vehs.push(cir)
let m = floor(w2)

}
  }








}

function draw() {
background(220);


for (var i=cols-1;  i>=0; i--){
  for (var j=cols-1;  j>=0; j--){
///fill (c)
vehs[i][j].show()
vehs[i][j].update()
vehs[i][j].behaviour()

}
}}