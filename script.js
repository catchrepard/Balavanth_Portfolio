// Add this JavaScript for the "I don't know" button
const dontKnowButton = document.getElementById('dontKnowButton');

dontKnowButton.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - dontKnowButton.offsetWidth;
    const maxY = window.innerHeight - dontKnowButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    dontKnowButton.style.transform = `translate(${x}px, ${y}px)`;
});

dontKnowButton.addEventListener('mouseleave', () => {
    dontKnowButton.style.transform = ''; // Reset transform when mouse leaves
});

// Add this JavaScript for the "I love you too" button
const loveButton = document.getElementById('loveButton');
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
popupContainer.innerHTML = `
    <div class="popup-content">
        <span class="popup-close" id="popupClose">&times;</span>
        <p>Just say hi </p>
        <p>Here is my Phone Number: 8073279219</p>
    </div>
`;
document.body.appendChild(popupContainer);

loveButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    popupContainer.style.display = 'block';
});

const popupClose = document.getElementById('popupClose');
popupClose.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});



// Add this JavaScript for the photo popup
const photoButton = document.getElementById('photoButton');
const photoPopup = document.getElementById('photoPopup');
const closeButton = document.getElementById('closeButton');

photoButton.addEventListener('click', () => {
    photoPopup.style.display = 'block'; // Show the photo popup when the button is clicked
});

closeButton.addEventListener('click', () => {
    photoPopup.style.display = 'none'; // Hide the photo popup when the close button is clicked
});
