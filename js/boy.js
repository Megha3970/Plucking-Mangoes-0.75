class Boy
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.image = loadImage("images/boy.png");
    }

    display()
    {
        //var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}