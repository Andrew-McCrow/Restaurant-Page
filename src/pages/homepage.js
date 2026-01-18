// Select the div#content element
const homePageContent = document.getElementById('content');

// Add heading to the content div
const homeContent = document.createElement('h1');
homeContent.textContent = "Welcome to our Restaurant Page!";
homePageContent.appendChild(homeContent);

// Add a paragraph to the content div
const description = document.createElement('p');
description.textContent = "Experience the finest dining with us.";
homePageContent.appendChild(description);

// Add an image to the content div
import restaurantImage from '/src/images/restaurant.jpg';
const imageElement = document.createElement('img');
imageElement.src = restaurantImage;
imageElement.alt = "Delicious food at our restaurant";
homePageContent.appendChild(imageElement);

// export the contentDiv for use in other modules
export default homePageContent;