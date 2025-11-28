SpaceInvaders.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
}

SpaceInvaders.StartMenu.prototype = {
	create: function () {
		startBG = this.add.image(this.world.centerX, this.world.centerY, 'titlescreen');
		startBG.anchor.setTo(0.5, 0.5);
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		startPrompt = this.add.bitmapText(this.world.centerX, this.world.centerY, 'eightbitwonder', "Protect the lake!", 24);
		this.input.onTap.addOnce(this.startGame, this);
		
	},
	startGame: function (pointer) {
		this.state.start('Game');
	}
};