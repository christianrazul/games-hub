// first get the URL of the background images
// second slice the URL so that we can add the cropper parameters to it
// third return cropped URL

// NORMAL: https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
// TARGET: https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

const getCroppedImageURL = (url: string) => {
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageURL;
