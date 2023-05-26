


const map = L.map('map').setView([29, 39], 5);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function generatelist() {
   const ul = document.querySelector('.list');
   employee.forEach((item) => {
     const li = document.createElement("li");
     const div = document.createElement("div");
     const a = document.createElement("a");
     const p = document.createElement("p");
     div.classList.add("empName");
     a.innerText = item.name;
     a.href = '#';
     a.addEventListener('click', function() {
       map.flyTo([item.coordinates.latitude, item.coordinates.longitude], 12);
     });
     p.innerText = item.address;
     div.appendChild(a);
     div.appendChild(p);
     li.appendChild(div);
     ul.appendChild(li);
   });
 }
 
 generatelist();
 
 function addLayerToMap() {
   employee.forEach((item) => {
     const { latitude, longitude } = item.coordinates;
     const marker = L.marker([latitude, longitude]).addTo(map);
     const popupContent = `<b>Name:</b> ${item.name}<br><b>Department:</b> ${item.department}`;
     marker.bindPopup(popupContent);
     marker.on('click', function() {
       map.flyTo([latitude, longitude], 12);
     });
   });
 }
 
 addLayerToMap();
 