class Animator
{
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
	{
		Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop});
		

		this.elapsedTime = 0;
		this.totalTime = this.frameCount * this.frameDuration;
	};

	drawFrame(tick, ctx, x, y, scale)
	{
		this.elapsedTime += tick;
		if (this.isDone())
		{
			if (this.loop)
			{
				this.elapsedTime -= this.totalTime;
			}
			else
			{
				return;
			}
		}

		let frame = this.currentFrame();
		if (this.reverse)
			frame = this.frameCount - frame - 1;
		let fullWidth = 0;
		for (let i = 0; i < frame; i++)
		{
			fullWidth = fullWidth + (this.width[i] + this.framePadding);
		}
		ctx.drawImage(this.spritesheet, this.xStart + fullWidth, this.yStart, this.width[frame], this.height, x, y, this.width[frame] * scale, this.height * scale);
		
	};

	currentFrame()
	{
		return Math.floor(this.elapsedTime / this.frameDuration);
	};

	isDone()
	{
		return (this.elapsedTime >= this.totalTime);
	};
};