//import ThumbnailGenerator from 'video-thumbnail-generator';
const ThumbnailGenerator = require('video-thumbnail-generator').default;

const tg = new ThumbnailGenerator({
  sourcePath: "./video/messi.mp4",
  thumbnailPath: "./images/",
  tmpDir: "./images" //only required if you can't write to /tmp/ and you need to generate gifs
});



tg.generate({
  size: "1000x700"
}).then(console.log);
//tg.generateOneByPercent(100).then(console.log);

