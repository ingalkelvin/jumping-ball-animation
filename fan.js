function Fan() {
	
	this.x = 0;
	this.y = 0;
	this.rotation = 0;	

}
Fan.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.lineWidth = 2;
	
			
	context.fillStyle = "blue";
	context.beginPath();
	context.moveTo(-40, 200);
	context.lineTo(-20, 20);
	context.lineTo(-200, 40);
	context.lineTo(-200, -40);
	context.lineTo(-20, -20);
	context.lineTo(-40, -200);
	context.lineTo(40, -200);
	context.lineTo(20, -20);
	context.lineTo(200, -40);
	context.lineTo(200, 40);
	context.lineTo(20, 20);
	context.lineTo(40, 200);
	
	context.closePath();
	
	context.fill();
	context.stroke();
	
	context.fillStyle = "yellow";
	context.beginPath();
	context.arc(0,0,10,(Math.PI*2),0,true);
	
	context.closePath();
	
	context.fill();
	context.stroke();

	context.restore();
	
};
