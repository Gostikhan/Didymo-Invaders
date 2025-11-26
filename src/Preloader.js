SpaceInvaders.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

SpaceInvaders.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
       	this.load.image('titlescreen', 'assets/images/TitleBG.png');
        this.load.image('ship', 'assets/images/ship.png');
        this.load.image('bullet', 'assets/images/blaster.png');
        this.load.image('invaderBullet', 'assets/images/invaderblaster.png');
        this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');       
        this.load.atlasJSONArray('invaders', 'assets/images/spritesheets/invaders.png', 'assets/images/spritesheets/invaders.json'); 
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
	   	this.ready = true;
        this.state.start('StartMenu');
	}
};