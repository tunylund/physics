var ElevatingFloor = enchant.Class.create(enchant.box2d.PhyBoxSprite, {

  speed: 10,

  initialize: function(x, y) {

    enchant.box2d.PhyBoxSprite.call(this, 16, 200, enchant.box2d.STATIC_SPRITE, 1.0, 0.5, 0.2, true);

    this.backgroundColor = "#000"

    this.x = x
    this.y = y
    this.startY = y

  },

  onenterframe: function() {
    this.move()
  },

  move: function() {
    
  }

})