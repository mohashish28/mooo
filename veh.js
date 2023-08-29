class vehicle {
    constructor (x,y,r,c){
    this.pos = createVector(x,y)
    this.target = createVector(x,y)
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.maxspeed =6
    this.maxforce = 3
    this.r =r
    this.c =c
    }
    
    show (){
//strokeWeight(5)
        fill(this.c)
    // point(this.pos.x,this.pos.y)
   circle(this.pos.x,this.pos.y,this.r)
    }
    
    update(){
    this.vel.add(this.acc)
    this.pos.add (this.vel)
    this.acc.set(0,0)
    
    
    }
    
    applyforce(f){
    this.acc.add(f)
    }
    
    flee(target){
    let force = p5.Vector.sub(target,this.pos)

   // force.normalize()
    let d = force.mag()
    let speed =this.maxspeed
    if (d<40){
    
        force.setMag(speed)
        force.mult(-1)
        force.sub(this.vel)
    force.limit(this.maxforce)
    return force
    }else {
    
        return force.set(0,0)
    
    }

    
    }
    
    arrive (target){
    
        let force = p5.Vector.sub(target,this.pos)
       
        let d = force.mag()
       /// force.normalize()
        let speed =this.maxspeed
        if (d<40){
        
            speed = map (d,0,40,0,this.maxspeed)
      
        }
        force.setMag(speed)
        
        force.limit(this.maxforce)
        force.sub(this.vel)
        return force
    }
    
    
    
    behaviour(){
    
    let flee 
    let mous = createVector(mouseX,mouseY)
    flee =this.flee(mous)
    flee.mult(5)
    this.applyforce(flee)
   
    
    let arrive 
    arrive = this.arrive(this.target)
    arrive.mult(1)
    this.applyforce(arrive)
  
    }
    
    
    
    
    }