// first get the URL of the background images
// second slice the URL so that we can add the cropped parameters to it
// third return cropped URL

// NORMAL: https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
// TARGET: https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageURL;
