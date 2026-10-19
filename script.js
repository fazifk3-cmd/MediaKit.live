const imageInput = document.getElementById('imageInput');
const previewArea = document.getElementById('previewArea');
const imgPreview = document.getElementById('imgPreview');
const imgDetails = document.getElementById('imgDetails');

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imgPreview.src = event.target.result;
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        imgDetails.textContent = `Dimensions: ${img.width} x ${img.height} px | Size: ${(file.size / 1024).toFixed(1)} KB`;
        previewArea.classList.remove('hidden');
      };
    };
    reader.readAsDataURL(file);
  }
});
