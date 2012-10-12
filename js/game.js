enchant()
enchant.Sound.enabledInMobileSafari = true
window.onload = function() {

  window.game = new Game(800, 600)
  game.fps = 24

  var physicsWorld = new PhysicsWorld(0, 9.8),
      ground = ground(),
      player = new Player(100, 100)

  window.ground = ground
  window.player = player
      
  game.onload = function() {

    window.stage = new Group()
    stage.addChild(ground)
    stage.addChild(player)
    
    game.rootScene.backgroundColor = "#eee"
    game.rootScene.addChild(stage)

    for(var i=0, l=Math.floor(Math.random()*10)+1; i<l; i++) {
      var badBall = new BadBall((Math.floor(Math.random()*game.width/2)+1) + game.width/2, 100)
      stage.addChild(badBall)
    }

    for(var i=0, l=game.width/16; i<l; i++) {
      var ef = new ElevatingFloor(
        i*16, 
        ground.y - Math.floor(Math.random()*40)+1
      )
      stage.addChild(ef)
    }

    game.rootScene.addEventListener("enterframe", function () {
      physicsWorld.step(game.fps)
    })

  }

  function ground() {
    var ground = new PhyBoxSprite(game.width, 100, enchant.box2d.STATIC_SPRITE, 1.0, 0.1, 0, true)
    ground.x = 0
    ground.y = game.height - ground.height
    ground.name = "ground"
    ground.backgroundColor = "#000"
    return ground    
  }

  game.start()

}