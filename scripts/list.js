

var hotelList = document.getElementById('hotel-list-view');
var mapView = document.getElementById('map-view');
var hotelViewBtn = document.getElementById('hotel-view-btn');
var mapViewBtn = document.getElementById('map-view-btn');

// This function showshotel-list-view and hide map-view
function showHotelList(){
    hotelList.style.display = 'flex';
    hotelViewBtn.style.backgroundColor = 'dodgerblue';
    hotelViewBtn.style.color = "white"; 
    mapView.style.display = 'none';
    mapViewBtn.style.backgroundColor = "";   
    mapViewBtn.style.color = "black"; 
}

// this function show map-view and hotel-list-view div 
function showMapView(){
    hotelList.style.display = 'none';
    hotelViewBtn.style.backgroundColor = '';
    hotelViewBtn.style.color = "black";  
    mapView.style.display = 'block';
    mapViewBtn.style.backgroundColor = "dodgerblue";  
    mapViewBtn.style.color = "white";  
}