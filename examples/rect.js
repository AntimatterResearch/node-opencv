var cv = require('../lib/opencv');
/// test matrix.where
function matrix_where() {
  var m = new cv.Matrix(100, 100, cv.Constants.CV_8UC1, [cv.Constants.GC_PR_FGD]);
  var win2 = new cv.NamedWindow('Video2', 0)
  win2.show(m);
  win2.blockingWaitKey(0, 5000);

  m.where([cv.Constants.GC_FGD,cv.Constants.GC_PR_FGD], 255, 0)

  win2.show(m);
  win2.blockingWaitKey(0, 5000);

}

// test rect
function matrix_rect() {
  var r = new cv.Rect(0, 0, 1, 1)
  var p = new cv.Point(0, 3)
  console.log(r.width)
  console.log(r.x)
  r = new cv.Rect(3, 4, 5, 76)
  console.log(r.y)
  console.log(r.height)

}


//matrix_where()
matrix_rect()
