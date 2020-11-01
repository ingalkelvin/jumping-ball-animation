function Bar(size) {

	this.x = 0;
	this.y = 0;
	this.color = "red";
	this.rotation = 0;
	this.size = size;
	this.width = 20;
}

Bar.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 2;
	context.rotate(this.rotation);

	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-10, this.size);
	context.lineTo(10, this.size);
	context.lineTo(10, 0);
	context.lineTo(-10, 0);

	context.closePath();
	context.fill();
	context.stroke();

	context.restore();

};


Bar.prototype.getBounds = function() {

      return {
      x: this.x-10,
      y: this.y+this.size,
      width: this.width,
      height:600};
}; 
