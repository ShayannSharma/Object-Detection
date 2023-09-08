function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects..."
}
img =""
status = ""
function modelLoaded(){
    console.log("Model Loaded!")
    status = true
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results){
if (error) {
    console.log(error)
}
console.log(results)
objects = results
}
objects = []
function preload(){
    img = loadImage("dog_cat.jpg")
}
function draw(){
    image(img,0,0,600,500)
    if(status!= ""){
      for (let i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Objects Detected!"
        fill("red")
        stroke("red")
        accuracy = floor(objects[i].confidence * 100)
        name = objects[i].label
        text(name + "  " + accuracy + "%" , objects[i].x +5, objects[i].y + 15)
        noFill()
        stroke("red")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        
      }
    }

}
