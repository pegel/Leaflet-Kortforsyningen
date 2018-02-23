<?php include('ticket/ticket.php')?>
<!DOCTYPE html>
<html>
    <head>
        <title>Leaflet+Kortforsyningen WMS</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- SDFE ticket scripts -->
        <script src="ticket/ticket_utils.js"></script>
        <script src="ticket/ticket.js"></script>
        
        <!-- style sheets -->
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />
    </head>
    <body>
        <div id="mapid"></div>
        
        <!-- leaflet.js from CDN, http://leafletjs.com/ -->
        <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
        
        <!-- proj4.js from CDN, http://proj4js.org/ -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js"></script>
        
        <!-- proj4leaflet.js from CDN, http://kartena.github.io/Proj4Leaflet/ -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4leaflet/1.0.2/proj4leaflet.min.js"></script>
        
        <!-- initialization script -->
        <script src="script.js"></script>
    </body>
</html>
