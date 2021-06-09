// convert from image to base 64 to store the image

const toDataUrl = (url) => fetch(url)
  .then((response) => response.blob())
  .then((blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  }));
export default toDataUrl;
