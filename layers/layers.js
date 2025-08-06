var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PotentialLocations_1 = new ol.format.GeoJSON();
var features_PotentialLocations_1 = format_PotentialLocations_1.readFeatures(json_PotentialLocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialLocations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialLocations_1.addFeatures(features_PotentialLocations_1);
var lyr_PotentialLocations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialLocations_1, 
                style: style_PotentialLocations_1,
                popuplayertitle: 'Potential Locations',
                interactive: true,
    title: 'Potential Locations<br />\
    <img src="styles/legend/PotentialLocations_1_0.png" /> 57 - 60<br />\
    <img src="styles/legend/PotentialLocations_1_1.png" /> 60 - 70<br />\
    <img src="styles/legend/PotentialLocations_1_2.png" /> 70 - 80<br />\
    <img src="styles/legend/PotentialLocations_1_3.png" /> 80 - 90<br />\
    <img src="styles/legend/PotentialLocations_1_4.png" /> 90 - 100<br />\
    <img src="styles/legend/PotentialLocations_1_5.png" /> 100 - 110<br />\
    <img src="styles/legend/PotentialLocations_1_6.png" /> 110 - 120<br />\
    <img src="styles/legend/PotentialLocations_1_7.png" /> 120 - 130<br />\
    <img src="styles/legend/PotentialLocations_1_8.png" /> 130 - 140<br />\
    <img src="styles/legend/PotentialLocations_1_9.png" /> 140 - 145<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PotentialLocations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PotentialLocations_1];
lyr_PotentialLocations_1.set('fieldAliases', {'Location Name': 'Location Name', 'Total Score': 'Total Score', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PotentialLocations_1.set('fieldImages', {'Location Name': 'TextEdit', 'Total Score': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PotentialLocations_1.set('fieldLabels', {'Location Name': 'inline label - visible with data', 'Total Score': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_PotentialLocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});