var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Grifos_2 = new ol.format.GeoJSON();
var features_Grifos_2 = format_Grifos_2.readFeatures(json_Grifos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grifos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grifos_2.addFeatures(features_Grifos_2);
var lyr_Grifos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grifos_2, 
                style: style_Grifos_2,
                popuplayertitle: 'Grifos',
                interactive: true,
    title: 'Grifos<br />\
    <img src="styles/legend/Grifos_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Grifos_2_1.png" /> NO ENCONTRADO<br />\
    <img src="styles/legend/Grifos_2_2.png" /> PINTADO<br />\
    <img src="styles/legend/Grifos_2_3.png" /> PINTADO Y SEÑALIZADO<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Grifos_2,],
                                fold: 'open',
                                title: 'Levantamiento'});

lyr_GoogleSatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Grifos_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OpenStreetMap_1,group_Levantamiento];
lyr_Grifos_2.set('fieldAliases', {'fid': 'fid', 'ID_GRIFO': 'ID_GRIFO', 'ESTADO': 'ESTADO', 'VV_PIE': 'VV_PIE', 'OBSERVACIONES': 'OBSERVACIONES', 'FOTOGRAFIA1': 'FOTOGRAFIA1', 'FOTOGRAFIA2': 'FOTOGRAFIA2', 'FOTOGRAFIA3': 'FOTOGRAFIA3', 'FOTOGRAFIA4': 'FOTOGRAFIA4', 'TAPA_BOCA': 'TAPA_BOCA', });
lyr_Grifos_2.set('fieldImages', {'fid': 'Hidden', 'ID_GRIFO': 'TextEdit', 'ESTADO': 'ValueMap', 'VV_PIE': 'ValueMap', 'OBSERVACIONES': 'TextEdit', 'FOTOGRAFIA1': 'ExternalResource', 'FOTOGRAFIA2': 'ExternalResource', 'FOTOGRAFIA3': 'ExternalResource', 'FOTOGRAFIA4': 'ExternalResource', 'TAPA_BOCA': 'ValueMap', });
lyr_Grifos_2.set('fieldLabels', {'ID_GRIFO': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'VV_PIE': 'no label', 'OBSERVACIONES': 'no label', 'FOTOGRAFIA1': 'inline label - visible with data', 'FOTOGRAFIA2': 'inline label - visible with data', 'FOTOGRAFIA3': 'inline label - visible with data', 'FOTOGRAFIA4': 'inline label - visible with data', 'TAPA_BOCA': 'inline label - visible with data', });
lyr_Grifos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});