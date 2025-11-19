import './style.css'
import Phaser from 'phaser';


const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#222D47", // WAI Wanaka dark blue
  physics: {
    default: "arcade",
    arcade: { debug: false}
  },
  scene: [GameScene]
};

new Phaser.Game(config);

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    // Placeholder graphics
    this.load.image("player", "https://labs.phaser.io/assets/sprites/phaser-dude.png");
    this.load.image("didymo", "https://labs.phaser.io/assets/sprites/red.png");
    this.load.image("bullet", "https://labs.phaser.io/assets/sprites/blue.png");
  }

  create() {
    // Player
    this.player = this.physics.add.sprite(400, 550, "player").setCollideWorldBounds(true);

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Bullets
    this.bullets = this.physics.add.group();

    // Enemies
    this.enemies = this.physics.add.group({
      key: "didymo",
      repeat: 10,
      setXY: { x: 100, y: 50, stepX: 60 }
    });

    // Collision
    this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
  }

  update() {
    // Player movement
    if (this.cursors.left.isDown) this.player.setVelocityX(-200);
    else if (this.cursors.right.isDown) this.player.setVelocityX(200);
    else this.player.setVelocityX(0);

    // Shoot
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      const bullet = this.bullets.create(this.player.x, this.player.y - 20, "bullet");
      bullet.setVelocityY(-300);
    }

    // Enemy descent
    this.enemies.children.iterate(enemy => {
      enemy.y += 0.5; // slow descent
      if (enemy.y > 600) {
        this.scene.restart(); // Game Over condition
      }
    });
  }

  hitEnemy(bullet, enemy) {
    bullet.destroy();
    enemy.destroy();
  }
}

