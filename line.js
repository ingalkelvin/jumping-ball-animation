function Line () {
	//if (width === undefined) { width = 50; }
	//if (height === undefined) { height = 50; }
	
	this.x = 0;
	this.y = 0;
}

Line.prototype.draw = function (context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	//context.scale(this.scaleX, this.scaleY);
	//context.lineWidth = this.lineWidth;
	//context.fillStyle = this.color;
	context.beginPath();
	context.strokeStyle = 3;
	context.moveTo(0, 0);
	context.lineTo(1200, 0);
	context.stroke();
	context.closePath();
	context.fill();
	context.stroke;
	// if (this.lineWidth > 0) {
	// 	context.stroke();
	// }
	context.restore();
};

