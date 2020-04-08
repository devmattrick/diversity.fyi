import randomEmoji from './emoji';

let randomFavicon = (): void => {
  // TODO Either set a sane default favicon or use a normal canvas to generate
};

if (typeof OffscreenCanvas !== 'undefined') {
  const canvas = new OffscreenCanvas(32, 32);
  const ctx = canvas.getContext('2d');

  let faviconLink = document.querySelector('link[rel="shortcut icon"]');

  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.setAttribute('rel', 'shortcut icon');
    document.head.appendChild(faviconLink);
  }

  randomFavicon = (): void => {
    ctx.clearRect(0, 0, 32, 32);
    ctx.font = '32px monospace';
    ctx.fillText(randomEmoji(), 0, 32);
    canvas
      .convertToBlob()
      .then(blob => URL.createObjectURL(blob))
      .then(dataUrl => {
        console.log(dataUrl);
        faviconLink.setAttribute('href', dataUrl as string);
      });
  };
}

export default randomFavicon;
