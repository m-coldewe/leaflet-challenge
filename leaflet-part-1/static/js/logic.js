// define the url
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// initialize map
const map = L.map('map', {
    center: [40.731, -106.216],
    zoom: 4
  });

// set basemap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// call the data from the url
async function getEarthquakes() {
    const response = await fetch(url);
    const data = await response.json();
    const features = data.features;
    
    // grab latitude, longitude, depth, and magnitude for each incident
    features.forEach(feature => {
        const latitude = feature.geometry.coordinates[1];
        const longitude = feature.geometry.coordinates[0];
        const depth = feature.geometry.coordinates[2];
        const magnitude = feature.properties.mag;

        // assign marker size and color
        let marker_size = magnitude * 3;
        let marker_color;

        if (depth >= -10 && depth <= 10) {
            marker_color = '#44ce11';
        } else if (depth > 10 && depth <= 30) {
            marker_color = '#BBDB44';
        } else if (depth > 30 && depth <= 50) {
            marker_color = '#F7E379';
        } else if (depth > 50 && depth <= 70) {
            marker_color = '#F2A134';
        } else if (depth > 70 && depth <= 90) {
            marker_color = '#FF4433';
        } else {
            marker_color = '#8B0000';
        };

        // create the markers
        const marker = L.circleMarker([latitude, longitude], {
            radius: marker_size,
            color: 'black',
            fillColor: marker_color,
            fillOpacity: 0.8
        }).addTo(map);

        // assign values to the popup and bind to the markers
        marker.bindPopup(`
            Magnitude: ${magnitude}<br>
            Location: ${feature.properties.place}<br>
            Depth: ${depth} km<br>
        `).openPopup();
    })
};

// run the function
getEarthquakes();

// create the legend for the depth colors
var legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info-legend');
    div.innerHTML += '<h4>Depth (km)</h4>';
    div.innerHTML += '<i style="background:#44ce11"></i> -10 to 10 km<br>';
    div.innerHTML += '<i style="background:#BBDB44"></i> 10 to 30 km<br>';
    div.innerHTML += '<i style="background:#F7E379"></i> 30 to 50 km<br>';
    div.innerHTML += '<i style="background:#F2A134"></i> 50 to 70 km<br>';
    div.innerHTML += '<i style="background:#FF4433"></i> 70 to 90 km<br>';
    div.innerHTML += '<i style="background:#8B0000"></i> 90+ km<br>';
    return div;
};

// add the legend to the map
legend.addTo(map);
