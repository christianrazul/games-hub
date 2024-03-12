const getCroppedImageURL = (url: string) => {
  const target = 'media/';
  // get the index up until the last character of 'media/'
  const index = url.indexOf(target) + target.length;
  // slice from beginning of URL until index and add the cropped parameters, then slice URL starting from index until end and add it
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageURL;
