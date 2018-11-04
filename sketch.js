// using paper js paperscript for creating points + paths!

var signs = [];

function onKeyDown(event) {
	//when any key is pressed run this code
	// max x and y coords for each signature
	var max = new Point(70, 90);

	var signature = new Path.Circle({
		strokeColor: 'blue',
		strokeWidth: 2,
		strokeCap: 'round'
	});

	//set up 4 random points per sign
	for (var i = 0; i < 4; i++) {
		// set random point with x y coord
		var randomPoint = Point.random();
		var point = max * randomPoint;
		// add point to sign based on random coords
		signature.add(new Point(point * 2, point));
		signature.add(new Point(point, point));
		signature.add(new Point(point, point));
		signature.add(new Point(point, point));
	}

	// smooth segments
	signature.smooth();
	// push each sign into signs array
	signs.push(signature);

	for(var i = 0; i < signs.length; i++){
		// for each new signature move it 200px to the right
		signs[i].position.x += 200;
		signs[i].position.y = 300;
	}
}
