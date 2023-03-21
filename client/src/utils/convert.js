import React from 'react';
import Jimp from 'jimp';
import rembg from 'rembg';

class ImageProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pngImage: null,
      apiUrl: '',
    };
  }

  convertAndRemoveBackground = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const imageBlob = await response.blob();
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64EncodedImage = event.target.result;
        const jimpImage = await Jimp.read(Buffer.from(base64EncodedImage, 'base64'));
        const pngImageBuffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
        const removedBackgroundImageBuffer = await rembg(pngImageBuffer);
        const pngImage = new File(
          [removedBackgroundImageBuffer],
          `${imageUrl.split('/').pop().split('.')[0]}.png`,
          { type: 'image/png' }
        );
        this.setState({ pngImage });
      };
      reader.readAsDataURL(imageBlob);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { pngImage, apiUrl } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="API URL"
          value={apiUrl}
          onChange={(event) => this.setState({ apiUrl: event.target.value })}
        />
        <button onClick={() => this.convertAndRemoveBackground(apiUrl)}>Process Image</button>
        {pngImage && <img src={URL.createObjectURL(pngImage)} alt="PNG Image" />}
      </div>
    );
  }
}

export default ImageProcessor;
