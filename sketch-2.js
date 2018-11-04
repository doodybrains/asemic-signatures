

var signature = new Path({
	strokeColor: 'blue',
	strokeWidth: 2,
	strokeCap: 'round'
});


signature.add(new Point(200, 200));

function onFrame(event) {
    var max = new Point(220, 250);
		var randomP = Point.random();
		var newPoint = max * randomP + 150;

    if (event.count < 10 && event.count % 2 === 0) {
        signature.add(newPoint);
        newPoint += new Point(1, 1);
				signature.smooth();
    }
}
