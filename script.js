// Create map object
map = new L.Map('mapid');

// Set map projection and other options
var crs = new L.Proj.CRS('EPSG:25832',
    '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs', {
        resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2, 0.1]
});
map.options.crs = crs;
map.options.minZoom = 2;
map.options.maxZoom = 15;
map.setView(L.latLng(56, 11.5), 2);

// Get ticket from ticket API
kmsticket = new VisStedet.Ticket();

// Create WMS layers and add to map
var baselayer = L.tileLayer.wms('https://{s}.services.kortforsyningen.dk/service', {
    service: 'WMS',
    transparent: true,
    servicename: 'topo25',
    layers: 'topo25_klassisk',
    ticket: kmsticket,
    format: 'image/png',
    attribution: '<a href="https://kortforsyningen.dk/" target="_blank">Styrelsen for Dataforsyning og Effektivisering</a>',
    continuousWorld: true,
    subdomains:'abcdefghijklm',
    maxZoom:14,
}).addTo(map);

var overlay = L.tileLayer.wms('https://{s}.services.kortforsyningen.dk/service', {
    service: 'WMS',
    transparent: true,
    servicename: 'mat',
    layers: 'Centroide,MatrikelSkel',
    version: '1.1.0',
    ticket: kmsticket,
    styles: 'roede_centroider,roede_skel',
    format: 'image/png',
    attribution: '<a href="https://kortforsyningen.dk/" target="_blank">Styrelsen for Dataforsyning og Effektivisering</a>',
    continuousWorld: true,
    minZoom: 9
}).addTo(map);