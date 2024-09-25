import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [htmlCode, setHtmlCode] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:4000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setGeneratedImages(response.data.images);
      setHtmlCode(response.data.html);
      console.log('Successfull!');

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="App">
      <h1>Responsive Image Generator</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Generate Responsive Images</button>

      {generatedImages.length > 0 && (
        <div>
          <h2>Generated Images:</h2>
          {generatedImages.map((img, index) => (
            <div key={index}>
              <p>{img.size}px - {img.format}</p>
              <img src={`http://localhost:4000${img.url}`} alt="Generated" width={img.size} />
            </div>
          ))}

          <h2>Responsive HTML Code:</h2>
          <pre>
            <code>{htmlCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
