const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.parentNode.classList.toggle('show');
    });
});

window.addEventListener('click', (e) => {
dropdownToggles.forEach((toggle) => {
    if (!toggle.parentNode.contains(e.target)) {
        toggle.parentNode.classList.remove('show');
        }
    });
});


//galerija

let galleryImages = document.querySelectorAll(".gallery-image");
let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-image");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let closeButton = document.querySelector(".close");
let currentIndex = 0;

// Add click event listener to each gallery image
galleryImages.forEach(function(image, index) {
image.addEventListener("click", function() {
// Set the current index and show the modal
currentIndex = index;
showModal();
});
});

// Show the modal and set the modal image source
function showModal() {
modal.style.display = "block";
modalImage.src = galleryImages[currentIndex].src;
}

// Hide the modal
function hideModal() {
modal.style.display = "none";
}

// Go to the previous image
function prevImage() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = galleryImages.length - 1;
}
modalImage.src = galleryImages[currentIndex].src;
}

// Go to the next image
function nextImage() {
currentIndex++;
if (currentIndex >= galleryImages.length) {
currentIndex = 0;
}
modalImage.src = galleryImages[currentIndex].src;
}

// Add click event listeners to buttons and close icon
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
closeButton.addEventListener("click", hideModal);

// Close modal when user clicks outside of the modal content
window.onclick = function(event) {
if (event.target == modal) {
hideModal();
}
};

// informacije :)
function informacije() {
    var informacija = "Ovo je sajt o gradjevinama Njujorka :)";
    alert(informacija);
}

