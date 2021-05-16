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

var point = [[25.042117, 121.506826], 
              [25.10652054297434, 121.54138740580487], 
              [25.127573404797932, 121.46890478023624], 
              [25.04168698916446, 121.5293519173463], 
              [25.035698263985562, 121.49121366757596], 
              [25.036475925564215, 121.50701741791549],
              [25.0358537966957, 121.49499021774572],
              [25.037098051277535, 121.49456413094997],
              [25.0367869888153, 121.4936169267749],
              [25.038808880719625, 121.48991697609586],
              [25.039714716511167, 121.55968562468118],
              [25.042067930224942, 121.45231324398645],
              [25.08231002962556, 121.4624643312046],
              [25.082150989401217, 121.48098809921042],
              [25.130790236272883, 121.75301314530032], 
              [25.03623075381632, 121.49814868418378], 
              [25.036420919671446, 121.49862265534873], 
              [25.036351653691767, 121.49803062651355], 
              [25.036312340620633, 121.49820798418395],
              [25.029092659922927, 121.49251424185418],
              [24.079796493139085, 120.45599116882704],
              [23.929294884362715, 120.31672918416491], 
              [23.568740188637978, 120.30498542972751],
              [23.378286190107936, 120.15739505532078], 
              [23.330157357540116, 120.16115167312425], 
              [23.28621499826293, 120.14319937065972],
              [24.792478755669627, 121.18521673448647],
              [25.03046878592187, 121.49303560519125], 
              [25.133106053792144, 121.74579074000981], 
              [24.67972056296864, 121.77203718259808], 
              [24.757485009816737, 121.75496468260046], 
              [24.82684169256836, 121.77078350774478], 
              [25.0377302729207, 121.49901815192715], 
              [24.995910158959955, 121.42515805377242], 
              [24.99391836274317, 121.42831059610194], 
              [25.121197792359418, 121.82615376727055],
              [23.817456778176616, 120.72259891140784], 
              [23.803735308031893, 120.71528840345256], 
              [23.068151662111568, 120.12848592005014], 
              [22.93540798246061, 120.27788189788832], 
              [22.61971873843574, 120.40959266478252], 
              [22.6663139888434, 120.32756093964159], 
              [24.05939723893669, 120.4321522838574], 
              [23.708829317861227, 120.26655364023992],
              [24.250568390685434, 120.58194805559658], 
              [24.578781885563913, 120.70887092467704],
              [24.604239869080907, 120.77439311143098], 
              [24.971558649834396, 121.43815864766326], 
              [24.974595094211924, 121.25576981144208], 
              [25.035963678842613, 121.49864701329048]] 

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