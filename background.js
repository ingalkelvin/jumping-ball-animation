function Back() {
	
	this.x = 0;
	this.y = 0;
	

}
Back.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.lineWidth = 2;
		
	context.fillStyle = "green";
	context.beginPath();
	context.moveTo(-550, 300);
	context.lineTo(-550, -300);
	context.lineTo(550, -300);
	context.lineTo(550, 300);
	context.closePath();
	
	context.fill();
	context.stroke();
	
	context.restore();
	
};
