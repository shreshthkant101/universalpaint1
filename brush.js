class Brush extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("brush.png");
    }
    cr(r){
      this.height = r;
      this.width = r;
    }
  };
  