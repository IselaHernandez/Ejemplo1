// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("mapUTSJR"), {
    center: { lat: 20.416384121241883, lng: -99.99834098856228},
    zoom: 18,
  });
  infoWindow = new google.maps.InfoWindow();

  //const locationButton = document.createElement("button");

  //locationButton.textContent = "Pan to Current Location";
  //locationButton.classList.add("custom-map-control-button");
  //map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  //locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    //if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Geolocalizacion completada");
          infoWindow.open(map);
          map.setCenter(pos);
          
          const CASA = new google.maps.Marker({
            position: pos,
            map: map,
            icon:'http://localhost:3001/web/images/a.png'
          });
          /////INFO WINDOW/////
        Var = infoWindow= new google.maps.InfoWindow();
        infoWindow.setPosition(pos);
        infoWindow.setContent("Calle Manzana #40 Fraccionamiento los Nogales, Colonia San juan del Rio, Estado de Queretaro");
        
        google.maps.event.addListener(CASA,'click',()=>{
            infoWindow.open(map,CASA);
        });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } 
  

