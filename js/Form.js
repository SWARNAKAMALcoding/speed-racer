class Form {
  constructor() {
   this.greeting=createElement("h2")
     this.input=createInput("").attribute("placeholder","Enter Your Name")
  this.button=createButton("PLAY")
    this.titleImage=createImg("assets/title.png")
 this.x=20
  }

setPosition(){
  this.titleImage.position(width/4,height/6)
  this.button.position(width/2,height/2+100)
  this.input.position(width/2,height/2)
  this.greeting.position(width/4,height/8)
}



display(){
this.setPosition()

  this.button.mousePressed(()=>{
   console.log(this.x) 
   this.input.hide()  
   this.button.hide() 
   this.titleImage.hide() 
   this.greeting.html("Welcome "+this.input.value()+" to SPEED RACER")
  })
}
}
