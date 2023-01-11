var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DBOT_to_Shapefilecopy_1 = new ol.format.GeoJSON();
var features_DBOT_to_Shapefilecopy_1 = format_DBOT_to_Shapefilecopy_1.readFeatures(json_DBOT_to_Shapefilecopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBOT_to_Shapefilecopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBOT_to_Shapefilecopy_1.addFeatures(features_DBOT_to_Shapefilecopy_1);
var lyr_DBOT_to_Shapefilecopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DBOT_to_Shapefilecopy_1, 
                style: style_DBOT_to_Shapefilecopy_1,
                interactive: true,
    title: 'DBOT_to_Shapefile copy<br />\
    <img src="styles/legend/DBOT_to_Shapefilecopy_1_0.png" /> Fair<br />\
    <img src="styles/legend/DBOT_to_Shapefilecopy_1_1.png" /> Good<br />\
    <img src="styles/legend/DBOT_to_Shapefilecopy_1_2.png" /> N/A<br />\
    <img src="styles/legend/DBOT_to_Shapefilecopy_1_3.png" /> Poor<br />\
    <img src="styles/legend/DBOT_to_Shapefilecopy_1_4.png" /> <br />'
        });
var format_DBOT_to_Shapefile_2 = new ol.format.GeoJSON();
var features_DBOT_to_Shapefile_2 = format_DBOT_to_Shapefile_2.readFeatures(json_DBOT_to_Shapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBOT_to_Shapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBOT_to_Shapefile_2.addFeatures(features_DBOT_to_Shapefile_2);
var lyr_DBOT_to_Shapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DBOT_to_Shapefile_2, 
                style: style_DBOT_to_Shapefile_2,
                interactive: true,
    title: 'DBOT_to_Shapefile<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_0.png" /> FPV<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_1.png" /> M210<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_2.png" /> M300<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_3.png" /> N/A<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_4.png" /> Pyro<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_5.png" /> Robird<br />\
    <img src="styles/legend/DBOT_to_Shapefile_2_6.png" /> <br />'
        });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_DBOT_to_Shapefilecopy_1.setVisible(true);lyr_DBOT_to_Shapefile_2.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_DBOT_to_Shapefilecopy_1,lyr_DBOT_to_Shapefile_2];
lyr_DBOT_to_Shapefilecopy_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Lat': 'Lat', 'Long': 'Long', 'Bearing': 'Bearing', 'Distance__': 'Distance__', 'Date': 'Date', 'Time': 'Time', 'Month': 'Month', 'Week': 'Week', 'Crew_Membe': 'Crew_Membe', 'Location': 'Location', 'Section': 'Section', 'Lat_1': 'Lat_1', 'Long_1': 'Long_1', 'Bearing_1': 'Bearing_1', 'Guild': 'Guild', 'Species': 'Species', 'Number_See': 'Number_See', 'Oiled': 'Oiled', 'Oil_Level': 'Oil_Level', 'Wind_Speed': 'Wind_Speed', 'Wind_Direc': 'Wind_Direc', 'Cloud_Cove': 'Cloud_Cove', 'Precipitat': 'Precipitat', 'F__Robird_': 'F__Robird_', 'F__M300_Fl': 'F__M300_Fl', 'F__FPV_Fli': 'F__FPV_Fli', 'F__M210_Fl': 'F__M210_Fl', 'F__Pyro_Us': 'F__Pyro_Us', 'Behavior_O': 'Behavior_O', 'Primary_Di': 'Primary_Di', 'Secondary': 'Secondary', 'Hazing_Typ': 'Hazing_Typ', 'Dispersal': 'Dispersal', 'Comments': 'Comments', 'Distance_1': 'Distance_1', 'ORIG_FID': 'ORIG_FID', });
lyr_DBOT_to_Shapefile_2.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Lat': 'Lat', 'Long': 'Long', 'Bearing': 'Bearing', 'Distance__': 'Distance__', 'Date': 'Date', 'Time': 'Time', 'Month': 'Month', 'Week': 'Week', 'Crew_Membe': 'Crew_Membe', 'Location': 'Location', 'Section': 'Section', 'Lat_1': 'Lat_1', 'Long_1': 'Long_1', 'Bearing_1': 'Bearing_1', 'Guild': 'Guild', 'Species': 'Species', 'Number_See': 'Number_See', 'Oiled': 'Oiled', 'Oil_Level': 'Oil_Level', 'Wind_Speed': 'Wind_Speed', 'Wind_Direc': 'Wind_Direc', 'Cloud_Cove': 'Cloud_Cove', 'Precipitat': 'Precipitat', 'F__Robird_': 'F__Robird_', 'F__M300_Fl': 'F__M300_Fl', 'F__FPV_Fli': 'F__FPV_Fli', 'F__M210_Fl': 'F__M210_Fl', 'F__Pyro_Us': 'F__Pyro_Us', 'Behavior_O': 'Behavior_O', 'Primary_Di': 'Primary_Di', 'Secondary': 'Secondary', 'Hazing_Typ': 'Hazing_Typ', 'Dispersal': 'Dispersal', 'Comments': 'Comments', 'Distance_1': 'Distance_1', 'ORIG_FID': 'ORIG_FID', });
lyr_DBOT_to_Shapefilecopy_1.set('fieldImages', {'Join_Count': '', 'TARGET_FID': '', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Bearing': 'TextEdit', 'Distance__': 'Range', 'Date': 'DateTime', 'Time': 'TextEdit', 'Month': 'TextEdit', 'Week': 'TextEdit', 'Crew_Membe': 'TextEdit', 'Location': 'TextEdit', 'Section': 'TextEdit', 'Lat_1': '', 'Long_1': '', 'Bearing_1': '', 'Guild': 'TextEdit', 'Species': 'TextEdit', 'Number_See': 'TextEdit', 'Oiled': 'TextEdit', 'Oil_Level': 'TextEdit', 'Wind_Speed': 'TextEdit', 'Wind_Direc': 'TextEdit', 'Cloud_Cove': 'TextEdit', 'Precipitat': 'TextEdit', 'F__Robird_': 'TextEdit', 'F__M300_Fl': 'TextEdit', 'F__FPV_Fli': 'TextEdit', 'F__M210_Fl': 'TextEdit', 'F__Pyro_Us': 'TextEdit', 'Behavior_O': 'TextEdit', 'Primary_Di': 'TextEdit', 'Secondary': 'TextEdit', 'Hazing_Typ': 'TextEdit', 'Dispersal': 'TextEdit', 'Comments': 'TextEdit', 'Distance_1': '', 'ORIG_FID': '', });
lyr_DBOT_to_Shapefile_2.set('fieldImages', {'Join_Count': '', 'TARGET_FID': '', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Bearing': 'TextEdit', 'Distance__': 'Range', 'Date': 'DateTime', 'Time': 'TextEdit', 'Month': 'TextEdit', 'Week': 'TextEdit', 'Crew_Membe': 'TextEdit', 'Location': 'TextEdit', 'Section': 'TextEdit', 'Lat_1': '', 'Long_1': '', 'Bearing_1': '', 'Guild': 'TextEdit', 'Species': 'TextEdit', 'Number_See': 'TextEdit', 'Oiled': 'TextEdit', 'Oil_Level': 'TextEdit', 'Wind_Speed': 'TextEdit', 'Wind_Direc': 'TextEdit', 'Cloud_Cove': 'TextEdit', 'Precipitat': 'TextEdit', 'F__Robird_': 'TextEdit', 'F__M300_Fl': 'TextEdit', 'F__FPV_Fli': 'TextEdit', 'F__M210_Fl': 'TextEdit', 'F__Pyro_Us': 'TextEdit', 'Behavior_O': 'TextEdit', 'Primary_Di': 'TextEdit', 'Secondary': 'TextEdit', 'Hazing_Typ': 'TextEdit', 'Dispersal': 'TextEdit', 'Comments': 'TextEdit', 'Distance_1': '', 'ORIG_FID': '', });
lyr_DBOT_to_Shapefilecopy_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Bearing': 'no label', 'Distance__': 'no label', 'Date': 'no label', 'Time': 'no label', 'Month': 'no label', 'Week': 'no label', 'Crew_Membe': 'no label', 'Location': 'no label', 'Section': 'no label', 'Lat_1': 'no label', 'Long_1': 'no label', 'Bearing_1': 'no label', 'Guild': 'no label', 'Species': 'no label', 'Number_See': 'no label', 'Oiled': 'no label', 'Oil_Level': 'no label', 'Wind_Speed': 'no label', 'Wind_Direc': 'no label', 'Cloud_Cove': 'no label', 'Precipitat': 'no label', 'F__Robird_': 'no label', 'F__M300_Fl': 'no label', 'F__FPV_Fli': 'no label', 'F__M210_Fl': 'no label', 'F__Pyro_Us': 'no label', 'Behavior_O': 'no label', 'Primary_Di': 'no label', 'Secondary': 'no label', 'Hazing_Typ': 'no label', 'Dispersal': 'no label', 'Comments': 'no label', 'Distance_1': 'no label', 'ORIG_FID': 'no label', });
lyr_DBOT_to_Shapefile_2.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Bearing': 'no label', 'Distance__': 'no label', 'Date': 'no label', 'Time': 'no label', 'Month': 'no label', 'Week': 'no label', 'Crew_Membe': 'no label', 'Location': 'no label', 'Section': 'no label', 'Lat_1': 'no label', 'Long_1': 'no label', 'Bearing_1': 'no label', 'Guild': 'no label', 'Species': 'no label', 'Number_See': 'no label', 'Oiled': 'no label', 'Oil_Level': 'no label', 'Wind_Speed': 'no label', 'Wind_Direc': 'no label', 'Cloud_Cove': 'no label', 'Precipitat': 'no label', 'F__Robird_': 'no label', 'F__M300_Fl': 'no label', 'F__FPV_Fli': 'no label', 'F__M210_Fl': 'no label', 'F__Pyro_Us': 'no label', 'Behavior_O': 'no label', 'Primary_Di': 'no label', 'Secondary': 'no label', 'Hazing_Typ': 'no label', 'Dispersal': 'no label', 'Comments': 'no label', 'Distance_1': 'no label', 'ORIG_FID': 'no label', });
lyr_DBOT_to_Shapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});