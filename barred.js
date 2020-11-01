function Barred() {
	
	this.x = 0;
	this.y = 0;
	

}
Barred.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.lineWidth = 2;
		
	context.fillStyle = "Brown";
	context.beginPath();
	context.moveTo(-40, 300);
	context.lineTo(-40, -150);
	context.lineTo(40, -150);
	context.lineTo(40, 300);
	context.closePath();
	
	context.fill();
	context.stroke();
	
	context.restore();
	
};
