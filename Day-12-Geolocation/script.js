const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

//event listener that is going to use the geolocation browser api
//to determine the longitude and latitude of the user when the button is clicked
btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})

function showPosition(position){
    userLocation.innerHTML = `
        Latitude: ${position.coords.latitude}<br>
        Longitude: ${position.coords.longitude}
    `
}