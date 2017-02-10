var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
var random = Math.random()
makeRect(0,0,200,200,"white",1)   
    makeRect(90,10,50,50,"chocolate",1)
makeRect(90,25,50,10,"gold",1)
makeText("FRAGILE", 94, 20, 10, "Open Sans","red", 1) 
makeImage("https://image.flaticon.com/icons/svg/26/26053.svg",110,27,10,10)
if(random < .5){
makeCircle(100,50,3,"black")
}else if(random>.5){
    makeCircle(120,50,3,"white")
} 
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,200,200,"white",1)
var random = Math.random()    
makeRect(90,15,50,50,"burlywood",1) 
makeRect(110,15,10,10,"lightgrey",1)
if(random <.5){
makeRect(75,65,80,1,"chocolate",1) 
makeCircle(76,68.5,3, "chocolate")
makeCircle(154,68.5,3, "chocolate")
}else{
    makeRect(75,65,80,1,"black",1) 
makeCircle(76,68.5,3, "black")
makeCircle(154,68.5,3, "black")
}makeImage("http://www.clker.com/cliparts/6/0/5/3/1241962351706252590algp66_Fragile_Sign.svg.hi.png",105,35,20,20)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
  var random = Math.random()
    makeRect(0,0,200,200,"white",1)
    makeRect(90,15,50,50,"burlywood",1) 
if(random < .5){
makeImage("http://vignette3.wikia.nocookie.net/dofus/images/7/75/Hilo_resistente.png/revision/latest?cb=20110325202150&path-prefix=es",110,35,20,20)
}else{
    makeImage("http://www.clipartkid.com/images/605/string-bow-png-whisk-in-stock-then-oil-LZb64K-clipart.png",110,35,20,20)
}
makePolyline("130,25 130,55 100,55 100,25", "black", 1, 1)
makeText("THE SECRET",95,35,7,"Barrio","red", 1)
makeText("BOX",110,45,7,"Barrio","red", 1)
makeLine(100, 25, 130, 25, "black", 1,1)
makeLine(90, 15, 100, 25, "black", 1,1)
makeLine(140, 15, 130, 25, "black", 1,1)
makeLine(130, 55, 140, 65, "black", 1,1)
makeLine(100, 55, 90, 65, "black", 1,1)   
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var random = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(random < .17){
        createFirstScene()
    }else if(random <.33){
    createFirstScene()
    }else if(random < .5){
        createSecondScene()
    }else if(random < .67){
    createSecondScene()
    }else if(random < .83){
        createThirdScene()
    }else{
        createThirdScene()
    }
        
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}