var BadBall = enchant.Class.create(enchant.box2d.PhyCircleSprite, {

  speed: 10,
  radius: 8,

  initialize: function(x, y) {

    enchant.box2d.PhyCircleSprite.call(this, this.radius, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.2, true);

    this.image = new Surface(this.radius*2, this.radius*2)
    this.image.context.beginPath()
    this.image.context.arc(this.radius, this.radius, this.radius-1, 0, Math.PI*2, true)
    this.image.context.fillStyle = "#f00"
    this.image.context.fill()
    
    this.x = x
    this.y = y

  },

  onenterframe: function() {
    this.preventEscape()
    /*
    if(this.contactedPlayer()) {
      player.destroy()
    }
    */
    if(Math.random() > 0.5)
      this.jump()
  },

  preventEscape: function() {
    if(this.x - 1 < 0 && this.vx < 0)
      this.x = 0

    if(this.x + this.width + 1 > game.width && this.vx > 0)
      this.x = game.width - this.width

    if(this.y < this.height)
      this.y = this.height
  },

  contactedPlayer: function() {
    var contacted = false
    this.contact(function(sprite) {
      if(sprite == player) {
        contacted = true
      }
    })
    return contacted
  },

  contactedGround: function() {
    var contacted = false
    this.contact(function(sprite) {
      if(sprite == ground || sprite.constructor == ElevatingFloor) {
        contacted = true
      }
    })
    return contacted
  },

  jump: function() {
    if (this.contactedGround()) {
      this.applyImpulse({x: 0, y: -0.05*this.speed})
    } 
  }

})