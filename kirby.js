class Kirby 
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.game.kirby = this;
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Kirby_Sprite_Sheet.png");
		let width = [19, 18, 17, 19, 24, 19, 17, 18];
		this.animations = new Animator(this.spritesheet, 9, 79, width, 19, 8, .075, 4, 0, 1);
	};

	update()
	{

	};

	draw(ctx)
	{
		this.animations.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
	};
};