// convert from image to base 64 to store the image
/**
   * convert from image to base 64 to store the image
   * @function toDataUrl
   * @param {string} url - url to convert
   * @returns {string} -base64
   */
const toDataUrl = (url) => fetch(url)
  .then((response) => response.blob())
  .then((blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  }));
export default toDataUrl;
