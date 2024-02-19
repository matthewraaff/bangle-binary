require("FontSinclair").add(Graphics);

function draw() {
  var d = new Date();
  var h = d.getHours().toString(2).padStart(6, '0'); // 5 bits for hours
  var m = d.getMinutes().toString(2).padStart(6, '0'); // 6 bits for minutes
  // var s = d.getSeconds().toString(2).padStart(6, '0'); // 6 bits for seconds   - Disabled but can be re-enabled
  var binaryTime = h + "\n" + m; //+ s;

  g.reset();
  g.setFont("Sinclair");
  g.setFontAlign(0,0);
  g.clearRect(0, 0, 176, 176);
  g.drawString(binaryTime, 88, 88);
}

g.clear();
draw();
Bangle.loadWidgets();
Bangle.drawWidgets();
Bangle.setUI("clock");

var secondInterval = setInterval(draw, 60000);
