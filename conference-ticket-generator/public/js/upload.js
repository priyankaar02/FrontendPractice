const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const uploadText = document.getElementById("uploadText");
const previewContainer = document.getElementById("previewContainer");
const imagePreview = document.getElementById("imagePreview");
const uploadButtons = document.getElementById("buttons");
const removeImage = document.getElementById("removeImage");
const changeImage = document.getElementById("changeImage");

// Open file picker when clicking on drop area (unless clicking buttons)
dropArea.addEventListener("click", (event) => {
  if (
    !event.target.closest("#removeImage") &&
    !event.target.closest("#changeImage")
  ) {
    fileInput.click();
  }
});

// Handle drag and drop events
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file) {
    showImagePreview(file);
  }
});

// Handle file input change
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    showImagePreview(file);
  }
});

// Function to display the image preview
function showImagePreview(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    imagePreview.src = e.target.result;
    previewContainer.classList.remove("hidden"); // Show the preview section
    uploadButtons.classList.remove("hidden");
    uploadText.classList.add("hidden"); // Hide the drag-and-drop text
  };
  reader.readAsDataURL(file);
}

// Remove image functionality
removeImage.addEventListener("click", (event) => {
  event.stopPropagation(); // Stop event from bubbling to dropArea
  imagePreview.src = ""; // Clear the image
  previewContainer.classList.add("hidden"); // Hide preview section
  uploadButtons.classList.add("hidden"); // Hide buttons
  uploadText.classList.remove("hidden"); // Show drag-and-drop text again
  fileInput.value = ""; // Reset input field
});

// // Change image functionality
// changeImage.addEventListener("click", (event) => {
//   event.stopPropagation(); // Stop event from bubbling to dropArea
//   fileInput.value = ""; // 🔥 Reset file input before opening picker
//   fileInput.click(); // Open file picker again
// });
