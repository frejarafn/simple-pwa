document
    .querySelector("#btn-geolocation")
    .addEventListener("click", getGeolocation); // Add an event listener to the button with the ID "btn-geolocation"

async function getGeolocation() {
    const geolocation = document.querySelector("#geolocation"); // Get the geolocation element
    const map = document.querySelector("#map"); // Get the map element

    geolocation.textContent = "Loading..."; // Set the text content to "Loading..."

    // Check if geolocation is available
    if (!("geolocation" in navigator)) {
        geolocation.textContent = "Geolocation is not available"; // Set the text content to "Geolocation is not available"
        return;
    }

    // Get the current position
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords; // Get the latitude and longitude from the position object

        geolocation.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`; // Set the text content to the latitude and longitude

        map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&marker=${latitude},${longitude}`; // Set the src attribute of the map to the OpenStreetMap URL
    });
}
