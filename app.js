//載入地圖
const map = L.map('map', { zoomControl: false }).setView([0, 0], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors:<a href="https://github.com/fred39392001">ABow_Chen</a>'
}).addTo(map);

const violetIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const marker = L.marker([0, 0] , {icon:violetIcon}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var point = [[ 25.042117, 121.506826], // 萬華區
              [25.10652054297434, 121.54138740580487], // 銀座日本料理
              [25.127573404797932, 121.46890478023624], // 好市多Costco 北投店
              [25.04168698916446, 121.5293519173463], // 遠東SOGO台北復興館
              [25.035698263985562, 121.49121366757596], 
              [25.036475925564215, 121.50701741791549],
              [25.0358537966957, 121.49499021774572],
              [25.037098051277535, 121.49456413094997],
              [25.0367869888153, 121.4936169267749],
              [25.038808880719625, 121.48991697609586],
              [25.039714716511167, 121.55968562468118],
              [25.042067930224942, 121.45231324398645],
              [25.08231002962556, 121.4624643312046],
              [25.082150989401217, 121.48098809921042]] 

for(var i in point ){
  console.log(point[i]); 
  L.marker(point[i]).addTo(map)
};  

// L.marker([25.042117, 121.506826]).addTo(map)
//   // .bindPopup('<h3> 萬華區 </h3>')
//   // .openPopup();


//定位使用者位置
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(position => {
  userLat = position.coords.latitude;
  userLng = position.coords.longitude;
  console.log(userLat, userLng);
  map.setView([userLat, userLng], 13);
  marker.setLatLng([userLat,userLng]).bindPopup(
      `<h3>你的位置</h3>`)
      .openPopup();
  });
} else {
  console.log('geolocation not available');
}

//新增定位按鈕
// let geoBtn = document.getElementById('jsGeoBtn');
// geoBtn.addEventListener('click',function(){
//     map.setView([userLat, userLng], 13);
//     marker.setLatLng([userLat,userLng]).bindPopup(
//         `<h3>你的位置</h3>`)
//         // .openPopup();
// },false);