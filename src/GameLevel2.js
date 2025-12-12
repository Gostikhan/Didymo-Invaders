var SpaceInvaders = SpaceInvaders || {};

// Define GameLevel2 as a new state that extends Game
SpaceInvaders.GameLevel2 = function(game) {
    // Call the base Game constructor
    SpaceInvaders.Game.call(this, game);
};

// Inherit from Game
SpaceInvaders.GameLevel2.prototype = Object.create(SpaceInvaders.Game.prototype);
SpaceInvaders.GameLevel2.prototype.constructor = SpaceInvaders.GameLevel2;

SpaceInvaders.GameLevel2.prototype.create = function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.buildWorld();
    this.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);

    if (this.music) { this.music.stop(); } // stop previous music
    this.music = this.add.audio('level2Music');
    this.music.loop = true;
    this.music.play();
};


// Optional: initialize with score carried over from Level 1
SpaceInvaders.GameLevel2.prototype.init = function(scoreFromLevel1){
    this.score = scoreFromLevel1 || 0; // continue score
};

// Override buildWorld to change background or tweak level setup
SpaceInvaders.GameLevel2.prototype.buildWorld = function(){
    // Add a different background for Level 2
    this.add.image(0, 0, 'levelBG2');

    this.buildInvaders();
    this.buildShip();
    this.buildBullets();
    this.buildInvadersBullets();
    this.buildStateText();
    this.buildUI();
    this.buildInvadersExplosions();
    this.buildShipExplosion();
};

SpaceInvaders.GameLevel2.prototype.invadersCount = function(){
    this.totalInvaders--;
    if(this.totalInvaders == 0){
        this.stateText.text = " Level 2 Complete!\n Click to continue";
        this.stateText.visible = true;
        this.gameover = true;

        this.game.input.onTap.addOnce(function(){
             if(this.music){ this.music.stop(); }  // stop Level 2 music
            this.state.start('FactCard2', true, false, this.score);
        }, this);
    }

SpaceInvaders.GameLevel2.prototype.restartGame = function(){
    if(this.music){ this.music.stop(); } // stop Level 2 music
    this.totalInvaders = this.totalRow * this.totalInvadersRow;
    this.score = 0; // reset score to 0
    this.gameover = false;
    this.livingEnemies.length = 0;  
    this.state.start('StartMenu', true, false);
};
SpaceInvaders.GameLevel2.prototype.restartGame = function(){
    if(this.music){ this.music.stop(); }
    this.totalInvaders = this.totalRow * this.totalInvadersRow;
    this.score = 0; // force reset
    this.gameover = false;
    this.livingEnemies.length = 0;  
    this.state.start('StartMenu', true, false, 0); // pass 0 explicitly
};

};
