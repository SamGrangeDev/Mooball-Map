var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_10mContours_2 = new ol.format.GeoJSON();
var features_10mContours_2 = format_10mContours_2.readFeatures(json_10mContours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10mContours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10mContours_2.addFeatures(features_10mContours_2);
var lyr_10mContours_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10mContours_2, 
                style: style_10mContours_2,
                popuplayertitle: '10m Contours',
                interactive: false,
                title: '<img src="styles/legend/10mContours_2.png" /> 10m Contours'
            });
var lyr_MooballMasterplan_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Mooball Masterplan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/MooballMasterplan_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [17085818.452900, -3305662.531185, 17087283.057652, -3304752.372790]
                            })
                        });
var format_MooballParcels_4 = new ol.format.GeoJSON();
var features_MooballParcels_4 = format_MooballParcels_4.readFeatures(json_MooballParcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooballParcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooballParcels_4.addFeatures(features_MooballParcels_4);
var lyr_MooballParcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MooballParcels_4, 
                style: style_MooballParcels_4,
                popuplayertitle: 'Mooball Parcels',
                interactive: true,
                title: '<img src="styles/legend/MooballParcels_4.png" /> Mooball Parcels'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_MooballParcels_4,],
                                fold: "open",
                                title: 'Administrative'});
var group_Masterplan = new ol.layer.Group({
                                layers: [lyr_MooballMasterplan_3,],
                                fold: "open",
                                title: 'Masterplan'});
var group_Contours = new ol.layer.Group({
                                layers: [lyr_10mContours_2,],
                                fold: "open",
                                title: 'Contours'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_10mContours_2.setVisible(false);lyr_MooballMasterplan_3.setVisible(true);lyr_MooballParcels_4.setVisible(true);
var layersList = [group_BaseLayer,group_Contours,group_Masterplan,group_Administrative];
lyr_10mContours_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'RID', 'topoid': 'topoid', 'createdate': 'createdate', 'objectmoddate': 'objectmoddate', 'featuremoddate': 'featuremoddate', 'classsubtype': 'classsubtype', 'featurereliabilitydate': 'featurereliabilitydate', 'attributereliabilitydate': 'attributereliabilitydate', 'capturesourcecode': 'capturesourcecode', 'capturemethodcode': 'capturemethodcode', 'planimetricaccuracy': 'planimetricaccuracy', 'verticalaccuracy': 'verticalaccuracy', 'elevation': 'elevation', 'sourceprogram': 'sourceprogram', 'relevance': 'relevance', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'msoid': 'msoid', 'centroidid': 'centroidid', 'shapeuuid': 'shapeuuid', 'changetype': 'changetype', 'processstate': 'processstate', 'urbanity': 'urbanity', 'shape_Length': 'shape_Length', });
lyr_MooballParcels_4.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Current Zoning': 'Current Zoning', 'LotPlan': 'LotPlan', });
lyr_10mContours_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'topoid': 'TextEdit', 'createdate': 'DateTime', 'objectmoddate': 'DateTime', 'featuremoddate': 'DateTime', 'classsubtype': 'TextEdit', 'featurereliabilitydate': 'DateTime', 'attributereliabilitydate': 'DateTime', 'capturesourcecode': 'Range', 'capturemethodcode': 'Range', 'planimetricaccuracy': 'TextEdit', 'verticalaccuracy': 'TextEdit', 'elevation': 'TextEdit', 'sourceprogram': 'Range', 'relevance': 'Range', 'startdate': 'DateTime', 'enddate': 'DateTime', 'lastupdate': 'DateTime', 'msoid': 'TextEdit', 'centroidid': 'TextEdit', 'shapeuuid': 'TextEdit', 'changetype': 'TextEdit', 'processstate': 'TextEdit', 'urbanity': 'TextEdit', 'shape_Length': 'TextEdit', });
lyr_MooballParcels_4.set('fieldImages', {'fid': 'TextEdit', 'Address': '', 'Current Zoning': '', 'LotPlan': '', });
lyr_10mContours_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'topoid': 'no label', 'createdate': 'no label', 'objectmoddate': 'no label', 'featuremoddate': 'no label', 'classsubtype': 'no label', 'featurereliabilitydate': 'no label', 'attributereliabilitydate': 'no label', 'capturesourcecode': 'no label', 'capturemethodcode': 'no label', 'planimetricaccuracy': 'no label', 'verticalaccuracy': 'no label', 'elevation': 'no label', 'sourceprogram': 'no label', 'relevance': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'msoid': 'no label', 'centroidid': 'no label', 'shapeuuid': 'no label', 'changetype': 'no label', 'processstate': 'no label', 'urbanity': 'no label', 'shape_Length': 'no label', });
lyr_MooballParcels_4.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - always visible', 'Current Zoning': 'inline label - always visible', 'LotPlan': 'inline label - always visible', });
lyr_MooballParcels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});