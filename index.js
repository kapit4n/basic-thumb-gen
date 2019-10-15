var ffmpeg = require("ffmpeg");

var proc = new ffmpeg("./video/messi1.mp4");

console.log(proc);

/*
var proc = new ffmpeg("./video/messi1.mp4").takeScreenshots(
  {
    count: 1,
    timemarks: ["600"] // number of seconds
  },
  "./images",
  function(err) {
    console.log("screenshots were saved");
  }
);
*/
