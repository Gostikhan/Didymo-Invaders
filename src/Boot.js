var SpaceInvaders = {};

SpaceInvaders.Boot = function(game) {};

SpaceInvaders.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'assets/images/loader_bar.png');
        this.load.image('titleimage', 'assets/images/logo.png');
    },
    
    create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;

        // Responsive fullscreen scaling
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.stage.backgroundColor = '#171642';
        
        this.state.start('Preloader');
    }
};