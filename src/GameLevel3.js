var SpaceInvaders = SpaceInvaders || {};

// Define GameLevel2 as a new state that extends Game
SpaceInvaders.GameLevel3 = function(game) {
    // Call the base Game constructor
    SpaceInvaders.Game.call(this, game);
};

// Inherit from Game
SpaceInvaders.GameLevel3.prototype = Object.create(SpaceInvaders.Game.prototype);
SpaceInvaders.GameLevel3.prototype.constructor = SpaceInvaders.GameLevel3;

// Optional: initialize with score carried over from Level 1
SpaceInvaders.GameLevel3.prototype.init = function(scoreFromLevel2){
    this.score = scoreFromLevel2 || 0; // continue score
};

// Override buildWorld to change background or tweak level setup
SpaceInvaders.GameLevel3.prototype.buildWorld = function(){
    // Add a different background for Level 3
    this.add.image(0, 0, 'levelBG3');
      
    this.buildInvaders();
    this.buildShip();
    this.buildBullets();
    this.buildInvadersBullets();
    this.buildStateText();
    this.buildUI();
    this.buildInvadersExplosions();
    this.buildShipExplosion();
};

SpaceInvaders.GameLevel3.prototype.invadersCount = function(){
    this.totalInvaders--;
    if(this.totalInvaders == 0){
        this.stateText.text = " Final Level Complete!\n Click to continue";
        this.stateText.visible = true;
        this.gameover = true;

        this.game.input.onTap.addOnce(function(){
            this.state.start('FactCard3', true, false, this.score);
        }, this);
    }
};
