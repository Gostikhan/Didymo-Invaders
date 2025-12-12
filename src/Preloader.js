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
		this.load.image('levelBG', 'assets/images/river_map.png');
		this.load.image('levelBG2', 'assets/images/wanaka_map.png');
		this.load.image('levelBG3', 'assets/images/shed_map.png');
		this.load.image('factCard1', 'assets/images/FactCard1.png');
		this.load.image('factCard2', 'assets/images/FactCard2.png');
		this.load.image('factCard3', 'assets/images/FactCard3.png');
	},	

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
	   	this.ready = true;
        this.state.start('StartMenu');
	}
};