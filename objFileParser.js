var fs = require('fs');
var vertexArray = [];
var objectFile = "droneVertexData.obj"


var VertObj = function(line) {
  var values = line.split();
  values.shift();

  this.xVal = values[0];
  this.yVal = line[1];
  this.zVal = line[2]
}

function parseFace(){
// TODO
}

function saveVertObj(obj) {
  for (var i=0; i < obj.length; i++) {
    if (line[i][0] == "v"){
      vertexArray.push(new VertObj(line[i]));
    }
  }
}

function openFile() {
  fs.open(objectFile, 'r', function(err, fd) {

    if (err) {
      return console.error(err);
    }

    return objectFile.split('\n');
  }
)}

saveVertObj(openFile());

for (i=0;i<vertexArray.length();i++) {
  console.log(vertexArray[i]);
}

