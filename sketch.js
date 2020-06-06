const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var brush;
var ar;
var traj;
var database;
var s;
var gameState = "released";
function setup(){
    var canvas = createCanvas(1276,605);
    engine = Engine.create();
    world = engine.world;
    brush = new Brush(0,0,30,30);
    ar = [];
    database = firebase.database();
    var refx = database.ref('coor/x');
    var refy = database.ref('coor/y');
    refx.on("value",readx,error);
    refy.on("value",ready,error);
}
function draw(){
    
    Engine.update(engine);
    fill(0);
    if(gameState == "drag"){
    brush.display();
    }
    Matter.Body.setPosition(brush.body,{x:mouseX,y:mouseY});
}

function mouseDragged(){
    traj = brush.body.position;
    ar.push([[traj.x],[traj.y]]);
    var len = ar.length;
    
    database.ref('coor/').set({
        'x': traj.x,
        'y': traj.y
    })
    gameState = "drag";
}
function mouseReleased(){
    gameState = "released"
}
function readx(data){

}
function ready(data){

}
function error(){

}
function cs(){
    s = document.getElementById('size').value;
    brush.cr(s);
}